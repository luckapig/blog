"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAME = exports.MODULE_ID_VIRTUAL_TEST = exports.MODULE_ID_VIRTUAL_PREFIX = exports.MODULE_ID_VIRTUAL_MODULES = exports.MODULE_ID = exports.HAS_THEME_FUNCTION_TEST = exports.HAS_DIRECTIVE_TEST = void 0;
const NAME = "windicss-webpack-plugin";
exports.NAME = NAME;
const MODULE_ID = "windi.css";
exports.MODULE_ID = MODULE_ID;
const MODULE_ID_VIRTUAL_TEST = /virtual:windi-?(.*?)\.css/;
exports.MODULE_ID_VIRTUAL_TEST = MODULE_ID_VIRTUAL_TEST;
const MODULE_ID_VIRTUAL_PREFIX = "virtual:windi";
exports.MODULE_ID_VIRTUAL_PREFIX = MODULE_ID_VIRTUAL_PREFIX;
const MODULE_ID_VIRTUAL_MODULES = [`${MODULE_ID_VIRTUAL_PREFIX}.css`, `${MODULE_ID_VIRTUAL_PREFIX}-base.css`, `${MODULE_ID_VIRTUAL_PREFIX}-utilities.css`, `${MODULE_ID_VIRTUAL_PREFIX}-components.css`];
exports.MODULE_ID_VIRTUAL_MODULES = MODULE_ID_VIRTUAL_MODULES;
const HAS_DIRECTIVE_TEST = /@(apply|variants|screen|layer)\s/;
exports.HAS_DIRECTIVE_TEST = HAS_DIRECTIVE_TEST;
const HAS_THEME_FUNCTION_TEST = /theme\(.*?\)/;
exports.HAS_THEME_FUNCTION_TEST = HAS_THEME_FUNCTION_TEST;