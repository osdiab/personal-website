"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteTitleCss = exports.logoCss = exports.siteHeaderScrolledCss = exports.siteHeaderCss = exports.headerPaddingX = void 0;
var sprinkles_css_1 = require("@osdiab-website/ui/sprinkles.css");
var stack_css_1 = require("@osdiab-website/ui/stack.css");
var css_1 = require("@vanilla-extract/css");
exports.headerPaddingX = "lg";
exports.siteHeaderCss = (0, css_1.style)([
    (0, stack_css_1.stackCss)({ direction: "x", gap: "lg" }),
    (0, sprinkles_css_1.sprinkles)({ fontSize: "lg", paddingX: exports.headerPaddingX, paddingY: "md" }),
    {
        position: "sticky",
        top: 0,
        background: "white",
        borderBottom: "1px solid transparent",
        transition: "border-bottom 0.3s",
    },
]);
exports.siteHeaderScrolledCss = (0, css_1.style)({
    borderBottomColor: sprinkles_css_1.grayColors["gray-200"],
});
exports.logoCss = (0, css_1.style)([{ height: sprinkles_css_1.fontSize.xl2 }]);
exports.siteTitleCss = (0, css_1.style)([(0, sprinkles_css_1.sprinkles)({ fontWeight: "bold" })]);
