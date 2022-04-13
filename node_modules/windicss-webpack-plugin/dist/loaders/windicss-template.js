"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = void 0;

var _template = _interopRequireDefault(require("lodash/template"));

var _defaults = _interopRequireDefault(require("lodash/defaults"));

var _loaderUtils = _interopRequireDefault(require("loader-utils"));

var _debug = _interopRequireDefault(require("../core/debug"));

var _utils = require("../core/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WindicssTemplate(source) {
  if (!this._compiler) return source;
  this.cacheable(true);
  const service = this._compiler.$windi;
  if (!service) return source;
  if (this.resource.indexOf("type=style") > 0) return (0, _utils.transformCSS)(service, source, this.resource);
  const hasHtmlWebpackPlugin = this.loaders.filter(loader => {
    return loader.loader && loader.loader.indexOf("html-webpack-plugin") > 0 || loader.path && loader.path.indexOf("html-webpack-plugin") > 0;
  }).length > 0;

  if (hasHtmlWebpackPlugin) {
    const options = this.query !== "" ? _loaderUtils.default.parseQuery(this.query) : {};
    const template = (0, _template.default)(source, (0, _defaults.default)(options, {
      variable: "data"
    }));
    return `var _ = require(${_loaderUtils.default.stringifyRequest(this, `!!${require.resolve("lodash")}`)});module.exports = function (templateParams) { with(templateParams) {return (${template.source})();}}`;
  }

  let output = source;

  try {
    const templateWithTransformedCSS = source.replace(/<style(.*?)>(.*?)<\/style>/gms, (match, meta, css) => {
      if (meta.includes("sass") || meta.includes("stylus") || meta.includes("less")) {
        _debug.default.loader("Template has unsupported block, skipping resource", this.resource);

        return match;
      }

      if ((0, _utils.isJsx)(css)) {
        let m, transformedCSS2;
        const jsxMatcher = /{`(.*)`}/gms;

        while ((m = jsxMatcher.exec(css)) !== null) {
          if (m.index === jsxMatcher.lastIndex) jsxMatcher.lastIndex++;
          m.forEach((match2, groupIndex) => {
            if (groupIndex === 1) {
              const transformedJSXCSS = (0, _utils.transformCSS)(service, match2, this.resource);
              transformedCSS2 = `<style${meta}>
{\`${transformedJSXCSS}
\`}</style>`;

              _debug.default.loader("jsx transformed", transformedCSS2);
            }
          });
        }

        return (0, _utils.def)(transformedCSS2, match);
      }

      const transformedCSS = (0, _utils.transformCSS)(service, css, this.resource);
      return `<style${meta}>
${transformedCSS}
</style>`;
    });

    _debug.default.loader("Transformed template ", this.resource);

    const transformed = service.transformGroups(templateWithTransformedCSS);
    if (transformed) output = transformed.code;else output = templateWithTransformedCSS;
  } catch (e) {
    this.emitWarning(`[WindiCSS] Failed to transform groups and css for template: ${this.resource}.`);
  }

  return output;
}

var _default = WindicssTemplate;
module.exports = _default;