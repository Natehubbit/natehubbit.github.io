"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_module_scss_1 = require("./style.module.scss");
var Navbar_1 = require("../../components/Navbar");
var Col_1 = require("react-bootstrap/Col");
var react_router_1 = require("react-router");
var constants_1 = require("../../common/constants");
var Carousel_1 = require("react-bootstrap/Carousel");
var classnames_1 = require("classnames");
var react_feather_1 = require("react-feather");
var Project = function () {
    var id = react_router_1.useRouteMatch().params.id;
    var _a = react_1.useState(null), data = _a[0], setData = _a[1];
    react_1.useEffect(function () {
        var d = constants_1.PROJECTS.filter(function (d) { return d.label === id; })[0] || null;
        setData(d);
    }, [id]);
    if (!data)
        return null;
    return (react_1["default"].createElement("div", { className: style_module_scss_1["default"]['container'] },
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement("div", { className: style_module_scss_1["default"]['body'] },
            react_1["default"].createElement(Carousel_1["default"], { fade: true, indicators: false, className: classnames_1["default"]("d-block w-100", style_module_scss_1["default"]['carousel']) }, data.gallery.map(function (img) {
                return react_1["default"].createElement(Carousel_1["default"].Item, { className: style_module_scss_1["default"]['carouselItem'] },
                    react_1["default"].createElement("img", { src: img, alt: img }));
            })),
            react_1["default"].createElement(Col_1["default"], { lg: { span: 6, offset: 3 } },
                react_1["default"].createElement("article", { className: style_module_scss_1["default"]['article'] },
                    react_1["default"].createElement("h3", null, data.label),
                    data.stack.map(function (s) {
                        return react_1["default"].createElement("img", { src: s, alt: s, className: style_module_scss_1["default"]['stack'] });
                    }),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("div", { className: style_module_scss_1["default"]['links'] },
                        (data === null || data === void 0 ? void 0 : data.project) &&
                            react_1["default"].createElement("a", { href: data.project, className: style_module_scss_1["default"]['hyperlink'], target: '_blank', rel: "noreferrer" },
                                react_1["default"].createElement(react_feather_1.Globe, { className: style_module_scss_1["default"]['icon'], size: 15 }),
                                " visit project"),
                        data.code &&
                            react_1["default"].createElement("a", { href: data.code, className: style_module_scss_1["default"]['hyperlink'], target: '_blank', rel: "noreferrer" },
                                react_1["default"].createElement(react_feather_1.Code, { className: style_module_scss_1["default"]['icon'], size: 15 }),
                                " view code")),
                    data.article)))));
};
exports["default"] = Project;
