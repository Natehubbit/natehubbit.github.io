"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var constants_1 = require("../../common/constants");
var classnames_1 = require("classnames");
var logo_svg_1 = require("../../assets/logo.svg");
var logo_mobile_svg_1 = require("../../assets/logo-mobile.svg");
var Navbar = function () {
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['logo'] },
            react_1["default"].createElement("a", { href: '/' },
                react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: 'logo', className: classnames_1["default"]('d-none', 'd-md-flex') })),
            react_1["default"].createElement("a", { href: '/' },
                react_1["default"].createElement("img", { src: logo_mobile_svg_1["default"], className: classnames_1["default"]('d-md-none'), alt: 'logo' }))),
        react_1["default"].createElement("div", { className: classnames_1["default"](style_module_scss_1["default"]['social'], 'd-none d-md-flex') }, constants_1.NAV_LINKS.map(function (s) {
            return react_1["default"].createElement("a", { key: s.link, href: s.link, target: '_blank', rel: "noreferrer" },
                react_1["default"].createElement("img", { src: s.icon, alt: s.alt }));
        })),
        react_1["default"].createElement("div", { className: classnames_1["default"](style_module_scss_1["default"]['social-mobile'], 'd-md-none') }, constants_1.NAV_LINKS.map(function (s) {
            return react_1["default"].createElement("a", { key: s.link, href: s.link, target: '_blank', rel: "noreferrer" },
                react_1["default"].createElement("img", { src: s.icon, alt: s.alt }));
        }))));
};
exports["default"] = Navbar;
