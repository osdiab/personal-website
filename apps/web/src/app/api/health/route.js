"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
var server_1 = require("next/server");
function GET(_req) {
    return server_1.NextResponse.json({ success: true }, { status: 200 });
}
exports.GET = GET;
