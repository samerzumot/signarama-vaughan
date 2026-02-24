import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const email = formData.get("email") as string;
        const businessName = formData.get("business_name") as string;
        const businessAddress = formData.get("business_address") as string;
        const signType = formData.get("sign_type") as string;
        const message = formData.get("message") as string;

        // Collect all file attachments
        const attachments: { filename: string; content: Buffer }[] = [];
        const allEntries = formData.getAll("attachment");
        for (const entry of allEntries) {
            if (entry instanceof File && entry.size > 0) {
                const buffer = Buffer.from(await entry.arrayBuffer());
                attachments.push({
                    filename: entry.name,
                    content: buffer,
                });
            }
        }

        // Build email HTML
        const html = `
      <h2>New Quote Request - Signarama Vaughan</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
        ${businessName ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Business Name</td><td style="padding: 8px; border: 1px solid #ddd;">${businessName}</td></tr>` : ""}
        ${businessAddress ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Business Address</td><td style="padding: 8px; border: 1px solid #ddd;">${businessAddress}</td></tr>` : ""}
        ${signType ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Sign Type</td><td style="padding: 8px; border: 1px solid #ddd;">${signType}</td></tr>` : ""}
        ${message ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>` : ""}
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Attachments</td><td style="padding: 8px; border: 1px solid #ddd;">${attachments.length > 0 ? attachments.map((a) => a.filename).join(", ") : "None"}</td></tr>
      </table>
    `;

        const { error } = await resend.emails.send({
            from: "Signarama Vaughan <quotes@custombusinesssigns.ca>",
            to: "info@signarama-vaughan.com",
            replyTo: email,
            subject: `New Quote Request from ${name}`,
            html,
            attachments,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("API error:", err);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
