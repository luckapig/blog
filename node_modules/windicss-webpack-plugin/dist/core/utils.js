"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformCSS = exports.isJsx = exports.def = exports.cssRequiresTransform = void 0;

var _constants = require("./constants");

var _debug = _interopRequireDefault(require("./debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cssRequiresTransform = source => {
  return _constants.HAS_DIRECTIVE_TEST.test(source) || _constants.HAS_THEME_FUNCTION_TEST.test(source);
};

exports.cssRequiresTransform = cssRequiresTransform;

const isJsx = source => {
  return /{`(.*)`}/gms.test(source);
};

exports.isJsx = isJsx;

const transformCSS = (service, source, resource) => {
  if (!source || source.length <= 0) return source;
  if (!cssRequiresTransform(source)) return source;
  let output = source;

  try {
    output = service.transformCSS(source, resource, {
      globaliseKeyframes: true
    });

    if (!output || output.length <= 0) {
      _debug.default.loader(`[WindiCSS] Invalid response from windi core transforming resource: ${resource}.`);

      return source;
    }

    _debug.default.loader("Transformed CSS", resource);
  } catch (e) {
    _debug.default.loader(`[WindiCSS] Exception when transforming CSS for resource: ${resource}.`, e);

    return source;
  }

  return output;
};

exports.transformCSS = transformCSS;

const def = (val, def2) => {
  if (val) return val;
  return def2;
};

exports.def = def;