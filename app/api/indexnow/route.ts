import { NextResponse } from "next/server";

import { services } from "../../lib/services";
import { permits } from "../../lib/permits";

export const dynamic = 'force-dynamic';

export async function GET() {
  const host = "www.custombusinesssigns.ca";
  const key = "7b0f03fb7c4a9ba26b3cd60be3d86ca1";
  const keyLocation = `https://${host}/${key}.txt`;
  
  const staticPaths = [
    "",
    "/services",
    "/about",
    "/contact",
    "/sign-permits",
    "/sustainability",
  ];

  const cityPaths = permits.map(p => `/sign-permits/${p.slug}`);
  const servicePaths = services.map(s => `/services/${s.slug}`);
  
  const urlList = [
    ...staticPaths,
    ...cityPaths,
    ...servicePaths,
  ].map(p => `https://${host}${p}`);

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Submitted to IndexNow" });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, error: errorText }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
