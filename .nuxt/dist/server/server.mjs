
// --------------------
// Request: /home/runner/blog/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// --------------------
const $id_ef229830 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const entry = true ? (ctx) => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default(ctx)) : () => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default);
if (false) {
  entry();
}
__vite_ssr_exports__.default = entry;
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/bootstrap.mjs
// Parents: 
// - /home/runner/blog/node_modules/nuxt3/dist/app/entry ($id_ef229830)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/css.mjs ($id_24f25f16)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs ($id_706bcd9c)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/root-component.mjs ($id_57c804b1)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/app-component.mjs ($id_90e8a108)
// --------------------
const $id_fef466a9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/runner/blog/.nuxt/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/runner/blog/.nuxt/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/runner/blog/.nuxt/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("page:finish", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/layouts.mjs ($id_547df7e1)
// - /layouts/home.vue ($id_d0090f05)
// - /pages/article/[id].vue?macro=true ($id_8530f7fa)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/article/[id].vue ($id_c6f02538)
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/components.mjs ($id_52d35446)
// - /components/loading.vue ($id_18023675)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/vue/dist/vue.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/vue/dist/vue.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /layouts/home.vue ($id_d0090f05)
// - /composables/states.ts ($id_3ca54292)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
function callWithNuxt(nuxt, setup, args) {
  setNuxtAppInstance(nuxt);
  const p = args ? setup(...args) : setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/hookable/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/hookable/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_75047751 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = { ...nuxtApp.vueApp };
      legacyApp.$root = legacyApp;
      legacyApp.constructor = legacyApp;
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/unenv/runtime/mock/proxy.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/unenv/runtime/mock/proxy.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useLazyFetch }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useCookie }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRequestHeaders }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/vue-router/dist/vue-router.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/vue-router/dist/vue-router.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = asyncData.refresh();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else {
      asyncData.refresh();
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/murmurhash-es/dist/index.mjs ($id_fbf6dac3)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_fbf6dac3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/murmurhash-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/murmurhash-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_792d64c4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(useSSRRes(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function useSSRReq(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.req;
}
function useSSRRes(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.res;
}
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(useSSRReq().headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(res, name, value, opts = {}) {
  if (res) {
    __vite_ssr_import_2__.appendHeader(res, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/cookie-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/cookie-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/h3/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/h3/dist/index.mjs".') })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/destr/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/destr/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_4d0dc923 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
;
}


// --------------------
// Request: /@id/__x00__virtual:/home/runner/blog/.nuxt/css.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /@windicss/windi.css ($id_309b5097)
// --------------------
const $id_24f25f16 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@windicss/windi.css");
;
}


// --------------------
// Request: /@windicss/windi.css
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/css.mjs ($id_24f25f16)
// Dependencies: 

// --------------------
const $id_309b5097 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/* windicss layer base */\n*, ::before, ::after {\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n}\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n}\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n::moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n  height: auto;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n[type='search'] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nbody {\n  margin: 0;\n  font-family: inherit;\n  line-height: inherit;\n}\nbutton, input {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\nbutton {\n  text-transform: none;\n  background-color: transparent;\n  background-image: none;\n}\nbutton, [type='button'], [type='reset'], [type='submit'] {\n  -webkit-appearance: button;\n}\nbutton, [role=\"button\"] {\n  cursor: pointer;\n}\nhtml {\n  -webkit-text-size-adjust: 100%;\n  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n  line-height: 1.5;\n}\nh1 {\n  margin: 0;\n  font-size: inherit;\n  font-weight: inherit;\n}\nimg {\n  border-style: solid;\n  max-width: 100%;\n  height: auto;\n}\ninput::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::webkit-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nimg, object, iframe {\n  display: block;\n  vertical-align: middle;\n}\n/* windicss layer components */\n/* windicss layer utilities */\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.dark .dark\\:bg-dark {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 30, 38, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-green-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(209, 250, 229, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-green-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(6, 78, 59, var(--tw-bg-opacity));\n}\n.bg-opacity-80 {\n  --tw-bg-opacity: 0.8;\n}\n.dark .dark\\:bg-opacity-80 {\n  --tw-bg-opacity: 0.8;\n}\n.border-green-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(16, 185, 129, var(--tw-border-opacity));\n}\n.border-red-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, var(--tw-border-opacity));\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.border-3 {\n  border-width: 3px;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.flex {\n  display: flex;\n}\n.flex-col {\n  flex-direction: column;\n}\n.place-content-center {\n  place-content: center;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.font-mono {\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-bold {\n  font-weight: 700;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-full {\n  height: 100%;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-auto {\n  height: auto;\n}\n.h-18 {\n  height: 4.5rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.mb-48 {\n  margin-bottom: 12rem;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.fixed {\n  position: fixed;\n}\n.top-0 {\n  top: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.text-center {\n  text-align: center;\n}\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgba(16, 185, 129, var(--tw-text-opacity));\n}\n.dark .dark\\:text-green-100 {\n  --tw-text-opacity: 1;\n  color: rgba(209, 250, 229, var(--tw-text-opacity));\n}\n.text-green-900 {\n  --tw-text-opacity: 1;\n  color: rgba(6, 78, 59, var(--tw-text-opacity));\n}\n.text-green-800 {\n  --tw-text-opacity: 1;\n  color: rgba(6, 95, 70, var(--tw-text-opacity));\n}\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgba(220, 38, 38, var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n.w-screen {\n  width: 100vw;\n}\n.w-full {\n  width: 100%;\n}\n.w-md {\n  width: 28rem;\n}\n.w-8 {\n  width: 2rem;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-0 {\n  z-index: 0;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n@-webkit-keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n.animate-pulse {\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n.filter {\n  --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.blur-2 {\n  --tw-blur: blur(2px);\n}\n.blur-1 {\n  --tw-blur: blur(1px);\n}\n.blur-4 {\n  --tw-blur: blur(4px);\n}\n.grayscale-80 {\n  --tw-grayscale: grayscale(0.8);\n}\n.-hue-rotate-45 {\n  --tw-hue-rotate: hue-rotate(-45deg);\n}\n.backdrop-filter {\n  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.dark .dark\\:backdrop-filter {\n  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-blur {\n  --tw-backdrop-blur: blur(8px);\n}\n.dark .dark\\:backdrop-blur {\n  --tw-backdrop-blur: blur(8px);\n}";
}


// --------------------
// Request: /@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/components.mjs ($id_52d35446)
// --------------------
const $id_706bcd9c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/runner/blog/.nuxt/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
__vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs ($id_706bcd9c)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs ($id_706bcd9c)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document, name, actualTags[name]);
      }
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs ($id_706bcd9c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/meta.config.mjs ($id_0057e83b)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/runner/blog/.nuxt/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
      __vite_ssr_import_2__.useMeta(source);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/index.mjs ($id_ea12a3fb)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/@vue/shared/dist/shared.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/@vue/shared/dist/shared.cjs.js".') })


// --------------------
// Request: /@id/__x00__virtual:/home/runner/blog/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_0057e83b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs ($id_706bcd9c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/routes.mjs ($id_89eafc8b)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/middleware.mjs ($id_8bf731bd)
// --------------------
const $id_a4d6cb5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/nested-page.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/runner/blog/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/runner/blog/.nuxt/middleware.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_2__.default);
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtLayout", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtLink", __vite_ssr_import_1__.RouterLink);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_2__.default);
  const { baseURL } = __vite_ssr_import_5__.useRuntimeConfig().app;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const router = __vite_ssr_import_1__.createRouter({
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  router.beforeEach(async (to, from) => {
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_7__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_7__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (true && !middleware) {
        console.warn(`Unknown middleware: ${entry}. Valid options are ${Object.keys(__vite_ssr_import_7__.namedMiddleware).join(", ")}.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(() => {
    delete nuxtApp._processingMiddleware;
  });
  nuxtApp.hook("app:created", async () => {
    if (true) {
      router.push(nuxtApp.ssrContext.url);
      router.afterEach((to) => {
        if (to.fullPath !== nuxtApp.ssrContext.url) {
          nuxtApp.ssrContext.res.setHeader("Location", to.fullPath);
        }
      });
    }
    await router.isReady();
    const is404 = router.currentRoute.value.matched.length === 0;
    if (true && is404) {
      const error = new Error(`Page not found: ${nuxtApp.ssrContext.url}`);
      error.statusCode = 404;
      nuxtApp.ssrContext.error = error;
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/nested-page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c268603a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  name: "NuxtNestedPage",
  props: {
    childKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const route = __vite_ssr_import_0__.useRoute();
    const key = __vite_ssr_import_1__.computed(() => {
      const source = props.childKey ?? route.meta.key;
      return typeof source === "function" ? source(route) : source;
    });
    return {
      key
    };
  }
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_2__.resolveComponent("RouterView")

  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_2__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        __vite_ssr_import_3__.ssrRenderVNode(_push, __vite_ssr_import_2__.createVNode(__vite_ssr_import_2__.resolveDynamicComponent(Component), { key: $setup.key }, null), _parent, _scopeId)
      } else {
        return [
          (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock(__vite_ssr_import_2__.resolveDynamicComponent(Component), { key: $setup.key }))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/nested-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/runner/blog/node_modules/nuxt3/dist/pages/runtime/nested-page.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /layouts/home.vue ($id_d0090f05)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /pages/article/[id].vue?macro=true ($id_8530f7fa)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/article/[id].vue ($id_c6f02538)
// - /pages/index.vue ($id_cca58e97)
// - /components/loading.vue ($id_18023675)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/vue/server-renderer/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/vue/server-renderer/index.js".') })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /layouts/home.vue ($id_d0090f05)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /pages/article/[id].vue?macro=true ($id_8530f7fa)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/article/[id].vue ($id_c6f02538)
// - /pages/index.vue ($id_cca58e97)
// - /components/loading.vue ($id_18023675)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_10628d40 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const NuxtTransition = __vite_ssr_import_0__.defineComponent({
  name: "NuxtTransition",
  props: {
    options: [Object, Boolean]
  },
  setup(props, { slots }) {
    return () => props.options ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.Transition, props.options, slots.default) : slots.default();
  }
});
const _sfc_main = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  components: { NuxtLayout: __vite_ssr_import_1__.default, NuxtTransition },
  props: {
    layout: {
      type: String,
      default: null
    }
  },
  setup() {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    function onSuspensePending(Component) {
      return nuxtApp.callHook("page:start", Component);
    }
    function onSuspenseResolved(Component) {
      return nuxtApp.callHook("page:finish", Component);
    }
    return {
      onSuspensePending,
      onSuspenseResolved
    };
  }
});

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_3__.resolveComponent("RouterView")
  const _component_NuxtTransition = __vite_ssr_import_3__.resolveComponent("NuxtTransition")
  const _component_NuxtLayout = __vite_ssr_import_3__.resolveComponent("NuxtLayout")

  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_3__.withCtx(({ Component, route }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtTransition, {
          options: route.meta.layoutTransition ?? { name: 'layout', mode: 'out-in' }
        }, {
          default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (Component) {
                _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLayout, {
                  name: _ctx.layout || route.meta.layout
                }, {
                  default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
                    if (_push) {
                      _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtTransition, {
                        options: route.meta.pageTransition ?? { name: 'page', mode: 'out-in' }
                      }, {
                        default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
                          if (_push) {
                            __vite_ssr_import_4__.ssrRenderSuspense(_push, {
                              default: () => {
                                __vite_ssr_import_4__.ssrRenderVNode(_push, __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.resolveDynamicComponent(Component), null, null), _parent, _scopeId)
                              },
                              _: 2 /* DYNAMIC */
                            })
                          } else {
                            return [
                              (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                                onPending: () => _ctx.onSuspensePending(Component),
                                onResolve: () => _ctx.onSuspenseResolved(Component)
                              }, {
                                default: __vite_ssr_import_3__.withCtx(() => [
                                  (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component)))
                                ]),
                                _: 2 /* DYNAMIC */
                              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                            ]
                          }
                        }),
                        _: 2 /* DYNAMIC */
                      }, _parent, _scopeId))
                    } else {
                      return [
                        __vite_ssr_import_3__.createVNode(_component_NuxtTransition, {
                          options: route.meta.pageTransition ?? { name: 'page', mode: 'out-in' }
                        }, {
                          default: __vite_ssr_import_3__.withCtx(() => [
                            (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                              onPending: () => _ctx.onSuspensePending(Component),
                              onResolve: () => _ctx.onSuspenseResolved(Component)
                            }, {
                              default: __vite_ssr_import_3__.withCtx(() => [
                                (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component)))
                              ]),
                              _: 2 /* DYNAMIC */
                            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["options"])
                      ]
                    }
                  }),
                  _: 2 /* DYNAMIC */
                }, _parent, _scopeId))
              } else {
                _push(`<!---->`)
              }
            } else {
              return [
                Component
                  ? (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(_component_NuxtLayout, {
                      key: 0,
                      name: _ctx.layout || route.meta.layout
                    }, {
                      default: __vite_ssr_import_3__.withCtx(() => [
                        __vite_ssr_import_3__.createVNode(_component_NuxtTransition, {
                          options: route.meta.pageTransition ?? { name: 'page', mode: 'out-in' }
                        }, {
                          default: __vite_ssr_import_3__.withCtx(() => [
                            (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                              onPending: () => _ctx.onSuspensePending(Component),
                              onResolve: () => _ctx.onSuspenseResolved(Component)
                            }, {
                              default: __vite_ssr_import_3__.withCtx(() => [
                                (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component)))
                              ]),
                              _: 2 /* DYNAMIC */
                            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["options"])
                      ]),
                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]))
                  : __vite_ssr_import_3__.createCommentVNode("v-if", true)
              ]
            }
          }),
          _: 2 /* DYNAMIC */
        }, _parent, _scopeId))
        _push(`<!-- TODO: Handle 404 placeholder -->`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode(_component_NuxtTransition, {
            options: route.meta.layoutTransition ?? { name: 'layout', mode: 'out-in' }
          }, {
            default: __vite_ssr_import_3__.withCtx(() => [
              Component
                ? (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(_component_NuxtLayout, {
                    key: 0,
                    name: _ctx.layout || route.meta.layout
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      __vite_ssr_import_3__.createVNode(_component_NuxtTransition, {
                        options: route.meta.pageTransition ?? { name: 'page', mode: 'out-in' }
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                            onPending: () => _ctx.onSuspensePending(Component),
                            onResolve: () => _ctx.onSuspenseResolved(Component)
                          }, {
                            default: __vite_ssr_import_3__.withCtx(() => [
                              (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component)))
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["options"])
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]))
                : __vite_ssr_import_3__.createCommentVNode("v-if", true)
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["options"]),
          __vite_ssr_import_3__.createCommentVNode(" TODO: Handle 404 placeholder ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/runner/blog/node_modules/nuxt3/dist/pages/runtime/page.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/layout.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/layouts.mjs ($id_547df7e1)
// --------------------
const $id_9b68c93f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/runner/blog/.nuxt/layouts.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: "default"
    }
  },
  setup(props, context) {
    return () => {
      const layout = (props.name && typeof props.name === "object" ? props.name.value : props.name) ?? "default";
      if (!__vite_ssr_import_1__.default[layout]) {
        if (true && layout && layout !== "default") {
          console.warn(`Invalid layout \`${layout}\` selected.`);
        }
        return context.slots.default();
      }
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default[layout], props, context.slots);
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:/home/runner/blog/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/home.vue ($id_d0090f05)
// --------------------
const $id_547df7e1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  "home": __vite_ssr_import_0__.defineAsyncComponent({ suspensible: false, loader: () => __vite_ssr_dynamic_import__('/layouts/home.vue') })
};
}


// --------------------
// Request: /layouts/home.vue
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/layouts.mjs ($id_547df7e1)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /composables/states.ts ($id_3ca54292)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/css/github-markdown.css?vue&type=style&index=0&src=b5de7e9a&lang.css ($id_48c02a59)
// - /layouts/home.vue?vue&type=style&index=1&scoped=true&lang.css ($id_342dcd71)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d0090f05 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/states.ts");

const __default__ = {
    name: 'home',
    data () {
        return {
            backBtnClass: '',
            nowMode: 1
        }
    },
    computed: {
        modeIcon () {
            return this.nowMode === 0 ? '🌙' : '☀'
        },
        animateClass () {
            if (this.errorMessage !== '') {
                return 'grayscale-80'
            }
            return 'animate-pulse'
        },
        errorInfo () {
            if (this.errorMessage === '') {
                return ''
            }
            switch (this.errorMessage) {
                case 400: {
                    return '400: 访问格式错误，请不要乱输入链接'
                }
                case 401: {
                    return '401: 授权错误，请检查各项Token'
                }
                case 403: {
                    return '403: 拒绝访问，请检查各项Token'
                }
                case 404: {
                    return '404: 找不到项目，删得挺快'
                }
                default: {
                    return this.errorMessage.toString() + ': 接口出错，请报告给开发者'
                }
            }
        }
    },
    methods: {
        goBack () {
            this.$router.back()
        },
        goHome () {
            this.$router.push({ path: '/' })
        },
        changeMode () {
            this.nowMode = 1 - this.nowMode
            if (this.nowMode === 0) {
                document.documentElement.classList.add('dark')
            }
            else if (this.nowMode === 1) {
                document.documentElement.classList.remove('dark')
            }

        }
    }
}

const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  setup(__props, { expose }) {
  expose();

const config = __vite_ssr_import_1__.useRuntimeConfig()
const isLoading = __vite_ssr_import_2__.useLoadStatus()
const headMessage = __vite_ssr_import_2__.useHeadMessage()
const errorMessage = __vite_ssr_import_2__.useErrorMessage()

const __returned__ = { config, isLoading, headMessage, errorMessage }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(_attrs)
  } data-v-b5de7e9a><header class="fixed z-10 top-0 left-0 h-18 w-full backdrop-filter backdrop-blur bg-white dark:bg-dark bg-opacity-80 dark:backdrop-filter dark:backdrop-blur dark:bg-opacity-80" data-v-b5de7e9a><div class="flex h-18 items-center" data-v-b5de7e9a><button class="ml-3 mr-1 text-2xl text-green-500 dark:text-green-100" data-v-b5de7e9a>↩</button><button class="mr-3 ml-1 text-2xl" data-v-b5de7e9a>${
    __vite_ssr_import_3__.ssrInterpolate($options.modeIcon)
  }</button><div class="mx-2 cursor-pointer text-xl font-mono font-medium dark:text-green-100" data-v-b5de7e9a>OneDrive/Blog</div><div class="mx-2 flex-1 text-xl font-mono text-green-500 dark:text-green-100" data-v-b5de7e9a>${
    __vite_ssr_import_3__.ssrInterpolate($setup.headMessage)
  }</div><div class="mx-2 text-xl font-mono font-medium text-green-500 dark:text-green-100" data-v-b5de7e9a>${
    __vite_ssr_import_3__.ssrInterpolate($setup.config.WEBSITE_NAME)
  }</div></div></header><div class="h-18 w-full" data-v-b5de7e9a></div>`)
  if ($setup.isLoading || $setup.errorMessage !== '') {
    _push(`<div data-v-b5de7e9a><div class="fixed h-full w-full z-20 flex justify-center items-center backdrop-filter backdrop-blur" data-v-b5de7e9a><div class="mb-48 flex-col place-content-center" data-v-b5de7e9a><div class="flex justify-center" data-v-b5de7e9a><img src="/onedrive.png" alt="Loading" class="${
      __vite_ssr_import_3__.ssrRenderClass([$options.animateClass, "filter -hue-rotate-45"])
    }" data-v-b5de7e9a></div><div class="flex justify-center" data-v-b5de7e9a><div class="text-2xl text-green-900 dark:text-green-100 mx-1" data-v-b5de7e9a>${
      __vite_ssr_import_3__.ssrInterpolate($options.errorInfo)
    }</div></div></div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<div class="container mx-auto my-4 z-0" data-v-b5de7e9a>`)
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/css/github-markdown.css?vue&type=style&index=0&src=b5de7e9a&lang.css");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/layouts/home.vue?vue&type=style&index=1&scoped=true&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/home.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-b5de7e9a"],['__file',"/home/runner/blog/layouts/home.vue"]]);
}


// --------------------
// Request: /composables/states.ts
// Parents: 
// - /layouts/home.vue ($id_d0090f05)
// - /pages/article/[id].vue?macro=true ($id_8530f7fa)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/article/[id].vue ($id_c6f02538)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_3ca54292 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useLoadStatus = () => __vite_ssr_import_0__.useState("isLoading", () => {
  return false;
});
Object.defineProperty(__vite_ssr_exports__, "useLoadStatus", { enumerable: true, configurable: true, get(){ return useLoadStatus }});
const useBlogSettings = () => __vite_ssr_import_0__.useState("blogSettings", () => {
  return {};
});
Object.defineProperty(__vite_ssr_exports__, "useBlogSettings", { enumerable: true, configurable: true, get(){ return useBlogSettings }});
const useStoreBlogSettings = () => __vite_ssr_import_0__.useState("storeBlogSettings", () => {
  return false;
});
Object.defineProperty(__vite_ssr_exports__, "useStoreBlogSettings", { enumerable: true, configurable: true, get(){ return useStoreBlogSettings }});
const useHeadMessage = () => __vite_ssr_import_0__.useState("headMessage", () => {
  return "";
});
Object.defineProperty(__vite_ssr_exports__, "useHeadMessage", { enumerable: true, configurable: true, get(){ return useHeadMessage }});
const useErrorMessage = () => __vite_ssr_import_0__.useState("errorMessage", () => {
  return "";
});
Object.defineProperty(__vite_ssr_exports__, "useErrorMessage", { enumerable: true, configurable: true, get(){ return useErrorMessage }});
;
}


// --------------------
// Request: /assets/css/github-markdown.css?vue&type=style&index=0&src=b5de7e9a&lang.css
// Parents: 
// - /layouts/home.vue ($id_d0090f05)
// Dependencies: 

// --------------------
const $id_48c02a59 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".markdown-body {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  margin: 0;\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body .octicon {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n  overflow: visible !important;\n}\n.markdown-body h1:hover .anchor .octicon-link:before, .markdown-body h2:hover .anchor .octicon-link:before, .markdown-body h3:hover .anchor .octicon-link:before, .markdown-body h4:hover .anchor .octicon-link:before, .markdown-body h5:hover .anchor .octicon-link:before, .markdown-body h6:hover .anchor .octicon-link:before {\n  width: 16px;\n  height: 16px;\n  content: ' ';\n  display: inline-block;\n  background-color: currentColor;\n  -webkit-mask-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\");\n  mask-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\");\n}\n.markdown-body details, .markdown-body figcaption, .markdown-body figure {\n  display: block;\n}\n.markdown-body summary {\n  display: list-item;\n}\n.markdown-body [hidden] {\n  display: none !important;\n}\n.markdown-body a {\n  background-color: transparent;\n  color: rgb(16, 185, 129);\n  text-decoration: none;\n}\n.markdown-body a:active, .markdown-body a:hover {\n  outline-width: 0;\n}\n.markdown-body abbr[title] {\n  border-bottom: none;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n.markdown-body b, .markdown-body strong {\n  font-weight: 600;\n}\n.markdown-body dfn {\n  font-style: italic;\n}\n.markdown-body h1 {\n  margin: .67em 0;\n  font-weight: 600;\n  padding-bottom: .3em;\n  font-size: 2em;\n  border-bottom: 1px solid hsla(210,18%,87%,1);\n}\n.markdown-body mark {\n  background-color: rgba(16, 185, 129, 0.1);\n  color: #24292f;\n}\n.markdown-body small {\n  font-size: 90%;\n}\n.markdown-body sub, .markdown-body sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n.markdown-body sub {\n  bottom: -0.25em;\n}\n.markdown-body sup {\n  top: -0.5em;\n}\n.markdown-body img {\n  max-width: 100%;\n  border-width: 3px;\n  border-radius: 0.5rem;\n  --tw-border-opacity: 1;\n  border-color: rgba(16, 185, 129, var(--tw-border-opacity));\n  border-style: dashed;\n}\n.markdown-body code, .markdown-body kbd, .markdown-body pre, .markdown-body samp {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body figure {\n  margin: 1em 40px;\n}\n.markdown-body hr {\n  box-sizing: content-box;\n  overflow: hidden;\n  background: transparent;\n  border-bottom: 1px solid hsla(210,18%,87%,1);\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: rgba(16, 185, 129, 0.1);\n  border: 0;\n}\n.markdown-body input {\n  font: inherit;\n  margin: 0;\n  overflow: visible;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body [type=button], .markdown-body [type=reset], .markdown-body [type=submit] {\n  -webkit-appearance: button;\n}\n.markdown-body [type=button]::-moz-focus-inner, .markdown-body [type=reset]::-moz-focus-inner, .markdown-body [type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n.markdown-body [type=button]:-moz-focusring, .markdown-body [type=reset]:-moz-focusring, .markdown-body [type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n.markdown-body [type=checkbox], .markdown-body [type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body [type=number]::-webkit-inner-spin-button, .markdown-body [type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n.markdown-body [type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n.markdown-body [type=search]::-webkit-search-cancel-button, .markdown-body [type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n.markdown-body ::-webkit-input-placeholder {\n  color: inherit;\n  opacity: .54;\n}\n.markdown-body ::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n.markdown-body a:hover {\n  text-decoration: underline;\n}\n.markdown-body hr::before {\n  display: table;\n  content: \"\";\n}\n.markdown-body hr::after {\n  display: table;\n  clear: both;\n  content: \"\";\n}\n.markdown-body table {\n  border-spacing: 0;\n  border-collapse: collapse;\n  display: block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  overflow: auto;\n}\n.markdown-body td, .markdown-body th {\n  padding: 0;\n}\n.markdown-body details summary {\n  cursor: pointer;\n}\n.markdown-body details:not([open])>*:not(summary) {\n  display: none !important;\n}\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;\n  line-height: 10px;\n  color: #24292f;\n  vertical-align: middle;\n  background-color: rgba(16, 185, 129, 0.1);\n  border: solid 1px rgba(175,184,193,0.2);\n  border-bottom-color: rgba(175,184,193,0.2);\n  border-radius: 6px;\n  box-shadow: inset 0 -1px 0 rgba(175,184,193,0.2);\n}\n.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h2 {\n  font-weight: 600;\n  padding-bottom: .3em;\n  font-size: 1.5em;\n  border-bottom: 1px solid hsla(210,18%,87%,1);\n}\n.markdown-body h3 {\n  font-weight: 600;\n  font-size: 1.25em;\n}\n.markdown-body h4 {\n  font-weight: 600;\n  font-size: 1em;\n}\n.markdown-body h5 {\n  font-weight: 600;\n  font-size: .875em;\n}\n.markdown-body h6 {\n  font-weight: 600;\n  font-size: .85em;\n  color: #57606a;\n}\n.markdown-body p {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote {\n  margin: 0;\n  padding: 0.3em 1em;\n  background-color: rgba(16, 185, 129, 0.1);\n  border-left: .25em solid rgba(16, 185, 129, 1);\n}\n.markdown-body ul, .markdown-body ol {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 2em;\n}\n.markdown-body ol ol, .markdown-body ul ol {\n  list-style-type: lower-roman;\n}\n.markdown-body ul ul ol, .markdown-body ul ol ol, .markdown-body ol ul ol, .markdown-body ol ol ol {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd {\n  margin-left: 0;\n}\n.markdown-body tt, .markdown-body code {\n  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;\n  font-size: 12px;\n}\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;\n  font-size: 12px;\n  word-wrap: normal;\n}\n.markdown-body ::-moz-placeholder {\n  color: #6e7781;\n  opacity: 1;\n}\n.markdown-body :-ms-input-placeholder {\n  color: #6e7781;\n  opacity: 1;\n}\n.markdown-body ::placeholder {\n  color: #6e7781;\n  opacity: 1;\n}\n.markdown-body input::-webkit-outer-spin-button, .markdown-body input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body .pl-c {\n  color: #6e7781;\n}\n.markdown-body .pl-c1, .markdown-body .pl-s .pl-v {\n  color: #0550ae;\n}\n.markdown-body .pl-e, .markdown-body .pl-en {\n  color: #8250df;\n}\n.markdown-body .pl-smi, .markdown-body .pl-s .pl-s1 {\n  color: #24292f;\n}\n.markdown-body .pl-ent {\n  color: #116329;\n}\n.markdown-body .pl-k {\n  color: #cf222e;\n}\n.markdown-body .pl-s, .markdown-body .pl-pds, .markdown-body .pl-s .pl-pse .pl-s1, .markdown-body .pl-sr, .markdown-body .pl-sr .pl-cce, .markdown-body .pl-sr .pl-sre, .markdown-body .pl-sr .pl-sra {\n  color: #0a3069;\n}\n.markdown-body .pl-v, .markdown-body .pl-smw {\n  color: #953800;\n}\n.markdown-body .pl-bu {\n  color: #82071e;\n}\n.markdown-body .pl-ii {\n  color: #f6f8fa;\n  background-color: #82071e;\n}\n.markdown-body .pl-c2 {\n  color: #f6f8fa;\n  background-color: #cf222e;\n}\n.markdown-body .pl-sr .pl-cce {\n  font-weight: bold;\n  color: #116329;\n}\n.markdown-body .pl-ml {\n  color: #3b2300;\n}\n.markdown-body .pl-mh, .markdown-body .pl-mh .pl-en, .markdown-body .pl-ms {\n  font-weight: bold;\n  color: #0550ae;\n}\n.markdown-body .pl-mi {\n  font-style: italic;\n  color: #24292f;\n}\n.markdown-body .pl-mb {\n  font-weight: bold;\n  color: #24292f;\n}\n.markdown-body .pl-md {\n  color: #82071e;\n  background-color: #FFEBE9;\n}\n.markdown-body .pl-mi1 {\n  color: #116329;\n  background-color: #dafbe1;\n}\n.markdown-body .pl-mc {\n  color: #953800;\n  background-color: #ffd8b5;\n}\n.markdown-body .pl-mi2 {\n  color: #eaeef2;\n  background-color: #0550ae;\n}\n.markdown-body .pl-mdr {\n  font-weight: bold;\n  color: #8250df;\n}\n.markdown-body .pl-ba {\n  color: #57606a;\n}\n.markdown-body .pl-sg {\n  color: #8c959f;\n}\n.markdown-body .pl-corl {\n  text-decoration: underline;\n  color: #0a3069;\n}\n.markdown-body [data-catalyst] {\n  display: block;\n}\n.markdown-body g-emoji {\n  font-family: \"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n  font-size: 1em;\n  font-style: normal !important;\n  font-weight: 400;\n  line-height: 1;\n  vertical-align: -0.075em;\n}\n.markdown-body g-emoji img {\n  width: 1em;\n  height: 1em;\n}\n.markdown-body::before {\n  display: table;\n  content: \"\";\n}\n.markdown-body::after {\n  display: table;\n  clear: both;\n  content: \"\";\n}\n.markdown-body>*:first-child {\n  margin-top: 0 !important;\n}\n.markdown-body>*:last-child {\n  margin-bottom: 0 !important;\n}\n.markdown-body a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body .absent {\n  color: #cf222e;\n}\n.markdown-body .anchor {\n  float: left;\n  padding-right: 4px;\n  margin-left: -20px;\n  line-height: 1;\n}\n.markdown-body .anchor:focus {\n  outline: none;\n}\n.markdown-body p, .markdown-body blockquote, .markdown-body ul, .markdown-body ol, .markdown-body dl, .markdown-body table, .markdown-body pre, .markdown-body details {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body blockquote>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body sup>a::before {\n  content: \"[\";\n}\n.markdown-body sup>a::after {\n  content: \"]\";\n}\n.markdown-body h1 .octicon-link, .markdown-body h2 .octicon-link, .markdown-body h3 .octicon-link, .markdown-body h4 .octicon-link, .markdown-body h5 .octicon-link, .markdown-body h6 .octicon-link {\n  color: #24292f;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor, .markdown-body h2:hover .anchor, .markdown-body h3:hover .anchor, .markdown-body h4:hover .anchor, .markdown-body h5:hover .anchor, .markdown-body h6:hover .anchor {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link, .markdown-body h2:hover .anchor .octicon-link, .markdown-body h3:hover .anchor .octicon-link, .markdown-body h4:hover .anchor .octicon-link, .markdown-body h5:hover .anchor .octicon-link, .markdown-body h6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n.markdown-body h1 tt, .markdown-body h1 code, .markdown-body h2 tt, .markdown-body h2 code, .markdown-body h3 tt, .markdown-body h3 code, .markdown-body h4 tt, .markdown-body h4 code, .markdown-body h5 tt, .markdown-body h5 code, .markdown-body h6 tt, .markdown-body h6 code {\n  padding: 0 .2em;\n  font-size: inherit;\n}\n.markdown-body ul.no-list, .markdown-body ol.no-list {\n  padding: 0;\n  list-style-type: none;\n}\n.markdown-body ol[type=\"1\"] {\n  list-style-type: decimal;\n}\n.markdown-body ol[type=a] {\n  list-style-type: lower-alpha;\n}\n.markdown-body ol[type=i] {\n  list-style-type: lower-roman;\n}\n.markdown-body div>ol:not([type]) {\n  list-style-type: decimal;\n}\n.markdown-body ul ul, .markdown-body ul ol, .markdown-body ol ol, .markdown-body ol ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li>p {\n  margin-top: 16px;\n}\n.markdown-body li+li {\n  margin-top: .25em;\n}\n.markdown-body dl {\n  padding: 0;\n}\n.markdown-body dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table th {\n  font-weight: 600;\n}\n.markdown-body table th, .markdown-body table td {\n  padding: 6px 13px;\n  border: 1px solid #d0d7de;\n}\n.markdown-body table tr {\n  border-top: 1px solid hsla(210,18%,87%,1);\n}\n.markdown-body table tr:nth-child(2n) {\n  background-color: rgba(16, 185, 129, 0.1);\n}\n.markdown-body table img {\n  background-color: transparent;\n}\n.markdown-body img[align=right] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left] {\n  padding-right: 20px;\n}\n.markdown-body .emoji {\n  max-width: none;\n  vertical-align: text-top;\n  background-color: transparent;\n}\n.markdown-body span.frame {\n  display: block;\n  overflow: hidden;\n}\n.markdown-body span.frame>span {\n  display: block;\n  float: left;\n  width: auto;\n  padding: 7px;\n  margin: 13px 0 0;\n  overflow: hidden;\n  border: 1px solid #d0d7de;\n}\n.markdown-body span.frame span img {\n  display: block;\n  float: left;\n}\n.markdown-body span.frame span span {\n  display: block;\n  padding: 5px 0 0;\n  clear: both;\n  color: #24292f;\n}\n.markdown-body span.align-center {\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.markdown-body span.align-center>span {\n  display: block;\n  margin: 13px auto 0;\n  overflow: hidden;\n  text-align: center;\n}\n.markdown-body span.align-center span img {\n  margin: 0 auto;\n  text-align: center;\n}\n.markdown-body span.align-right {\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.markdown-body span.align-right>span {\n  display: block;\n  margin: 13px 0 0;\n  overflow: hidden;\n  text-align: right;\n}\n.markdown-body span.align-right span img {\n  margin: 0;\n  text-align: right;\n}\n.markdown-body span.float-left {\n  display: block;\n  float: left;\n  margin-right: 13px;\n  overflow: hidden;\n}\n.markdown-body span.float-left span {\n  margin: 13px 0 0;\n}\n.markdown-body span.float-right {\n  display: block;\n  float: right;\n  margin-left: 13px;\n  overflow: hidden;\n}\n.markdown-body span.float-right>span {\n  display: block;\n  margin: 13px auto 0;\n  overflow: hidden;\n  text-align: right;\n}\n.markdown-body code, .markdown-body tt {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(16, 185, 129, 0.1);\n  border-radius: 0.2rem;\n  --tw-border-opacity: 1;\n}\n.markdown-body code br, .markdown-body tt br {\n  display: none;\n}\n.markdown-body del code {\n  text-decoration: inherit;\n}\n.markdown-body pre code {\n  font-size: 100%;\n}\n.markdown-body pre>code {\n  padding: 0;\n  margin: 0;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre, .markdown-body pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: rgba(16, 185, 129, 0.1);\n  border-radius: 0.5rem;\n  border-width: 3px;\n  --tw-border-opacity: 1;\n  border-color: rgba(16, 185, 129, var(--tw-border-opacity));\n  border-style: dashed;\n}\n.markdown-body pre code, .markdown-body pre tt {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n.markdown-body .csv-data td, .markdown-body .csv-data th {\n  padding: 5px;\n  overflow: hidden;\n  font-size: 12px;\n  line-height: 1;\n  text-align: left;\n  white-space: nowrap;\n}\n.markdown-body .csv-data .blob-num {\n  padding: 10px 8px 9px;\n  text-align: right;\n  background: #ffffff;\n  border: 0;\n}\n.markdown-body .csv-data tr {\n  border-top: 0;\n}\n.markdown-body .csv-data th {\n  font-weight: 600;\n  background: #f6f8fa;\n  border-top: 0;\n}\n.markdown-body .footnotes {\n  font-size: 12px;\n  color: #57606a;\n  border-top: 1px solid #d0d7de;\n}\n.markdown-body .footnotes ol {\n  padding-left: 16px;\n}\n.markdown-body .footnotes li {\n  position: relative;\n}\n.markdown-body .footnotes li:target::before {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n  left: -24px;\n  pointer-events: none;\n  content: \"\";\n  border: 2px solid #0969da;\n  border-radius: 6px;\n}\n.markdown-body .footnotes li:target {\n  color: #24292f;\n}\n.markdown-body .footnotes .data-footnote-backref g-emoji {\n  font-family: monospace;\n}\n.markdown-body .task-list-item {\n  list-style-type: none;\n}\n.markdown-body .task-list-item label {\n  font-weight: 400;\n}\n.markdown-body .task-list-item.enabled label {\n  cursor: pointer;\n}\n.markdown-body .task-list-item+.task-list-item {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item .handle {\n  display: none;\n}\n.markdown-body .task-list-item-checkbox {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {\n  margin: 0 -1.6em .25em .2em;\n}\n.markdown-body ::-webkit-calendar-picker-indicator {\n  filter: invert(50%);\n}";
}


// --------------------
// Request: /layouts/home.vue?vue&type=style&index=1&scoped=true&lang.css
// Parents: 
// - /layouts/home.vue ($id_d0090f05)
// Dependencies: 

// --------------------
const $id_342dcd71 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "button[data-v-b5de7e9a] {\n  outline: none;\n}";
}


// --------------------
// Request: /@id/__x00__virtual:/home/runner/blog/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/article/[id].vue?macro=true ($id_8530f7fa)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/article/[id].vue ($id_c6f02538)
// - /pages/index.vue ($id_cca58e97)
// --------------------
const $id_89eafc8b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/article/[id].vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    "name": "article-id",
    "path": "/article/:id",
    "file": "/home/runner/blog/pages/article/[id].vue",
    "children": [],
    "meta": __vite_ssr_import_0__.meta,
    "component": () => __vite_ssr_dynamic_import__('/pages/article/[id].vue')
  },
  {
    "name": "index",
    "path": "/",
    "file": "/home/runner/blog/pages/index.vue",
    "children": [],
    "meta": __vite_ssr_import_1__.meta,
    "component": () => __vite_ssr_dynamic_import__('/pages/index.vue')
  }
];
}


// --------------------
// Request: /pages/article/[id].vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/routes.mjs ($id_89eafc8b)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /composables/states.ts ($id_3ca54292)
// - /node_modules/axios/index.js ($id_9a0dac16)
// - /node_modules/marked/lib/marked.esm.js ($id_9daa9720)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/article/[id].vue?vue&type=style&index=0&scoped=true&lang.css ($id_727d4718)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8530f7fa = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/states.ts");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/marked/lib/marked.esm.js");


/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
    layout: "home",
});

const __default__ = {
    name: '[id]',
    data () {
        return {
            content: '',
            contentType: 'txt',
            settings: {},
            files: [],
            password: false,
            statusCode: 200,
            myPassword: '',
            borderColor: 'border-green-500',
            blurLevel: 'blur-2'
        }
    },
    beforeMount() {
        this.loadArticle('')
    },
    methods: {
        loadArticle () {
            this.isLoading = true
            this.headMessage = ''
            this.errorMessage = ''

            const articleId = this.$route.params.id
            const password = this.myPassword

            const getContent = (c) => this.content = c
            const getContentType = (t) => {
                this.contentType = t
                if (this.contentType === 'redirect') {
                    window.location.href = this.content
                }
                if (t === 'md' || t === 'markdown' || t === 'html') {
                    if (t === 'md' || t === 'markdown') {
                        this.content = __vite_ssr_import_3__.marked.parse(this.content)
                    }
                    for (const f of this.files) {
                        this.content = this.content.replaceAll('src="' + f.name, 'src="' + f.url)
                        this.content = this.content.replaceAll('src="./' + f.name, 'src="./' + f.url)
                        this.content = this.content.replaceAll('href="' + f.name, 'href="' + f.url)
                        this.content = this.content.replaceAll('href="./' + f.name, 'href="./' + f.url)
                    }
                }

            }
            const getSettings = (s) => this.settings = s
            const getFiles = (f) => this.files = f
            const needPassword = () => {
                this.password = true
                if (this.myPassword !== '') {
                    this.borderColor = 'border-red-500'
                }
            }
            const noNeedPassword = () => this.password = false
            const getStatusCode = (c) => {
                this.statusCode = c
                if (c !== 200) {
                    this.errorMessage = c
                }
            }
            const statusMonitor = [false, false]
            const stopLoading = (i) => {
                statusMonitor[i] = true
                if (statusMonitor[0] && statusMonitor[1]) {
                    this.isLoading = false
                }
            }

            __vite_ssr_import_2__.default.get('/api/article', {
                params: {
                    id: articleId,
                    password: password
                }
            }).then((response) => {
                if (!response.data.password) {
                    noNeedPassword()
                    getSettings(response.data.settings)
                    getFiles(response.data.files)
                    if (response.data.contentUrl === '') {
                        getContent('文件缺失，请等待同步')
                        stopLoading(1)
                        return
                    }
                    __vite_ssr_import_2__.default.get(response.data.contentUrl)
                    .then((contentResponse) => {
                        getContent(contentResponse.data)
                        getContentType(response.data.contentType)
                    })
                    .catch((contentError) => {
                        getStatusCode(contentError.response.status)
                    })
                    .finally(() => {
                        stopLoading(1)
                    })
                } else {
                    stopLoading(1)
                    needPassword()
                }
            }).catch((error) => {
                getStatusCode(error.response.status)
            }).finally(() => {
                stopLoading(0)
            })
        },
        onFocus () {
            this.blurLevel = 'blur-1'
        },
        onBlur () {
            this.blurLevel = 'blur-4'
        }
    }
}

const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  setup(__props, { expose }) {
  expose();

const isLoading = __vite_ssr_import_1__.useLoadStatus()
const headMessage = __vite_ssr_import_1__.useHeadMessage()
const errorMessage = __vite_ssr_import_1__.useErrorMessage()

const __returned__ = { isLoading, headMessage, errorMessage, axios: __vite_ssr_import_2__.default, marked: __vite_ssr_import_3__.marked }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "border-3 border-green-500 border-dashed rounded-lg p-2" }, _attrs))} data-v-f865724e>`)
  if ($data.password) {
    _push(`<div data-v-f865724e><div class="text-3xl text-green-800 dark:text-green-100" data-v-f865724e>请输入密码：</div><div class="flex-col my-4" data-v-f865724e><div class="flex justify-center" data-v-f865724e><div class="${
      __vite_ssr_import_5__.ssrRenderClass([$data.borderColor, "border-3 border-dashed rounded-md w-md"])
    }" data-v-f865724e><div class="${
      __vite_ssr_import_5__.ssrRenderClass([$data.blurLevel, "filter"])
    }" data-v-f865724e><input${
      __vite_ssr_import_5__.ssrRenderAttr("value", $data.myPassword)
    } class="w-full text-center dark:bg-dark dark:text-green-100" style="${
      __vite_ssr_import_5__.ssrRenderStyle({"outline":"none"})
    }" data-v-f865724e></div></div><button class="w-8 h-8 ml-4 text-2xl text-red-600" data-v-f865724e>☑</button></div></div></div>`)
  } else {
    _push(`<div data-v-f865724e>`)
    if ($data.contentType === 'html') {
      _push(`<div data-v-f865724e><iframe class="w-full" style="${
        __vite_ssr_import_5__.ssrRenderStyle({"height":"calc(100vh - 8.5rem)"})
      }"${
        __vite_ssr_import_5__.ssrRenderAttr("srcdoc", $data.content)
      } data-v-f865724e></iframe></div>`)
    } else if ($data.contentType === 'md' || $data.contentType === 'markdown') {
      _push(`<div data-v-f865724e><div class="dark:text-green-100 dark:bg-dark markdown-body w-full" data-v-f865724e>${$data.content}</div></div>`)
    } else if ($data.contentType === 'txt') {
      _push(`<div data-v-f865724e><div class="dark:text-green-100" style="${
        __vite_ssr_import_5__.ssrRenderStyle({"white-space":"pre-wrap"})
      }" data-v-f865724e>${
        __vite_ssr_import_5__.ssrInterpolate($data.content)
      }</div></div>`)
    } else if ($data.contentType === 'url') {
      _push(`<div data-v-f865724e><iframe class="w-full" style="${
        __vite_ssr_import_5__.ssrRenderStyle({"height":"calc(100vh - 8.5rem)"})
      }"${
        __vite_ssr_import_5__.ssrRenderAttr("src", $data.content)
      } data-v-f865724e></iframe></div>`)
    } else if ($data.contentType === 'redirect') {
      _push(`<div data-v-f865724e><div class="dark:text-green-100" style="${
        __vite_ssr_import_5__.ssrRenderStyle({"white-space":"pre-wrap","text-align":"center"})
      }" data-v-f865724e> 即将跳转至 <span class="text-green-800 dark:text-green-100" data-v-f865724e>${
        __vite_ssr_import_5__.ssrInterpolate($data.content)
      }</span></div></div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div>`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/article/[id].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/article/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-f865724e"],['__file',"/home/runner/blog/pages/article/[id].vue"]])
const meta = {
    layout: "home",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/composables.mjs
// Parents: 
// - /pages/article/[id].vue?macro=true ($id_8530f7fa)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/article/[id].vue ($id_c6f02538)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_f55c9203 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_0__.useNuxtApp().$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_0__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  if (options.global) {
    nuxtApp._middleware.global.push(middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_0__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
  }
  return false;
};
const navigateTo = (to) => {
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = true ? useRouter() : window.$nuxt.router;
  return router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/axios/index.js
// Parents: 
// - /pages/article/[id].vue?macro=true ($id_8530f7fa)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/article/[id].vue ($id_c6f02538)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 

// --------------------
const $id_9a0dac16 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/axios/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/axios/index.js".') })


// --------------------
// Request: /node_modules/marked/lib/marked.esm.js
// Parents: 
// - /pages/article/[id].vue?macro=true ($id_8530f7fa)
// - /pages/article/[id].vue ($id_c6f02538)
// Dependencies: 

// --------------------
const $id_9daa9720 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function merge(obj) {
  let i = 1,
    target,
    key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) { cells.shift(); }
  if (!cells[cells.length - 1].trim()) { cells.pop(); }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  let result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  } else {
    return {
      type: 'image',
      raw,
      href,
      title,
      text: escape(text)
    };
  }
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];

  return text
    .split('\n')
    .map(node => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }

      const [indentInNode] = matchIndentInNode;

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    })
    .join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic
          ? rtrim(text, '\n')
          : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');

      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text: text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *> ?/gm, '');

      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine,
        line, nextLine, rawLine, itemContents, endEarly;

      let bull = cap[1].trim();
      const isordered = bull.length > 1;

      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };

      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?: [^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);

        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(line)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) { // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) { // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else { // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) { // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw: raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });

        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();

      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
        const hasMultipleLineBreaks = spacers.every(t => {
          const chars = t.raw.split('');
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = 'paragraph';
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => { return { text: c }; }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];

        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => { return { text: c }; });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: 'paragraph',
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize
          ? 'text'
          : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : escape(cap[0]))
          : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!(/>$/.test(trimmedUrl))) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src))
        || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;

    const nextChar = match[1] || match[2] || '';

    if (!nextChar || (nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;

      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];

        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) { // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) { // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;

        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = src.slice(1, lLength + match.index + rLength);
          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});

block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //        () Skip orphan delim inside strong    (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;

inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();

inline.emStrong.lDelim = edit(inline.emStrong.lDelim)
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('ref', block._label)
  .getRegex();

inline.nolink = edit(inline.nolink)
  .replace('ref', block._label)
  .getRegex();

inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * smartypants text replacement
 */
function smartypants(text) {
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 */
function mangle(text) {
  let out = '',
    i,
    ch;

  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };

    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n')
      .replace(/\t/g, '    ');

    this.blockTokens(src, this.tokens);

    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/^ +$/gm, '');
    }
    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions
        && this.options.extensions.block
        && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = (cutSrc.length !== src.length);
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped em & strong delimiters
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions
        && this.options.extensions.inline
        && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : escape(code, true))
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + escape(lang, true)
      + '">'
      + (escaped ? code : escape(code, true))
      + '</code></pre>\n';
  }

  blockquote(quote) {
    return '<blockquote>\n' + quote + '</blockquote>\n';
  }

  html(html) {
    return html;
  }

  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      return '<h'
        + level
        + ' id="'
        + this.options.headerPrefix
        + slugger.slug(raw)
        + '">'
        + text
        + '</h'
        + level
        + '>\n';
    }
    // ignore IDs
    return '<h' + level + '>' + text + '</h' + level + '>\n';
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  listitem(text) {
    return '<li>' + text + '</li>\n';
  }

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  }

  paragraph(text) {
    return '<p>' + text + '</p>\n';
  }

  table(header, body) {
    if (body) body = '<tbody>' + body + '</tbody>';

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  }

  tablerow(content) {
    return '<tr>\n' + content + '</tr>\n';
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? '<' + type + ' align="' + flags.align + '">'
      : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  }

  // span level renderer
  strong(text) {
    return '<strong>' + text + '</strong>';
  }

  em(text) {
    return '<em>' + text + '</em>';
  }

  codespan(text) {
    return '<code>' + text + '</code>';
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  del(text) {
    return '<del>' + text + '</del>';
  }

  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  serialize(value) {
    return value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} options
   * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space': {
          continue;
        }
        case 'hr': {
          out += this.renderer.hr();
          continue;
        }
        case 'heading': {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger);
          continue;
        }
        case 'code': {
          out += this.renderer.code(token.text,
            token.lang,
            token.escaped);
          continue;
        }
        case 'table': {
          header = '';

          // header
          cell = '';
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);

          body = '';
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];

            cell = '';
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case 'blockquote': {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case 'list': {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;

          body = '';
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;

            itemBody = '';
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                  item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                    item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: 'text',
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }

            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }

          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case 'html': {
          // TODO parse inline content if parameter markdown=1
          out += this.renderer.html(token.text);
          continue;
        }
        case 'paragraph': {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case 'text': {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === 'text') {
            token = tokens[++i];
            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }

        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }

    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape': {
          out += renderer.text(token.text);
          break;
        }
        case 'html': {
          out += renderer.html(token.text);
          break;
        }
        case 'link': {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case 'image': {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case 'strong': {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'em': {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'codespan': {
          out += renderer.codespan(token.text);
          break;
        }
        case 'br': {
          out += renderer.br();
          break;
        }
        case 'del': {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'text': {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    const highlight = opt.highlight;
    let tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    const done = function(err) {
      let out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!tokens.length) return done();

    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;

  args.forEach((pack) => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) { // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function(...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) { // Tokenizer Extensions
          if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) { // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) { // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case 'table': {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case 'list': {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) { // Walk any extensions
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};

/**
 * Parse Inline
 */
marked.parseInline = function(src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;

const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = marked;
const parser = Parser.parse;
const lexer = Lexer.lex;


Object.defineProperty(__vite_ssr_exports__, "Lexer", { enumerable: true, configurable: true, get(){ return Lexer }});
Object.defineProperty(__vite_ssr_exports__, "Parser", { enumerable: true, configurable: true, get(){ return Parser }});
Object.defineProperty(__vite_ssr_exports__, "Renderer", { enumerable: true, configurable: true, get(){ return Renderer }});
Object.defineProperty(__vite_ssr_exports__, "Slugger", { enumerable: true, configurable: true, get(){ return Slugger }});
Object.defineProperty(__vite_ssr_exports__, "TextRenderer", { enumerable: true, configurable: true, get(){ return TextRenderer }});
Object.defineProperty(__vite_ssr_exports__, "Tokenizer", { enumerable: true, configurable: true, get(){ return Tokenizer }});
Object.defineProperty(__vite_ssr_exports__, "defaults", { enumerable: true, configurable: true, get(){ return defaults }});
Object.defineProperty(__vite_ssr_exports__, "getDefaults", { enumerable: true, configurable: true, get(){ return getDefaults }});
Object.defineProperty(__vite_ssr_exports__, "lexer", { enumerable: true, configurable: true, get(){ return lexer }});
Object.defineProperty(__vite_ssr_exports__, "marked", { enumerable: true, configurable: true, get(){ return marked }});
Object.defineProperty(__vite_ssr_exports__, "options", { enumerable: true, configurable: true, get(){ return options }});
Object.defineProperty(__vite_ssr_exports__, "parse", { enumerable: true, configurable: true, get(){ return parse }});
Object.defineProperty(__vite_ssr_exports__, "parseInline", { enumerable: true, configurable: true, get(){ return parseInline }});
Object.defineProperty(__vite_ssr_exports__, "parser", { enumerable: true, configurable: true, get(){ return parser }});
Object.defineProperty(__vite_ssr_exports__, "setOptions", { enumerable: true, configurable: true, get(){ return setOptions }});
Object.defineProperty(__vite_ssr_exports__, "use", { enumerable: true, configurable: true, get(){ return use }});
Object.defineProperty(__vite_ssr_exports__, "walkTokens", { enumerable: true, configurable: true, get(){ return walkTokens }});
;
}


// --------------------
// Request: /pages/article/[id].vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/article/[id].vue?macro=true ($id_8530f7fa)
// - /pages/article/[id].vue ($id_c6f02538)
// Dependencies: 

// --------------------
const $id_727d4718 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "button[data-v-f865724e] {\n  outline: none;\n}";
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/routes.mjs ($id_89eafc8b)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /composables/states.ts ($id_3ca54292)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/axios/index.js ($id_9a0dac16)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/states.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/axios/index.js");


/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
    layout: "home",
});

const __default__ = {
    name: 'index',
    data () {
        return {
            article: [],
            defaultSettings: {
                saying: '全部文章：',
                desc: true,
                button: '点击阅读',
                pageNum: 10
            },
            statusCode: 200,
            nowPage: 1
        }
    },
    mounted () {
        this.getArticle(1)
    },
    methods: {
        getArticle (page) {
            this.isLoading = true
            this.headMessage = ''
            this.errorMessage = ''

            const getData = (a) => {
                this.article = a
                this.sortArticle()
            }
            const getSettings = (s) => {
                this.blogSettings = s
                this.storeBlogSettings = true
            }
            const isBlogSettings = () => false
            const statusMonitor = [false, false]
            const stopLoading = (i) => {
                statusMonitor[i] = true
                if (statusMonitor[0] && statusMonitor[1]) {
                    this.isLoading = false
                }
            }
            const getStatusCode = (c) => {
                this.statusCode = c
                if (c !== 200) {
                    this.errorMessage = c
                }
            }

            __vite_ssr_import_3__.default.get('/api/index', {
                params: {
                    page
                }
            })
            .then(async (response) => {
                if (!isBlogSettings() && page === 1) {
                    await __vite_ssr_import_3__.default.get(response.data.settingsUrl)
                    .then((response) => {
                        getSettings(response.data)
                    })
                    .catch((error) => {
                        getStatusCode(error.response.status)
                    })
                    .finally(() => {
                        stopLoading(1)
                    })
                } else {
                    stopLoading(1)
                }
                getData(response.data.article)
            })
            .catch((error) => {
                getStatusCode(error.response.status)
            })
            .finally(() => {
                stopLoading(0)
            })
        },
        sortArticle () {
            let i = 0
            for (const a of this.article) {
                const indexValue = Number(a.dirName.substring(0, a.dirName.indexOf('-')))
                if (typeof indexValue === 'number' && !isNaN(indexValue)) {
                    this.article[i].index = indexValue
                    this.article[i].title = a.dirName.substring(a.dirName.indexOf('-') + 1)
                    this.article[i].updateDate = this.article[i].updateDate.substring(0, this.article[i].updateDate.indexOf('T'))
                    i = i + 1
                }
            }
            if (this.getConfig('desc')) {
                this.article.sort((a, b) => b.index - a.index)
            }
            else {
                this.article.sort((a, b) => a.index - b.index)
            }
        },
        getConfig (name) {
            if (this.blogSettings !== undefined) {
                if (this.blogSettings[name] !== undefined) {
                    return this.blogSettings[name]
                }
            }
            return this.defaultSettings[name]
        },
        prePage () {
            if (this.nowPage > 1) {
                this.nowPage--
                this.getArticle(this.nowPage)
            }
        },
        nextPage () {
            if (this.article.length === this.blogSettings.pageNum) {
                this.nowPage++
                this.getArticle(this.nowPage)
            }
        }
    }
}

const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  setup(__props, { expose }) {
  expose();

const isLoading = __vite_ssr_import_1__.useLoadStatus()
const headMessage = __vite_ssr_import_1__.useHeadMessage()
const blogSettings = __vite_ssr_import_1__.useBlogSettings()
const storeBlogSettings = __vite_ssr_import_1__.useStoreBlogSettings()
const errorMessage = __vite_ssr_import_1__.useErrorMessage()

const __returned__ = { isLoading, headMessage, blogSettings, storeBlogSettings, errorMessage, axios: __vite_ssr_import_3__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_4__.resolveComponent("nuxt-link")

  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(_attrs)}>`)
  if ($data.statusCode === 200) {
    _push(`<div><div class="text-4xl text-green-500 font-bold">${__vite_ssr_import_5__.ssrInterpolate($options.getConfig('saying'))}</div><!--[-->`)
    __vite_ssr_import_5__.ssrRenderList($data.article, (a) => {
      _push(`<div><div class="flex-col justify-between h-auto w-full mx-auto my-4 p-4 border-3 border-green-500 border-dashed rounded-lg"><div class="text-2xl dark:text-green-100">${
        __vite_ssr_import_5__.ssrInterpolate(a.title)
      }</div><div class="text-md text-gray-500 dark:text-green-100">${
        __vite_ssr_import_5__.ssrInterpolate(a.updateDate)
      }</div><div class="flex w-full justify-end">`)
      _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
        to: '/article/' + a.id
      }, {
        default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
          if (_push) {
            _push(`<div class="bg-green-100 dark:bg-green-900 dark:text-green-100 p-1 border-3 border-green-500 border-dashed rounded-lg text-green-800 font-bold"${
              _scopeId
            }>${
              __vite_ssr_import_5__.ssrInterpolate($options.getConfig('button'))
            }</div>`)
          } else {
            return [
              __vite_ssr_import_4__.createVNode("div", { class: "bg-green-100 dark:bg-green-900 dark:text-green-100 p-1 border-3 border-green-500 border-dashed rounded-lg text-green-800 font-bold" }, __vite_ssr_import_4__.toDisplayString($options.getConfig('button')), 1 /* TEXT */)
            ]
          }
        }),
        _: 2 /* DYNAMIC */
      }, _parent))
      _push(`</div></div></div>`)
    })
    _push(`<!--]-->`)
    if ($data.article.length === 0) {
      _push(`<div> 空 </div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`<div class="text-center"><button class="text-2xl">⬅️</button><span class="text-md text-gray-500 dark:text-green-100 px-2 border-3 border-green-500 border-dashed rounded-lg">${__vite_ssr_import_5__.ssrInterpolate($data.nowPage)}</span><button class="text-2xl">➡️</button></div></div>`)
  } else {
    _push(`<div><div class="text-4xl">${__vite_ssr_import_5__.ssrInterpolate($data.statusCode)}</div></div>`)
  }
  _push(`</div>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/runner/blog/pages/index.vue"]])
const meta = {
    layout: "home",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/article/[id].vue
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/routes.mjs ($id_89eafc8b)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /composables/states.ts ($id_3ca54292)
// - /node_modules/axios/index.js ($id_9a0dac16)
// - /node_modules/marked/lib/marked.esm.js ($id_9daa9720)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/article/[id].vue?vue&type=style&index=0&scoped=true&lang.css ($id_727d4718)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c6f02538 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/states.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/marked/lib/marked.esm.js");


/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
    layout: "home",
});

const __default__ = {
    name: '[id]',
    data () {
        return {
            content: '',
            contentType: 'txt',
            settings: {},
            files: [],
            password: false,
            statusCode: 200,
            myPassword: '',
            borderColor: 'border-green-500',
            blurLevel: 'blur-2'
        }
    },
    beforeMount() {
        this.loadArticle('')
    },
    methods: {
        loadArticle () {
            this.isLoading = true
            this.headMessage = ''
            this.errorMessage = ''

            const articleId = this.$route.params.id
            const password = this.myPassword

            const getContent = (c) => this.content = c
            const getContentType = (t) => {
                this.contentType = t
                if (this.contentType === 'redirect') {
                    window.location.href = this.content
                }
                if (t === 'md' || t === 'markdown' || t === 'html') {
                    if (t === 'md' || t === 'markdown') {
                        this.content = __vite_ssr_import_3__.marked.parse(this.content)
                    }
                    for (const f of this.files) {
                        this.content = this.content.replaceAll('src="' + f.name, 'src="' + f.url)
                        this.content = this.content.replaceAll('src="./' + f.name, 'src="./' + f.url)
                        this.content = this.content.replaceAll('href="' + f.name, 'href="' + f.url)
                        this.content = this.content.replaceAll('href="./' + f.name, 'href="./' + f.url)
                    }
                }

            }
            const getSettings = (s) => this.settings = s
            const getFiles = (f) => this.files = f
            const needPassword = () => {
                this.password = true
                if (this.myPassword !== '') {
                    this.borderColor = 'border-red-500'
                }
            }
            const noNeedPassword = () => this.password = false
            const getStatusCode = (c) => {
                this.statusCode = c
                if (c !== 200) {
                    this.errorMessage = c
                }
            }
            const statusMonitor = [false, false]
            const stopLoading = (i) => {
                statusMonitor[i] = true
                if (statusMonitor[0] && statusMonitor[1]) {
                    this.isLoading = false
                }
            }

            __vite_ssr_import_2__.default.get('/api/article', {
                params: {
                    id: articleId,
                    password: password
                }
            }).then((response) => {
                if (!response.data.password) {
                    noNeedPassword()
                    getSettings(response.data.settings)
                    getFiles(response.data.files)
                    if (response.data.contentUrl === '') {
                        getContent('文件缺失，请等待同步')
                        stopLoading(1)
                        return
                    }
                    __vite_ssr_import_2__.default.get(response.data.contentUrl)
                    .then((contentResponse) => {
                        getContent(contentResponse.data)
                        getContentType(response.data.contentType)
                    })
                    .catch((contentError) => {
                        getStatusCode(contentError.response.status)
                    })
                    .finally(() => {
                        stopLoading(1)
                    })
                } else {
                    stopLoading(1)
                    needPassword()
                }
            }).catch((error) => {
                getStatusCode(error.response.status)
            }).finally(() => {
                stopLoading(0)
            })
        },
        onFocus () {
            this.blurLevel = 'blur-1'
        },
        onBlur () {
            this.blurLevel = 'blur-4'
        }
    }
}

const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  setup(__props, { expose }) {
  expose();

const isLoading = __vite_ssr_import_1__.useLoadStatus()
const headMessage = __vite_ssr_import_1__.useHeadMessage()
const errorMessage = __vite_ssr_import_1__.useErrorMessage()

const __returned__ = { isLoading, headMessage, errorMessage, axios: __vite_ssr_import_2__.default, marked: __vite_ssr_import_3__.marked }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "border-3 border-green-500 border-dashed rounded-lg p-2" }, _attrs))} data-v-f865724e>`)
  if ($data.password) {
    _push(`<div data-v-f865724e><div class="text-3xl text-green-800 dark:text-green-100" data-v-f865724e>请输入密码：</div><div class="flex-col my-4" data-v-f865724e><div class="flex justify-center" data-v-f865724e><div class="${
      __vite_ssr_import_5__.ssrRenderClass([$data.borderColor, "border-3 border-dashed rounded-md w-md"])
    }" data-v-f865724e><div class="${
      __vite_ssr_import_5__.ssrRenderClass([$data.blurLevel, "filter"])
    }" data-v-f865724e><input${
      __vite_ssr_import_5__.ssrRenderAttr("value", $data.myPassword)
    } class="w-full text-center dark:bg-dark dark:text-green-100" style="${
      __vite_ssr_import_5__.ssrRenderStyle({"outline":"none"})
    }" data-v-f865724e></div></div><button class="w-8 h-8 ml-4 text-2xl text-red-600" data-v-f865724e>☑</button></div></div></div>`)
  } else {
    _push(`<div data-v-f865724e>`)
    if ($data.contentType === 'html') {
      _push(`<div data-v-f865724e><iframe class="w-full" style="${
        __vite_ssr_import_5__.ssrRenderStyle({"height":"calc(100vh - 8.5rem)"})
      }"${
        __vite_ssr_import_5__.ssrRenderAttr("srcdoc", $data.content)
      } data-v-f865724e></iframe></div>`)
    } else if ($data.contentType === 'md' || $data.contentType === 'markdown') {
      _push(`<div data-v-f865724e><div class="dark:text-green-100 dark:bg-dark markdown-body w-full" data-v-f865724e>${$data.content}</div></div>`)
    } else if ($data.contentType === 'txt') {
      _push(`<div data-v-f865724e><div class="dark:text-green-100" style="${
        __vite_ssr_import_5__.ssrRenderStyle({"white-space":"pre-wrap"})
      }" data-v-f865724e>${
        __vite_ssr_import_5__.ssrInterpolate($data.content)
      }</div></div>`)
    } else if ($data.contentType === 'url') {
      _push(`<div data-v-f865724e><iframe class="w-full" style="${
        __vite_ssr_import_5__.ssrRenderStyle({"height":"calc(100vh - 8.5rem)"})
      }"${
        __vite_ssr_import_5__.ssrRenderAttr("src", $data.content)
      } data-v-f865724e></iframe></div>`)
    } else if ($data.contentType === 'redirect') {
      _push(`<div data-v-f865724e><div class="dark:text-green-100" style="${
        __vite_ssr_import_5__.ssrRenderStyle({"white-space":"pre-wrap","text-align":"center"})
      }" data-v-f865724e> 即将跳转至 <span class="text-green-800 dark:text-green-100" data-v-f865724e>${
        __vite_ssr_import_5__.ssrInterpolate($data.content)
      }</span></div></div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div>`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/article/[id].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/article/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-f865724e"],['__file',"/home/runner/blog/pages/article/[id].vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/routes.mjs ($id_89eafc8b)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /composables/states.ts ($id_3ca54292)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/axios/index.js ($id_9a0dac16)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/states.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/axios/index.js");


/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
    layout: "home",
});

const __default__ = {
    name: 'index',
    data () {
        return {
            article: [],
            defaultSettings: {
                saying: '全部文章：',
                desc: true,
                button: '点击阅读',
                pageNum: 10
            },
            statusCode: 200,
            nowPage: 1
        }
    },
    mounted () {
        this.getArticle(1)
    },
    methods: {
        getArticle (page) {
            this.isLoading = true
            this.headMessage = ''
            this.errorMessage = ''

            const getData = (a) => {
                this.article = a
                this.sortArticle()
            }
            const getSettings = (s) => {
                this.blogSettings = s
                this.storeBlogSettings = true
            }
            const isBlogSettings = () => false
            const statusMonitor = [false, false]
            const stopLoading = (i) => {
                statusMonitor[i] = true
                if (statusMonitor[0] && statusMonitor[1]) {
                    this.isLoading = false
                }
            }
            const getStatusCode = (c) => {
                this.statusCode = c
                if (c !== 200) {
                    this.errorMessage = c
                }
            }

            __vite_ssr_import_3__.default.get('/api/index', {
                params: {
                    page
                }
            })
            .then(async (response) => {
                if (!isBlogSettings() && page === 1) {
                    await __vite_ssr_import_3__.default.get(response.data.settingsUrl)
                    .then((response) => {
                        getSettings(response.data)
                    })
                    .catch((error) => {
                        getStatusCode(error.response.status)
                    })
                    .finally(() => {
                        stopLoading(1)
                    })
                } else {
                    stopLoading(1)
                }
                getData(response.data.article)
            })
            .catch((error) => {
                getStatusCode(error.response.status)
            })
            .finally(() => {
                stopLoading(0)
            })
        },
        sortArticle () {
            let i = 0
            for (const a of this.article) {
                const indexValue = Number(a.dirName.substring(0, a.dirName.indexOf('-')))
                if (typeof indexValue === 'number' && !isNaN(indexValue)) {
                    this.article[i].index = indexValue
                    this.article[i].title = a.dirName.substring(a.dirName.indexOf('-') + 1)
                    this.article[i].updateDate = this.article[i].updateDate.substring(0, this.article[i].updateDate.indexOf('T'))
                    i = i + 1
                }
            }
            if (this.getConfig('desc')) {
                this.article.sort((a, b) => b.index - a.index)
            }
            else {
                this.article.sort((a, b) => a.index - b.index)
            }
        },
        getConfig (name) {
            if (this.blogSettings !== undefined) {
                if (this.blogSettings[name] !== undefined) {
                    return this.blogSettings[name]
                }
            }
            return this.defaultSettings[name]
        },
        prePage () {
            if (this.nowPage > 1) {
                this.nowPage--
                this.getArticle(this.nowPage)
            }
        },
        nextPage () {
            if (this.article.length === this.blogSettings.pageNum) {
                this.nowPage++
                this.getArticle(this.nowPage)
            }
        }
    }
}

const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  setup(__props, { expose }) {
  expose();

const isLoading = __vite_ssr_import_1__.useLoadStatus()
const headMessage = __vite_ssr_import_1__.useHeadMessage()
const blogSettings = __vite_ssr_import_1__.useBlogSettings()
const storeBlogSettings = __vite_ssr_import_1__.useStoreBlogSettings()
const errorMessage = __vite_ssr_import_1__.useErrorMessage()

const __returned__ = { isLoading, headMessage, blogSettings, storeBlogSettings, errorMessage, axios: __vite_ssr_import_3__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_4__.resolveComponent("nuxt-link")

  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(_attrs)}>`)
  if ($data.statusCode === 200) {
    _push(`<div><div class="text-4xl text-green-500 font-bold">${__vite_ssr_import_5__.ssrInterpolate($options.getConfig('saying'))}</div><!--[-->`)
    __vite_ssr_import_5__.ssrRenderList($data.article, (a) => {
      _push(`<div><div class="flex-col justify-between h-auto w-full mx-auto my-4 p-4 border-3 border-green-500 border-dashed rounded-lg"><div class="text-2xl dark:text-green-100">${
        __vite_ssr_import_5__.ssrInterpolate(a.title)
      }</div><div class="text-md text-gray-500 dark:text-green-100">${
        __vite_ssr_import_5__.ssrInterpolate(a.updateDate)
      }</div><div class="flex w-full justify-end">`)
      _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
        to: '/article/' + a.id
      }, {
        default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
          if (_push) {
            _push(`<div class="bg-green-100 dark:bg-green-900 dark:text-green-100 p-1 border-3 border-green-500 border-dashed rounded-lg text-green-800 font-bold"${
              _scopeId
            }>${
              __vite_ssr_import_5__.ssrInterpolate($options.getConfig('button'))
            }</div>`)
          } else {
            return [
              __vite_ssr_import_4__.createVNode("div", { class: "bg-green-100 dark:bg-green-900 dark:text-green-100 p-1 border-3 border-green-500 border-dashed rounded-lg text-green-800 font-bold" }, __vite_ssr_import_4__.toDisplayString($options.getConfig('button')), 1 /* TEXT */)
            ]
          }
        }),
        _: 2 /* DYNAMIC */
      }, _parent))
      _push(`</div></div></div>`)
    })
    _push(`<!--]-->`)
    if ($data.article.length === 0) {
      _push(`<div> 空 </div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`<div class="text-center"><button class="text-2xl">⬅️</button><span class="text-md text-gray-500 dark:text-green-100 px-2 border-3 border-green-500 border-dashed rounded-lg">${__vite_ssr_import_5__.ssrInterpolate($data.nowPage)}</span><button class="text-2xl">➡️</button></div></div>`)
  } else {
    _push(`<div><div class="text-4xl">${__vite_ssr_import_5__.ssrInterpolate($data.statusCode)}</div></div>`)
  }
  _push(`</div>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/runner/blog/pages/index.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/home/runner/blog/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_8bf731bd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs ($id_706bcd9c)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///home/runner/blog/node_modules/ohmyfetch/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/home/runner/blog/node_modules/ohmyfetch/dist/index.mjs".') })


// --------------------
// Request: /@id/__x00__virtual:/home/runner/blog/.nuxt/components.mjs
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs ($id_706bcd9c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/loading.vue ($id_18023675)
// --------------------
const $id_52d35446 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  'Loading': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/loading.vue' /* webpackChunkName: "components/loading" */).then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /components/loading.vue
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/components.mjs ($id_52d35446)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/onedrive.png ($id_a6ff0a71)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_18023675 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {
    name: 'loading'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/onedrive.png");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex fixed top-0 left-0 z-20 w-screen h-screen justify-center items-center backdrop-filter backdrop-blur" }, _attrs))
  }><div><img${
    __vite_ssr_import_1__.ssrRenderAttr("src", __vite_ssr_import_2__.default)
  } alt="logo" class="filter -hue-rotate-45 animate-pulse"></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/loading.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/runner/blog/components/loading.vue"]]);
}


// --------------------
// Request: /assets/onedrive.png
// Parents: 
// - /components/loading.vue ($id_18023675)
// Dependencies: 

// --------------------
const $id_a6ff0a71 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/onedrive.png";
}


// --------------------
// Request: /@id/__x00__virtual:/home/runner/blog/.nuxt/root-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// --------------------
const $id_57c804b1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/root-component.mjs ($id_57c804b1)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f8564e04 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  setup () {
    const nuxtApp = __vite_ssr_import_0__.useNuxtApp()
    const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
    if (true && results && results.some(i => i && 'then' in i)) {
      console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_1__.resolveComponent("App")

  __vite_ssr_import_2__.ssrRenderSuspense(_push, {
    default: () => {
      _push(__vite_ssr_import_2__.ssrRenderComponent(_component_App, null, null, _parent))
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/runner/blog/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/home/runner/blog/.nuxt/app-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_90e8a108 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/__x00__virtual:/home/runner/blog/.nuxt/app-component.mjs ($id_90e8a108)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/meta/runtime/index.mjs ($id_ea12a3fb)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /app.vue?vue&type=style&index=0&lang.css ($id_7e68c11d)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/index.mjs");


const _sfc_main = {
    setup () {
        const config = __vite_ssr_import_0__.useRuntimeConfig()
        __vite_ssr_import_1__.useMeta({
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
            ],
            title: config.WEBSITE_NAME,
            bodyAttrs: {
                class: 'dark:bg-dark'
            }
        })
    }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __vite_ssr_import_2__.resolveComponent("NuxtPage")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/app.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/runner/blog/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/index.mjs
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_ea12a3fb = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /app.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_7e68c11d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "::-moz-selection {\n  background-color: rgb(16, 185, 129);\n  color: #FFFFFF;\n}\n::selection {\n  background-color: rgb(16, 185, 129);\n  color: #FFFFFF;\n}";
}


const __modules__ = {
 '/home/runner/blog/node_modules/nuxt3/dist/app/entry': $id_ef229830,
 '/node_modules/nuxt3/dist/app/bootstrap.mjs': $id_fef466a9,
 '/node_modules/vue/dist/vue.cjs.js': $id_60f0615f,
 '/node_modules/nuxt3/dist/app/index.mjs': $id_d8c2af0f,
 '/node_modules/nuxt3/dist/app/nuxt.mjs': $id_bf77ef36,
 '/node_modules/hookable/dist/index.mjs': $id_a2c811c4,
 '/node_modules/nuxt3/dist/app/compat/legacy-app.mjs': $id_75047751,
 '/node_modules/unenv/runtime/mock/proxy.mjs': $id_39e12da7,
 '/node_modules/nuxt3/dist/app/composables/index.mjs': $id_42ae3d5d,
 '/node_modules/nuxt3/dist/app/composables/component.mjs': $id_b47c3881,
 '/node_modules/vue-router/dist/vue-router.cjs.js': $id_f9a4a698,
 '/node_modules/nuxt3/dist/app/composables/asyncData.mjs': $id_a2ef143e,
 '/node_modules/nuxt3/dist/app/composables/hydrate.mjs': $id_43a772c2,
 '/node_modules/nuxt3/dist/app/composables/state.mjs': $id_d232db97,
 '/node_modules/nuxt3/dist/app/composables/fetch.mjs': $id_765a0ed7,
 '/node_modules/murmurhash-es/dist/index.mjs': $id_fbf6dac3,
 '/node_modules/nuxt3/dist/app/composables/cookie.mjs': $id_792d64c4,
 '/node_modules/cookie-es/dist/index.mjs': $id_f4975261,
 '/node_modules/h3/dist/index.mjs': $id_57d7ded6,
 '/node_modules/destr/dist/index.mjs': $id_03d15ecd,
 '/node_modules/nuxt3/dist/app/composables/ssr.mjs': $id_4d0dc923,
 '/@id/__x00__virtual:/home/runner/blog/.nuxt/css.mjs': $id_24f25f16,
 '/@windicss/windi.css': $id_309b5097,
 '/@id/__x00__virtual:/home/runner/blog/.nuxt/plugins/server.mjs': $id_706bcd9c,
 '/node_modules/nuxt3/dist/app/plugins/preload.server.mjs': $id_b9f3c557,
 '/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs': $id_cbe5172d,
 '/node_modules/@vueuse/head/dist/index.mjs': $id_c032264e,
 '/node_modules/nuxt3/dist/meta/runtime/plugin.mjs': $id_9fd5f35e,
 '/node_modules/nuxt3/dist/meta/runtime/components.mjs': $id_94744df3,
 '/node_modules/nuxt3/dist/meta/runtime/composables.mjs': $id_ca9295be,
 '/node_modules/@vue/shared/dist/shared.cjs.js': $id_852b06a2,
 '/@id/__x00__virtual:/home/runner/blog/.nuxt/meta.config.mjs': $id_0057e83b,
 '/node_modules/nuxt3/dist/pages/runtime/router.mjs': $id_a4d6cb5b,
 '/node_modules/nuxt3/dist/pages/runtime/nested-page.vue': $id_c268603a,
 '/node_modules/vue/server-renderer/index.js': $id_b215fa1c,
 '/@id/plugin-vue:export-helper': $id_bbb863c1,
 '/node_modules/nuxt3/dist/pages/runtime/page.vue': $id_10628d40,
 '/node_modules/nuxt3/dist/pages/runtime/layout.mjs': $id_9b68c93f,
 '/@id/__x00__virtual:/home/runner/blog/.nuxt/layouts.mjs': $id_547df7e1,
 '/layouts/home.vue': $id_d0090f05,
 '/composables/states.ts': $id_3ca54292,
 '/assets/css/github-markdown.css?vue&type=style&index=0&src=b5de7e9a&lang.css': $id_48c02a59,
 '/layouts/home.vue?vue&type=style&index=1&scoped=true&lang.css': $id_342dcd71,
 '/@id/__x00__virtual:/home/runner/blog/.nuxt/routes.mjs': $id_89eafc8b,
 '/pages/article/[id].vue?macro=true': $id_8530f7fa,
 '/node_modules/nuxt3/dist/pages/runtime/composables.mjs': $id_f55c9203,
 '/node_modules/axios/index.js': $id_9a0dac16,
 '/node_modules/marked/lib/marked.esm.js': $id_9daa9720,
 '/pages/article/[id].vue?vue&type=style&index=0&scoped=true&lang.css': $id_727d4718,
 '/pages/index.vue?macro=true': $id_5dd70240,
 '/pages/article/[id].vue': $id_c6f02538,
 '/pages/index.vue': $id_cca58e97,
 '/@id/__x00__virtual:/home/runner/blog/.nuxt/middleware.mjs': $id_8bf731bd,
 '/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs': $id_7b587af2,
 '/node_modules/ohmyfetch/dist/index.mjs': $id_780217c4,
 '/@id/__x00__virtual:/home/runner/blog/.nuxt/components.mjs': $id_52d35446,
 '/components/loading.vue': $id_18023675,
 '/assets/onedrive.png': $id_a6ff0a71,
 '/@id/__x00__virtual:/home/runner/blog/.nuxt/root-component.mjs': $id_57c804b1,
 '/node_modules/nuxt3/dist/app/components/nuxt-root.vue': $id_f8564e04,
 '/@id/__x00__virtual:/home/runner/blog/.nuxt/app-component.mjs': $id_90e8a108,
 '/app.vue': $id_2b46e842,
 '/node_modules/nuxt3/dist/meta/runtime/index.mjs': $id_ea12a3fb,
 '/app.vue?vue&type=style&index=0&lang.css': $id_7e68c11d
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__('/home/runner/blog/node_modules/nuxt3/dist/app/entry')