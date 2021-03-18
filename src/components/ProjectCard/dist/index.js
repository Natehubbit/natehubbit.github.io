"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var back_webp_1 = require("../../assets/back.webp");
var Button_1 = require("../Button");
var style_module_scss_1 = require("./style.module.scss");
var ProjectCard = function (_a) {
    var header = _a.header, summary = _a.summary, stack = _a.stack, imageUrl = _a.imageUrl, onViewCode = _a.onViewCode, onViewProject = _a.onViewProject;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: classnames_1["default"](style_module_scss_1["default"]['container'], 'd-none d-md-flex') },
            react_1["default"].createElement("div", { className: style_module_scss_1["default"]['img'], style: {
                    background: "url(" + (imageUrl || back_webp_1["default"]) + ")"
                } }),
            react_1["default"].createElement("div", { className: style_module_scss_1["default"]['body'] },
                react_1["default"].createElement("div", { className: style_module_scss_1["default"]['content'] },
                    react_1["default"].createElement("button", { className: style_module_scss_1["default"]['headerLink'], onClick: onViewProject },
                        react_1["default"].createElement("h5", null, header)),
                    react_1["default"].createElement("p", { className: style_module_scss_1["default"]['summary'] }, summary),
                    react_1["default"].createElement("div", { className: style_module_scss_1["default"]['stack'] }, stack && (stack === null || stack === void 0 ? void 0 : stack.map(function (s) { return (react_1["default"].createElement("img", { src: s, alt: s, className: style_module_scss_1["default"]['stack-item'] })); })))),
                react_1["default"].createElement("div", { className: style_module_scss_1["default"]['foot'] },
                    react_1["default"].createElement(Button_1["default"], { onClick: onViewCode, label: 'View code' }),
                    react_1["default"].createElement(Button_1["default"], { onClick: onViewProject, type: 'outline', label: 'View project' })))),
        react_1["default"].createElement("div", { className: classnames_1["default"](style_module_scss_1["default"]['mobile-container'], 'd-md-none') },
            react_1["default"].createElement("div", { className: classnames_1["default"](style_module_scss_1["default"]['img']), style: { background: "url(" + (imageUrl || back_webp_1["default"]) + ")" } }),
            react_1["default"].createElement("div", { className: classnames_1["default"](style_module_scss_1["default"]['content']) },
                react_1["default"].createElement("h5", null, header),
                react_1["default"].createElement("p", { className: style_module_scss_1["default"]['summary'] }, summary),
                react_1["default"].createElement("div", { className: style_module_scss_1["default"]['stack'] }, stack && (stack === null || stack === void 0 ? void 0 : stack.map(function (s) { return (react_1["default"].createElement("img", { src: s, alt: s, className: style_module_scss_1["default"]['stack-item'] })); }))),
                react_1["default"].createElement("div", { className: style_module_scss_1["default"]['foot'] },
                    react_1["default"].createElement(Button_1["default"], { onClick: onViewCode, label: 'View code' }),
                    react_1["default"].createElement(Button_1["default"], { onClick: onViewProject, type: 'outline', label: 'View project' }))))));
};
exports["default"] = ProjectCard;
