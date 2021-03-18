"use strict";
exports.__esModule = true;
var react_1 = require("react");
var uuid_1 = require("uuid");
var Col_1 = require("react-bootstrap/Col");
var UtilService_1 = require("../../services/UtilService");
var constants_1 = require("../../common/constants");
var Navbar_1 = require("../../components/Navbar");
var ProjectCard_1 = require("../../components/ProjectCard");
var style_module_scss_1 = require("./style.module.scss");
var react_router_1 = require("react-router");
var Projects = function () {
    var push = react_router_1.useHistory().push;
    var onViewCode = function (v) {
        if (v) {
            UtilService_1["default"].openNewTab(v);
        }
    };
    var onViewProject = function (param) {
        push("project/" + param);
    };
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['body'] },
            react_1["default"].createElement(Col_1["default"], { md: { span: 10, offset: 1 }, lg: { span: 8, offset: 2 }, xs: 12 }, constants_1.PROJECTS.map(function (p) { return (react_1["default"].createElement(ProjectCard_1["default"], { imageUrl: p.gallery[0] || '', key: uuid_1.v4(), header: p.label, stack: p.stack, summary: p.summary, onViewCode: function () { return onViewCode(p.code); }, onViewProject: function () { return onViewProject(p.label); } })); })))));
};
exports["default"] = Projects;
