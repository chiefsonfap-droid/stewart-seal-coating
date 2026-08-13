import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[/api/quote] staging capture — Steward uf3jzmw1YurT1UHhcCI1", {
      at: new Date().toISOString(),
      org: body?.org,
      name: body?.name,
      email: body?.email,
      city: body?.city,
      lotSize: body?.lotSize,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
}
