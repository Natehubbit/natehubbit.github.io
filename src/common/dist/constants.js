"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.PROJECTS = exports.NAV_LINKS = void 0;
var mail_svg_1 = require("../assets/mail.svg");
var linked_svg_1 = require("../assets/linked.svg");
var git_svg_1 = require("../assets/git.svg");
var sass_svg_1 = require("../assets/sass.svg");
var react_svg_1 = require("../assets/react.svg");
var css_svg_1 = require("../assets/css.svg");
var html_svg_1 = require("../assets/html.svg");
var redux_svg_1 = require("../assets/redux.svg");
var firebase_svg_1 = require("../assets/firebase.svg");
var nodejs_svg_1 = require("../assets/nodejs.svg");
var solidity_svg_1 = require("../assets/solidity.svg");
var ts_svg_1 = require("../assets/ts.svg");
var UtilService_1 = require("../services/UtilService");
var gh = UtilService_1["default"]
    .importAll(require
    .context('../assets/gh', false, /\.(png|jpe?g|svg)$/))
    .map(function (d) { return d["default"]; });
var wallet = UtilService_1["default"]
    .importAll(require
    .context('../assets/fintech', false, /\.(png|jpe?g|svg)$/))
    .map(function (d) { return d["default"]; });
var flinchDash = UtilService_1["default"]
    .importAll(require
    .context('../assets/flinchDash', false, /\.(png|jpe?g|svg)$/))
    .map(function (d) { return d["default"]; });
var flinchMobile = UtilService_1["default"]
    .importAll(require
    .context('../assets/flinchMobile', false, /\.(png|jpe?g|svg)$/))
    .map(function (d) { return d["default"]; });
var cakes = UtilService_1["default"]
    .importAll(require
    .context('../assets/cakes', false, /\.(png|jpe?g|svg)$/))
    .map(function (d) { return d["default"]; });
exports.NAV_LINKS = [
    {
        icon: git_svg_1["default"],
        link: 'https://www.github.com/natehubbit',
        alt: 'github'
    },
    {
        icon: linked_svg_1["default"],
        link: 'https://www.linkedin.com/in/hubert-mbitor-38204b194/',
        alt: 'linkedin'
    },
    {
        icon: mail_svg_1["default"],
        link: 'mailto:natehubbit1001@gmail.com',
        alt: 'mail'
    }
];
exports.PROJECTS = [
    {
        label: 'Ghyrate',
        summary: 'An online directory of companies in Africa',
        code: '',
        project: 'https://www.ghyrate.com',
        stack: [
            react_svg_1["default"],
            redux_svg_1["default"],
            css_svg_1["default"],
            sass_svg_1["default"],
            html_svg_1["default"]
        ],
        gallery: __spreadArrays(gh)
    },
    {
        label: 'Flinch',
        summary: 'A mobile app for celebs to make personalized videos for their fans',
        code: 'https://github.com/FlinchEngineering/Mobile',
        project: 'https://youtu.be/aNltxnVSX4k',
        stack: [
            react_svg_1["default"],
            redux_svg_1["default"],
            ts_svg_1["default"],
            firebase_svg_1["default"],
            nodejs_svg_1["default"],
        ],
        gallery: __spreadArrays(flinchMobile)
    },
    {
        label: 'Flinch Dashboard',
        summary: 'A website dashboard to manage celebs on Flinch',
        code: 'https://github.com/FlinchEngineering/Dashboard',
        project: 'https://shoutouts-3c57c.web.app/',
        stack: [
            react_svg_1["default"],
            redux_svg_1["default"],
            ts_svg_1["default"],
            firebase_svg_1["default"],
            nodejs_svg_1["default"],
        ],
        gallery: __spreadArrays(flinchDash)
    },
    {
        label: 'Elvian Cakes',
        summary: 'A mobile app for a cakery',
        code: 'https://github.com/Natehubbit/elviancakes',
        project: '',
        article: React.createElement("p", null, "This is a mobile app UI built in React-Native to allow people to order cakes."),
        stack: [
            react_svg_1["default"],
            redux_svg_1["default"],
            css_svg_1["default"],
            html_svg_1["default"]
        ],
        gallery: __spreadArrays(cakes)
    },
    {
        label: 'Blockchain Leger',
        summary: 'An ethreum based blockchain ledger',
        code: 'https://github.com/Natehubbit/Fintech',
        project: '',
        stack: [
            react_svg_1["default"],
            redux_svg_1["default"],
            css_svg_1["default"],
            html_svg_1["default"],
            solidity_svg_1["default"]
        ],
        gallery: __spreadArrays(wallet)
    },
];
