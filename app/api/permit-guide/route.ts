import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";
import { permits } from "../../lib/permits";
import { jsPDF } from "jspdf";

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const LEADS_FILE = path.join(process.cwd(), "data", "permit-guide-leads.json");

async function recordLead(email: string) {
  const entry = { email, requestedAt: new Date().toISOString() };
  try {
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
    let leads: any[] = [];
    try {
      const existing = await fs.readFile(LEADS_FILE, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      // File doesn't exist yet
    }
    leads.push(entry);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (err) {
    console.error("Failed to record lead:", err);
  }
}

function generatePermitPDF(): Buffer {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "letter" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;

  // --- Cover / Header ---
  doc.setFillColor(218, 41, 28); // brand-red
  doc.rect(0, 0, pageWidth, 45, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("2026 GTA Sign Permit Quick Reference", pageWidth / 2, 20, { align: "center" });
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Fees, Timelines & Requirements for 10 Municipalities", pageWidth / 2, 30, { align: "center" });
  doc.setFontSize(9);
  doc.text("Prepared by Custom Business Signs Toronto  |  (905) 597-8635  |  custombusinesssigns.ca", pageWidth / 2, 38, { align: "center" });

  y = 55;

  // --- Loop through each city ---
  for (let ci = 0; ci < permits.length; ci++) {
    const p = permits[ci];

    // Check if we need a new page (need ~60mm per city block)
    if (y > 220) {
      doc.addPage();
      y = 20;
    }

    // City header bar
    doc.setFillColor(26, 26, 46); // surface-charcoal
    doc.rect(margin, y, contentWidth, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(p.city, margin + 4, y + 6);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(`Processing: ${p.processingTime}`, pageWidth - margin - 4, y + 6, { align: "right" });
    y += 12;

    // Contact info
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(8);
    doc.text(`${p.contact.name}  |  ${p.contact.phone}${p.contact.portalUrl ? "  |  " + p.contact.portalUrl : ""}`, margin, y);
    y += 6;

    // Fee table header
    doc.setFillColor(248, 249, 250);
    doc.rect(margin, y, contentWidth, 6, "F");
    doc.setTextColor(26, 26, 46);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text("Sign Type", margin + 2, y + 4);
    doc.text("Estimated Cost", margin + contentWidth / 2, y + 4);
    y += 7;

    // Fee rows
    doc.setFont("helvetica", "normal");
    doc.setTextColor(74, 85, 104);
    for (const fee of p.fees) {
      doc.text(fee.type, margin + 2, y + 3);
      doc.text(fee.cost, margin + contentWidth / 2, y + 3);
      y += 5;
    }
    y += 2;

    // Requirements
    doc.setTextColor(26, 26, 46);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text("Application Requirements:", margin, y + 3);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(74, 85, 104);
    for (let ri = 0; ri < p.requirements.length; ri++) {
      const reqText = `${ri + 1}. ${p.requirements[ri]}`;
      const lines = doc.splitTextToSize(reqText, contentWidth - 4);
      doc.text(lines, margin + 2, y + 3);
      y += lines.length * 4;
    }

    // Separator
    y += 4;
    doc.setDrawColor(220, 220, 220);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
  }

  // --- Common Denial Reasons (last page) ---
  if (y > 200) {
    doc.addPage();
    y = 20;
  }

  doc.setFillColor(218, 41, 28);
  doc.rect(margin, y, contentWidth, 8, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Top Reasons Permits Get Denied Across the GTA", margin + 4, y + 6);
  y += 14;

  const denials = [
    { reason: "Incorrect setback distances", pct: "38%", desc: "Ground and pylon signs placed too close to property lines or daylight triangles." },
    { reason: "Sign exceeds maximum size", pct: "24%", desc: "Total sign area exceeds the allowed percentage of the building frontage." },
    { reason: "Insufficient engineering documentation", pct: "18%", desc: "Missing P.Eng stamps for large, heavy, or cantilevered sign installations." },
    { reason: "Heritage guideline conflicts", pct: "12%", desc: "Non-compliance with Heritage Conservation District design restrictions." },
    { reason: "Incomplete applications", pct: "8%", desc: "Missing property owner authorization, photos, or site plans." },
  ];

  doc.setTextColor(26, 26, 46);
  for (const d of denials) {
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(`${d.pct} — ${d.reason}`, margin + 2, y + 3);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(8);
    doc.text(d.desc, margin + 6, y + 2);
    doc.setTextColor(26, 26, 46);
    y += 7;
  }

  // --- Footer CTA ---
  y += 6;
  doc.setFillColor(26, 26, 46);
  doc.rect(margin, y, contentWidth, 22, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Need help? We handle 100% of the permitting process.", pageWidth / 2, y + 8, { align: "center" });
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Call (905) 597-8635 or visit custombusinesssigns.ca/contact", pageWidth / 2, y + 16, { align: "center" });

  // Return as Buffer
  const arrayBuffer = doc.output("arraybuffer");
  return Buffer.from(arrayBuffer);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email as string;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    // 1. Record the lead
    await recordLead(email);

    // 2. Generate the PDF
    const pdfBuffer = generatePermitPDF();

    // 3. Send internal notification
    const { error: notifyError } = await getResend().emails.send({
      from: "Custom Business Signs Toronto <quotes@custombusinesssigns.ca>",
      to: "info@signarama-vaughan.com",
      subject: `📥 New Permit Guide Request: ${email}`,
      html: `
        <h2>New Permit Guide Lead</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Source</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Sign Permit Guide Landing Page</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Requested At</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })}</td>
          </tr>
        </table>
      `,
    });

    if (notifyError) {
      console.error("Resend notify error:", notifyError);
    }

    // 4. Send the guide email WITH the PDF attached
    const { error: confirmError } = await getResend().emails.send({
      from: "Custom Business Signs Toronto <quotes@custombusinesssigns.ca>",
      to: email,
      subject: "Your 2026 GTA Sign Permit Guide (PDF Attached)",
      attachments: [
        {
          filename: "GTA-Sign-Permit-Guide-2026.pdf",
          content: pdfBuffer,
        },
      ],
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #da291c; padding: 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 22px;">Your 2026 GTA Permit Guide is Attached</h1>
          </div>
          <div style="padding: 32px 24px; background: #f8f9fa;">
            <p style="font-size: 16px; color: #1a1a2e; line-height: 1.6;">
              Your <strong>GTA Sign Permit Quick Reference Guide</strong> is attached to this email as a PDF. It includes:
            </p>
            <ul style="color: #4a5568; font-size: 14px; line-height: 2;">
              <li>Permit fee estimates for all 10 GTA municipalities</li>
              <li>Processing timelines and application requirements</li>
              <li>Municipal contact information and portal links</li>
              <li>Top 5 reasons permits get denied (and how to avoid them)</li>
            </ul>
            <p style="font-size: 14px; color: #4a5568; line-height: 1.6;">
              You can also explore the full interactive guide at any time:
            </p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="https://www.custombusinesssigns.ca/sign-permits" style="background: #da291c; color: #fff; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 14px;">
                View Interactive Guide Online
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <p style="font-size: 14px; color: #4a5568; line-height: 1.6;">
              <strong>Need help with your permit?</strong> We handle 100% of the permitting process for every sign we build — 97% first-time approval rate across the GTA.
            </p>
            <p style="font-size: 14px; color: #4a5568;">
              Call us: <a href="tel:+19055978635" style="color: #da291c; font-weight: bold;">(905) 597-8635</a>
            </p>
          </div>
          <div style="background: #1a1a2e; padding: 16px 24px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Custom Business Signs Toronto · 7250 Keele St, Unit 286, Vaughan ON L4K 1Z8<br/>
              <a href="https://www.custombusinesssigns.ca" style="color: #da291c;">custombusinesssigns.ca</a>
            </p>
          </div>
        </div>
      `,
    });

    if (confirmError) {
      console.error("Resend confirm error:", confirmError);
      return NextResponse.json({ error: confirmError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Permit guide API error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
