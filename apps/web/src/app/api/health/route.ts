import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  console.log("Requested", {
    headers: Object.fromEntries(req.headers.entries()),
  });
  return NextResponse.json({ success: true }, { status: 200 });
}
