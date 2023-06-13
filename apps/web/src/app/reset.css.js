"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// converted the Tailwind Preflight to vanilla extract with ChatGPT
// https://tailwindcss.com/docs/preflight
var css_1 = require("@vanilla-extract/css");
var sprinkles_css_1 = require("@osdiab-website/ui/sprinkles.css");
// Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
// Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
(0, css_1.globalStyle)("*", {
    boxSizing: "border-box" /* 1 */,
    borderWidth: 0 /* 2 */,
    borderStyle: "solid" /* 2 */,
    borderColor: "currentColor" /* 2 */,
});
var defaultFont = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
// Use a consistent sensible line-height in all browsers.
// Prevent adjustments of font size after orientation changes in iOS.
// Use a more readable tab size.
// Use the user's configured `sans` font-family by default.
(0, css_1.globalStyle)("html", {
    lineHeight: 1.5 /* 1 */,
    WebkitTextSizeAdjust: "100%" /* 2 */,
    MozTabSize: 4 /* 3 */,
    tabSize: 4 /* 3 */,
    fontFamily: defaultFont /* 4 */,
});
// Remove the margin in all browsers.
// Inherit line-height from `html` so users can set them as a class directly on the `html` element.
(0, css_1.globalStyle)("body", {
    margin: 0 /* 1 */,
    lineHeight: "inherit" /* 2 */,
});
// Add the correct height in Firefox.
// Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
// Ensure horizontal rules are visible by default.
(0, css_1.globalStyle)("hr", {
    height: 0 /* 1 */,
    color: "inherit" /* 2 */,
    borderTopWidth: "1px" /* 3 */,
});
// Add the correct text decoration in Chrome, Edge, and Safari.
(0, css_1.globalStyle)("abbr:where([title])", {
    textDecoration: "underline dotted",
});
// Remove the default font size and weight for headings.
(0, css_1.globalStyle)("h1, h2, h3, h4, h5, h6", {
    fontSize: "inherit",
    fontWeight: "inherit",
});
// Reset links to optimize for opt-in styling instead of opt-out.
(0, css_1.globalStyle)("a", {
    color: "inherit",
    textDecoration: "inherit",
});
// Add the correct font weight in Edge and Safari.
(0, css_1.globalStyle)("b, strong", {
    fontWeight: "bolder",
});
// Use the user's configured `mono` font family by default.
// Correct the odd `em` font sizing in all browsers.
(0, css_1.globalStyle)("code, kbd, samp, pre", {
    // used from Github system font stack
    fontFamily: 'ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier' /* 1 */,
    fontSize: "1em" /* 2 */,
});
// Add the correct font size in all browsers.
(0, css_1.globalStyle)("small", {
    fontSize: "80%",
});
// Prevent `sub` and `sup` elements from affecting the line height in all browsers.
(0, css_1.globalStyle)("sub, sup", {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
});
(0, css_1.globalStyle)("sub", {
    bottom: "-0.25em",
});
(0, css_1.globalStyle)("sup", {
    top: "-0.5em",
});
// Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
// Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=188329)
(0, css_1.globalStyle)("table", {
    textIndent: 0 /* 1 */,
    borderColor: "inherit" /* 2 */,
    borderCollapse: "collapse" /* 3 */,
});
// Reset button, input, optgroup, select, and textarea to a more consistent default style across browsers.
(0, css_1.globalStyle)("button, input, optgroup, select, textarea", {
    fontFamily: "inherit" /* 1 */,
    fontSize: "100%" /* 1 */,
    fontWeight: "inherit" /* 1 */,
    lineHeight: "inherit" /* 1 */,
    color: "inherit" /* 1 */,
    margin: 0 /* 2 */,
    padding: 0 /* 3 */,
});
// Remove the margin in Firefox and Safari.
// Remove the inheritance of text transform in Edge and Firefox.
(0, css_1.globalStyle)("button, select", {
    textTransform: "none",
});
// Correct the inability to style buttons in iOS and Safari.
// Remove the inner border and padding in Firefox.
(0, css_1.globalStyle)('button, [type="button"], [type="reset"], [type="submit"]', {
    WebkitAppearance: "button" /* 1 */,
    backgroundColor: "transparent" /* 2 */,
    backgroundImage: "none" /* 2 */,
});
// Correct the outline style in Safari.
(0, css_1.globalStyle)(":-moz-focusring", {
    outline: "auto",
});
// Remove the inner padding in Chrome and Safari on macOS.
(0, css_1.globalStyle)(":-moz-ui-invalid", {
    boxShadow: "none",
});
// Improve the readability and consistency of the progress element in latest Chrome, Firefox, and Safari.
(0, css_1.globalStyle)("progress", {
    verticalAlign: "baseline",
});
// Remove the default vertical scrollbar in IE 10+.
(0, css_1.globalStyle)("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
    height: "auto",
});
// Correct the odd appearance in Chrome and Safari.
(0, css_1.globalStyle)('[type="search"]', {
    WebkitAppearance: "textfield" /* 1 */,
    outlineOffset: "-2px" /* 2 */,
});
// Remove the inner padding in Chrome and Safari on macOS.
(0, css_1.globalStyle)("::-webkit-search-decoration", {
    WebkitAppearance: "none",
});
// Correct the inability to style clickable types in iOS and Safari.
(0, css_1.globalStyle)("::-webkit-file-upload-button", {
    WebkitAppearance: "button" /* 1 */,
    font: "inherit" /* 2 */,
});
// Add the correct display in all browsers.
(0, css_1.globalStyle)("summary", {
    display: "list-item",
});
// Remove the margin in all browsers.
(0, css_1.globalStyle)("blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre", {
    margin: 0,
});
// Remove the padding in IE 10+.
(0, css_1.globalStyle)("fieldset", {
    margin: 0,
    padding: 0,
});
// Remove the padding in IE 10+.
(0, css_1.globalStyle)("legend", {
    padding: 0,
});
// Remove the default list styles in all browsers.
(0, css_1.globalStyle)("ol, ul, menu", {
    listStyle: "none",
    margin: 0,
    padding: 0,
});
// Correct the resizing direction on textareas.
(0, css_1.globalStyle)("textarea", {
    resize: "vertical",
});
// Placeholder color fix
(0, css_1.globalStyle)("input::placeholder, textarea::placeholder", {
    opacity: 1 /* 1 */,
    color: sprinkles_css_1.grayColors["gray-400"] /* 2 */,
});
// Default cursor for clickable elements
(0, css_1.globalStyle)('button, [role="button"]', {
    cursor: "pointer",
});
// Disabled cursor
(0, css_1.globalStyle)(":disabled", {
    cursor: "default",
});
// Default display for media elements
(0, css_1.globalStyle)("img, svg, video, canvas, audio, iframe, embed, object", {
    display: "block" /* 1 */,
    verticalAlign: "middle" /* 2 */,
});
// Responsive images and videos
(0, css_1.globalStyle)("img, video", {
    maxWidth: "100%",
    height: "auto",
});
// Hide elements with the hidden attribute
(0, css_1.globalStyle)("[hidden]", {
    display: "none",
});
