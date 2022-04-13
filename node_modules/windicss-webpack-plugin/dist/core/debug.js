"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = void 0;

var _debug2 = _interopRequireDefault(require("debug"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  plugin: (0, _debug2.default)(`${_constants.NAME}:plugin`),
  loader: (0, _debug2.default)(`${_constants.NAME}:loader`)
};
module.exports = _default;