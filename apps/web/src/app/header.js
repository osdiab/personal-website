"use client"; // for scrolled interactivity
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootHeader = void 0;
var header_css_1 = require("@/app/header.css");
var logo_svg_1 = require("@/app/logo.svg");
var clsx_1 = require("clsx");
var react_1 = require("react");
function RootHeader(_a) {
    var className = _a.className;
    var _b = (0, react_1.useState)(false), isScrolled = _b[0], setIsScrolled = _b[1];
    var dummyRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function setScrollStateByDummyVisibility() {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setIsScrolled(entry ? !entry.isIntersecting : false);
        }, { threshold: [1] });
        if (dummyRef.current) {
            observer.observe(dummyRef.current);
        }
        return function () {
            if (dummyRef.current) {
                observer.unobserve(dummyRef.current);
            }
        };
    }, []);
    return (<>
      {/* dummy element to watch if still on screen to determine if we've
        scrolled down */}
      <span ref={dummyRef}/>
      <header className={(0, clsx_1.default)(header_css_1.siteHeaderCss, isScrolled && header_css_1.siteHeaderScrolledCss, className)}>
        <logo_svg_1.default className={header_css_1.logoCss}/>
        <span className={header_css_1.siteTitleCss}>Omar Diab</span>
      </header>
    </>);
}
exports.RootHeader = RootHeader;
