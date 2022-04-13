"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = void 0;

var _utils = require("../core/utils");

function WindicssCss(source) {
  if (!this._compiler) return source;
  this.cacheable(true);
  const service = this._compiler.$windi;
  if (!service) return source;
  return (0, _utils.transformCSS)(service, source, this.resource);
}

var _default = WindicssCss;
module.exports = _default;