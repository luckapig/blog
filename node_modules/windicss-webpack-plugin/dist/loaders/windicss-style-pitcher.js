"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pitch = void 0;

const templatePitcherTest = l => /(\/|\\|@)windicss-template/.test(l.path);

const windiPitcherTest = l => /(\/|\\|@)windicss-style-pitcher/.test(l.path);

const postCssLoaderTest = l => /(\/|\\|@)postcss-loader/.test(l.path);

const cssLoaderTest = l => /(\/|\\|@)css-loader/.test(l.path);

const pitch = function (remainingRequest) {
  const findLoaderIndex = test => this.loaders.findIndex(test);

  const removeLoader = test => {
    let index, loader;

    while ((index = findLoaderIndex(test)) !== -1) {
      loader = this.loaders[index];
      this.loaders.splice(index, 1);
    }

    return loader;
  };

  removeLoader(windiPitcherTest);

  if (!remainingRequest.includes("&type=style")) {
    removeLoader(templatePitcherTest);
    return;
  }

  let newTemplateLoaderIndex = findLoaderIndex(postCssLoaderTest);
  if (newTemplateLoaderIndex === -1) newTemplateLoaderIndex = findLoaderIndex(cssLoaderTest);

  if (newTemplateLoaderIndex === -1) {
    removeLoader(templatePitcherTest);
    return;
  }

  const templateLoader = removeLoader(templatePitcherTest);
  if (templateLoader) this.loaders.splice(newTemplateLoaderIndex + 1, 0, templateLoader);
};

exports.pitch = pitch;