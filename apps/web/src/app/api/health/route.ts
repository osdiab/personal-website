import { ApiRoute } from "@/app/api/api-route";
import { NextResponse } from "next/server";

export const GET: ApiRoute = (_req) => {
  return NextResponse.json({ success: true }, { status: 200 });
};
