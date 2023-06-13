"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyLogoSvgCss = exports.jobEntryCss = exports.jobEntrySectionCss = exports.sectionHeadingCss = exports.heroTitleCss = exports.sectionCss = exports.pageContentCss = void 0;
var header_css_1 = require("@/app/header.css");
var sprinkles_css_1 = require("@osdiab-website/ui/sprinkles.css");
var stack_css_1 = require("@osdiab-website/ui/stack.css");
var css_1 = require("@vanilla-extract/css");
var sprinkles_css_2 = require("@osdiab-website/ui/sprinkles.css");
exports.pageContentCss = (0, css_1.style)([(0, stack_css_1.stackCss)({ direction: "y", gap: "xl" })]);
exports.sectionCss = (0, css_1.style)([
    (0, stack_css_1.stackCss)({ direction: "y", gap: "lg" }),
    (0, sprinkles_css_1.sprinkles)({ paddingX: header_css_1.headerPaddingX, paddingY: "lg" }),
]);
exports.heroTitleCss = (0, css_1.style)([
    (0, sprinkles_css_1.sprinkles)({ textSize: "xl4" }),
    { maxWidth: "40ch" },
]);
exports.sectionHeadingCss = (0, css_1.style)([(0, sprinkles_css_1.sprinkles)({ textSize: "xl2" })]);
exports.jobEntrySectionCss = (0, css_1.style)([
    (0, stack_css_1.stackCss)({ direction: "y", gap: "lg" }),
]);
exports.jobEntryCss = (0, css_1.style)([
    (0, stack_css_1.stackCss)({ direction: "y", gap: "md" }),
    { maxWidth: "60ch" },
]);
exports.companyLogoSvgCss = (0, css_1.style)({ height: sprinkles_css_2.fontSize.xl4 });
