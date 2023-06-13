import { NextRequest, NextResponse } from "next/server";

export function GET(_req: NextRequest) {
  console.log("Requested", { headers: [_req.headers.entries()] });
  return NextResponse.json({ success: true }, { status: 200 });
}
