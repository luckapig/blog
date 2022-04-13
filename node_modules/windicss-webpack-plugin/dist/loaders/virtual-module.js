"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = void 0;

var _fs = _interopRequireWildcard(require("fs"));

var _pluginUtils = require("@windicss/plugin-utils");

var _constants = require("../core/constants");

var _debug = _interopRequireDefault(require("../core/debug"));

var _utils = require("../core/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function VirtualModule(source) {
  const callback = this.async();

  if (!this._compiler) {
    callback(null, source);
    return;
  }

  this.cacheable(false);
  const service = this._compiler.$windi;
  const match = this.resource.match(_constants.MODULE_ID_VIRTUAL_TEST);

  if (!service || !match) {
    const error = new Error(`Failed to match the resource "${this.resource}" to a WindiCSS virtual module.`);
    this.emitError(error);
    callback(error, source);
    return;
  }

  const layer = match[1] || void 0;
  const isBoot = source.indexOf("(boot)") > 0;

  _debug.default.loader(`Generating "${this.resource}" using layer "${layer}${isBoot ? '" as boot ' : " as hmr"}`);

  const generateCSS = async layer2 => {
    try {
      if (service.scanned && service.options.enableScan) service.options.enableScan = false;
      const css = (await service.generateCSS(layer2)).replace("(boot)", "");
      service.virtualModules.set((0, _utils.def)(layer2, "all"), css);
      callback(null, css);
    } catch (e) {
      const error = JSON.stringify(e, null, 2);
      this.emitError(`[Windi CSS] Failed to generate CSS. Error: ${error}`);
      callback(e, `${source}
/* Error: ${error}*/`);
    }
  };

  if (isBoot) {
    await generateCSS(layer);
    return;
  }

  const dirtyFiles = Array.from(service.dirty);

  if (dirtyFiles.length === 0) {
    callback(null, source);
    return;
  }

  if (service.dirty.has("all-modules")) {
    const contents = await Promise.all([...(await service.getFiles())].filter(id => service.isDetectTarget(id)).map(async id => [await _fs.default.promises.readFile(id, "utf-8"), id]));
    await Promise.all(contents.map(async ([content, id]) => {
      if (service.isCssTransformTarget(id)) return service.transformCSS(content, id);else return service.extractFile(content, id, true);
    }));
  } else {
    const configFileUpdated = dirtyFiles.filter(id => {
      return _pluginUtils.defaultConfigureFiles.filter(config => {
        return id.endsWith(config);
      }).length > 0;
    }).length > 0;

    if (configFileUpdated) {
      service.clearCache();
      await service.init();
    } else {
      const contents = await Promise.all(dirtyFiles.map(id => {
        return {
          data: (0, _fs.readFileSync)(id, {
            encoding: "utf-8"
          }),
          id
        };
      }));

      for (const content of contents) {
        try {
          await service.extractFile(content.data, content.id, service.options.transformGroups);
        } catch (e) {
          this.emitWarning(`[Windi CSS] Failed to extract classes from resource: ${content.id}.`);
        }
      }
    }
  }

  service.dirty.clear();
  await generateCSS(layer);
}

var _default = VirtualModule;
module.exports = _default;