import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

export function GET(_req: NextRequest) {
  return NextResponse.json({ success: true }, { status: 200 });
}
