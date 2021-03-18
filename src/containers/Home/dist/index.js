"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var Navbar_1 = require("../../components/Navbar");
var react_feather_1 = require("react-feather");
var classnames_1 = require("classnames");
var stackback2_png_1 = require("../../assets/stackback2.png");
var stack_mobile2_png_1 = require("../../assets/stack-mobile2.png");
var react_router_dom_1 = require("react-router-dom");
var UtilService_1 = require("../../services/UtilService");
var Home = function () {
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['body'] },
            react_1["default"].createElement("div", { className: style_module_scss_1["default"]['menu'] },
                react_1["default"].createElement("nav", null,
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: '/projects' },
                            react_1["default"].createElement("h4", null,
                                react_1["default"].createElement(react_feather_1.Airplay, { className: style_module_scss_1["default"].icon }),
                                "My Projects"))),
                    react_1["default"].createElement("li", { onClick: function () { return UtilService_1["default"].downloadFile('/CV.pdf'); } },
                        react_1["default"].createElement("h4", null,
                            react_1["default"].createElement(react_feather_1.Download, { className: style_module_scss_1["default"].icon }),
                            "My Resume")))),
            react_1["default"].createElement("div", { className: classnames_1["default"](style_module_scss_1["default"]['stack'], 'd-none d-lg-flex') },
                react_1["default"].createElement("img", { src: stackback2_png_1["default"], alt: 'stack' })),
            react_1["default"].createElement("div", { className: classnames_1["default"](style_module_scss_1["default"]['stack-mobile'], 'd-lg-none') },
                react_1["default"].createElement("img", { src: stack_mobile2_png_1["default"], alt: 'stack-back-mobile' })))));
};
exports["default"] = Home;
