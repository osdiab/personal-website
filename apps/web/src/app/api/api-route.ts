import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export type ApiRoute = (
  req: NextRequest
) => Promise<NextResponse> | NextResponse;
