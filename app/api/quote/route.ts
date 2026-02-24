import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        // Forward the entire form (including files) to FormSubmit
        const response = await fetch(
            "https://formsubmit.co/ajax/info@signarama-vaughan.com",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();
        return NextResponse.json(data, { status: response.ok ? 200 : 500 });
    } catch {
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
