"use strict";
exports.__esModule = true;
var react_1 = require("react");
var arrowLeft_svg_1 = require("../../assets/arrowLeft.svg");
var Navbar_1 = require("../../components/Navbar");
var sad_gif_1 = require("../../assets/sad.gif");
var style_module_scss_1 = require("./style.module.scss");
var react_router_1 = require("react-router");
var CantShow = function (_a) {
    var url = _a.url;
    var goBack = react_router_1.useHistory().goBack;
    var onGoBack = function () {
        goBack();
    };
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['body'] },
            react_1["default"].createElement("img", { className: style_module_scss_1["default"]['img'], src: sad_gif_1["default"], alt: 'sad' }),
            react_1["default"].createElement("p", null,
                "As the nature of this work is confidential, i wont be able to show any code on this.",
                react_1["default"].createElement("br", null),
                "However, you can ping me and  i will be able to provide mored details about what i did.",
                react_1["default"].createElement("br", null),
                url && react_1["default"].createElement("a", { href: url }, "visit project")),
            react_1["default"].createElement("div", { onClick: onGoBack, role: 'button', className: style_module_scss_1["default"]['goBack'] },
                react_1["default"].createElement("img", { src: arrowLeft_svg_1["default"], alt: 'left icon' }),
                "Go back"))));
};
exports["default"] = CantShow;
