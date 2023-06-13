"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentCss = void 0;
var stack_css_1 = require("@osdiab-website/ui/stack.css");
var css_1 = require("@vanilla-extract/css");
exports.contentCss = (0, css_1.style)([
    (0, stack_css_1.stackCss)({ direction: "y", gap: "lg", alignItems: "stretch" }),
]);
