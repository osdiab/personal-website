"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var header_1 = require("@/app/header");
var layout_css_1 = require("@/app/layout.css");
require("@/app/reset.css");
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={layout_css_1.contentCss}>
        <header_1.RootHeader />
        <main>{children}</main>
      </body>
    </html>);
}
exports.default = RootLayout;
