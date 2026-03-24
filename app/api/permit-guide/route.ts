import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email as string;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    // 1. Record the lead
    await recordLead(email);

    // 2. Send internal notification to the business
    const { error: notifyError } = await getResend().emails.send({
      from: "Signarama Vaughan <quotes@custombusinesssigns.ca>",
      to: "info@signarama-vaughan.com",
      subject: `📥 New Permit Guide Download: ${email}`,
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
        <p style="margin-top: 16px; color: #666;">This lead requested the 2026 GTA Sign Permit Guide PDF. Follow up with a personalized email offering permit consultation services.</p>
      `,
    });

    if (notifyError) {
      console.error("Resend notify error:", notifyError);
    }

    // 3. Send confirmation email to the requester
    const { error: confirmError } = await getResend().emails.send({
      from: "Signarama Vaughan <quotes@custombusinesssigns.ca>",
      to: email,
      subject: "Your 2026 GTA Sign Permit Guide",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #da291c; padding: 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">Your GTA Sign Permit Guide</h1>
          </div>
          <div style="padding: 32px 24px; background: #f8f9fa;">
            <p style="font-size: 16px; color: #1a1a2e; line-height: 1.6;">
              Thank you for requesting the <strong>2026 GTA Sign Permit Guide</strong>. Our team is preparing your personalized permit checklist and fee calculator.
            </p>
            <p style="font-size: 16px; color: #1a1a2e; line-height: 1.6;">
              In the meantime, you can explore the full interactive guide online:
            </p>
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://www.custombusinesssigns.ca/sign-permits" style="background: #da291c; color: #fff; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px;">
                View the Full Guide Online
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <h3 style="color: #1a1a2e; font-size: 18px;">Need help with your sign permit?</h3>
            <p style="font-size: 14px; color: #4a5568; line-height: 1.6;">
              We handle <strong>100% of the permitting process</strong> for every sign we build — from engineering drawings to municipal submissions. Our approval rate across the GTA is <strong>97%</strong>.
            </p>
            <p style="font-size: 14px; color: #4a5568;">
              Call us directly: <a href="tel:+19055978635" style="color: #da291c; font-weight: bold;">(905) 597-8635</a>
            </p>
          </div>
          <div style="background: #1a1a2e; padding: 16px 24px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Signarama Vaughan · 7250 Keele St, Unit 286, Vaughan ON L4K 1Z8<br />
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
