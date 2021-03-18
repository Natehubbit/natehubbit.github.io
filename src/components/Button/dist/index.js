"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var style_module_scss_1 = require("./style.module.scss");
var Button = function (_a) {
    var type = _a.type, label = _a.label, onClick = _a.onClick;
    var isOutline = type === 'outline';
    return (react_1["default"].createElement("button", { className: classnames_1["default"](style_module_scss_1["default"]['container'], isOutline && style_module_scss_1["default"]['outline']), onClick: onClick }, label));
};
exports["default"] = Button;
