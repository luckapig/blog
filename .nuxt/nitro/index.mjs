import 'unenv/runtime/polyfill/fetch.node';
import { Server } from 'http';
import { tmpdir } from 'os';
import { join } from 'path';
import { mkdirSync } from 'fs';
import { parentPort, threadId } from 'worker_threads';
import { provider, isWindows } from 'std-env';
import { createApp, useBase } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import destr from 'destr';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { error404, errorDev } from '@nuxt/design';
import axios from 'axios';
import { URLSearchParams as URLSearchParams$1 } from 'url';
import { createRenderer } from 'vue-bundle-renderer';
import devalue from '@nuxt/devalue';
import defu from 'defu';
import { joinURL } from 'ufo';
import htmlTemplate from '/home/runner/blog/.nuxt/views/document.template.mjs';
import { renderToString as renderToString$2 } from 'vue/server-renderer';

const _runtimeConfig = {public:{WEBSITE_NAME:" ",app:{baseURL:"\u002F",buildAssetsDir:"\u002F_nuxt\u002F",assetsPath:{},cdnURL:null}},private:{CLIENT_ID:"33038c9e-ffc6-406a-b539-7bde4d536f23",CLIENT_SECRET:"_Sm7Q~TIFG.fGp1btaZiCvFQs4TwXGsFRX8sb",REDIRECT_URI:"http:\u002F\u002Flocalhost:3000",REFRESH_TOKEN:"0.AUoAr8fRLZqSKEWKFxK0F91cq56MAzPG_2pAtTl73k1TbyNKADY.AgABAAAAAAD--DLA3VO7QrddgJg7WevrAgDs_wQA9P8raAUXAYMq4Q-B79XOlJc1czOA5Rbu0xEo0XBKDLJQQTuAG7LR2v1R6qqx93WFrXPANUpjjtMiwm5OHx0NXjv9S-CFQ_YhxUYiR9jM77Hew5csdx73wEF36lEMkpIs7h6Mgro8_sW6FbKWIJ6vOj5eVd-cvypePqcqIlI5I7IstJ7zF6SPruUAgkzzgcnVrQpk-tZJa8t7hHuxf3oXOlSSVGfL4amTWyCzXeX00i3U7JqzonDcr9vHqf7gnuAMB2wEKIrz3Buox0IilVwbrvGYKUcqeRlI5ABu0fmaOKNwmUMO-kk-jrEXNgXYEeCSLSLO5cugEW5PaiE7Y9GbbiiAWtK9zKus1lSlO_oIbCqPUEdn7r3hmj84tRYnrANh3Q-op_ms55c06A6aAtdxlHt6nBlFPcC8O9z-rWTw7lBeVSKc1Nf8vw9BM1FmWvJko7Tz5_M6YFQxd0CuOGDtL6gkIy1DkxWqj-pI9gobbdPhmjlNrUOk7F7PcTNY6ouwW_i7WDBNttORJMjHNL6Mz3iS4Veq68iIT6hiH7f3Wnr1-GxEv-xX-B2sanIcFrvtLWZpea-AsEmHlz1uld3GrnLp-dWDGFoEfCKBT__cdBryL1WZeFVSQSQzi4Row-pRHYHW5Fff_370JgsTkyBDPX2bY1FkArvHmCp4sftt9_3fBTlVLUe-xlgvrzcFI9LgX3Hc7jvD_oe_xIEr2FVDAf9bXUyPNC0Lept4uNAmeGanzegqylU4Ejt7336wn5hjUEadCQCP6wiV58gW3MUGUKhe20Zx4f4wi13H__LvgFm5QHo4Tt1BJDZaMph4Yg7grXeQcUxx26KVDMpBfsb6uDVujVPgZlJRXzP7aBU4ZO9K-_CsKxxXk16nd69_1H-kgY9baR2Wxs12M-zJFp9fw-s31hLmjNMWSruYac1m4SxLJyajeyuOnGh_9rJkAPX3QCC8CozqV-qFyETTiFUS_lpXgUTteugdyY0WDSsLEbmhXQfT-qO24lRJEL0OzybKz2dxfN0aoNHMdqQgdGZNFdbr2-jT4I0XFTtW0K5Ynibig71XimG3AQ",ROOT_PATH:"\u002FBlog",ONEDRIVE_URI:"https:\u002F\u002Fgraph.microsoft.com\u002Fv1.0\u002Fme\u002Fdrive",OAUTH_URL:"https:\u002F\u002Flogin.microsoftonline.com\u002Fcommon\u002Foauth2\u002Fv2.0\u002Ftoken"}};
for (const type of ["private", "public"]) {
  for (const key in _runtimeConfig[type]) {
    _runtimeConfig[type][key] = destr(process.env[key] || _runtimeConfig[type][key]);
  }
}
const appConfig = _runtimeConfig.public.app;
appConfig.baseURL = process.env.NUXT_APP_BASE_URL || appConfig.baseURL;
appConfig.cdnURL = process.env.NUXT_APP_CDN_URL || appConfig.cdnURL;
appConfig.buildAssetsDir = process.env.NUXT_APP_BUILD_ASSETS_DIR || appConfig.buildAssetsDir;
const privateConfig = deepFreeze(defu(_runtimeConfig.private, _runtimeConfig.public));
const publicConfig = deepFreeze(_runtimeConfig.public);
const config = privateConfig;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

function baseURL() {
  return config.app.baseURL;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), config.app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = config.app.cdnURL || config.app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const cwd = process.cwd();
const hasReqHeader = (req, header, includes) => req.headers[header] && req.headers[header].toLowerCase().includes(includes);
function handleError(error, req, res) {
  const isJsonRequest = hasReqHeader(req, "accept", "application/json") || hasReqHeader(req, "user-agent", "curl/") || hasReqHeader(req, "user-agent", "httpie/");
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace(".vue", ".js").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const is404 = error.statusCode === 404;
  const errorObject = {
    statusCode: error.statusCode || 500,
    statusMessage: is404 ? "Page Not Found" : "Internal Server Error",
    description: !is404 ? `
    <h1>${error.message}</h1>
    <pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>
    ` : ""
  };
  res.statusCode = error.statusCode || 500;
  res.statusMessage = error.statusMessage || "Internal Server Error";
  if (!is404) {
    console.error(error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest) {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(errorObject));
  }
  const errorTemplate = is404 ? error404 : errorDev ;
  const html = errorTemplate(errorObject);
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.end(html);
}

const _440e56 = () => Promise.resolve().then(function () { return index$1; });
const _5a9cd7 = () => Promise.resolve().then(function () { return article$1; });

  const middleware = [
    { route: '/api/index', handle: _440e56, lazy: true, promisify: true },
{ route: '/api/article', handle: _5a9cd7, lazy: true, promisify: true }
  ];

const app = createApp({
  debug: destr(true),
  onError: handleError
});
app.use(timingMiddleware);
app.use(middleware);
app.use(() => Promise.resolve().then(function () { return render; }).then((e) => e.renderMiddleware), { lazy: true });
app.stack;
const handle = useBase(baseURL(), app);
const localCall = createCall(handle);
const localFetch = createFetch(localCall, globalThis.fetch);
const $fetch = createFetch$1({ fetch: localFetch, Headers });
globalThis.$fetch = $fetch;

const server = new Server(handle);
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : `http://localhost:${_address.port}`
  });
});

const getAccessToken = async (reload) => {
  const accessToken = { token: "", error: false };
  if (config.ACCESS_TOKEN !== void 0) {
    accessToken.token = config.ACCESS_TOKEN;
  }
  if (reload === false && accessToken.token !== "") {
    return accessToken;
  }
  const body = new URLSearchParams();
  body.append("client_id", config.CLIENT_ID);
  body.append("redirect_uri", config.REDIRECT_URI);
  body.append("client_secret", config.CLIENT_SECRET);
  body.append("refresh_token", config.REFRESH_TOKEN);
  body.append("grant_type", "refresh_token");
  await axios.post("https://login.microsoftonline.com/common/oauth2/v2.0/token", body, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).then((response) => {
    accessToken.token = response.data.access_token;
  }).catch(() => {
    accessToken.error = true;
  });
  return accessToken;
};

const index = async (req, res) => {
  const result = {
    article: [],
    settingsUrl: ""
  };
  const page = Number(new URLSearchParams$1(req.url).get("page"));
  const accessToken = await getAccessToken(false);
  if (accessToken.error) {
    return result;
  }
  let articleCache = [];
  const path = config.ONEDRIVE_URI + "/root" + (config.ROOT_PATH + "/").replace(/\//g, ":/");
  await axios.get(path + "children?select=name,id,lastModifiedDateTime,@microsoft.graph.downloadUrl,folder", { headers: { Authorization: "bearer " + accessToken.token } }).then((response) => {
    articleCache = response.data.value;
    res.statusCode = 200;
  }).catch((error) => {
    res.statusCode = error.response.status;
  });
  if (res.statusCode !== 200) {
    return result;
  }
  let pageNum = 10;
  let desc = false;
  const settingItem = articleCache.findIndex((item) => item.name === "settings.json" || item.name === "Settings.json");
  if (settingItem !== -1) {
    result.settingsUrl = articleCache[settingItem]["@microsoft.graph.downloadUrl"];
    await axios.get(result.settingsUrl).then((response) => {
      articleCache.splice(settingItem, 1);
      if (response.data !== void 0) {
        if (response.data.pageNum !== void 0) {
          pageNum = response.data.pageNum;
        }
        if (response.data.desc !== void 0) {
          desc = response.data.desc;
        }
      }
    });
  }
  for (let i = 0; i < articleCache.length; i++) {
    if (articleCache[i].folder !== void 0) {
      articleCache[i].index = Number(articleCache[i].name.substring(0, articleCache[i].name.indexOf("-")));
    }
  }
  if (desc) {
    articleCache.sort((a, b) => {
      return b.index - a.index;
    });
  } else {
    articleCache.sort((a, b) => {
      return a.index - b.index;
    });
  }
  let jumpNum = pageNum * (page - 1);
  let articleNum = 0;
  for (const articleCacheElement of articleCache) {
    if (articleCacheElement.folder !== void 0) {
      if (jumpNum > 0) {
        jumpNum = jumpNum - 1;
        continue;
      }
      result.article.push({
        dirName: articleCacheElement.name,
        id: articleCacheElement.id,
        updateDate: articleCacheElement.lastModifiedDateTime
      });
      console.log(articleNum);
      articleNum = articleNum + 1;
      if (articleNum >= pageNum) {
        break;
      }
    }
  }
  return result;
};

const index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': index
});

const article = async (req, res) => {
  const result = {
    contentUrl: "",
    contentType: "",
    settings: {},
    files: [],
    password: false
  };
  const articleId = new URLSearchParams$1(req.url).get("id");
  const articlePassword = new URLSearchParams$1(req.url).get("password");
  const accessToken = await getAccessToken(false);
  if (accessToken.error) {
    return result;
  }
  let itemsCache = [];
  const path = config.ONEDRIVE_URI + "/items/" + articleId + "/children";
  await axios.get(path + "?select=name,@microsoft.graph.downloadUrl,file", { headers: { Authorization: "bearer " + accessToken.token } }).then((response) => {
    itemsCache = response.data.value;
    res.statusCode = 200;
  }).catch((error) => {
    res.statusCode = error.response.status;
  });
  if (res.statusCode !== 200) {
    return result;
  }
  const settingItem = itemsCache.findIndex((item) => item.name === "settings.json" || item.name === "Settings.json");
  let settings = { password: "" };
  if (settingItem !== -1) {
    await axios.get(itemsCache[settingItem]["@microsoft.graph.downloadUrl"]).then((response) => {
      itemsCache.splice(settingItem, 1);
      settings = response.data;
    }).catch((error) => {
      res.statusCode = error.response.status;
    });
    if (res.statusCode !== 200) {
      return result;
    }
  }
  if (settings["password"] === void 0 || settings["password"] === articlePassword) {
    result.settings = settings;
    result.settings["password"] = "";
  } else {
    result.password = true;
    return result;
  }
  const fileIndex = [
    "index.url",
    "redirect.url",
    "index.html",
    "index.md",
    "index.markdown",
    "index.txt"
  ];
  for (const fi of fileIndex) {
    const indexOfFile = itemsCache.findIndex((item) => item.name === fi);
    if (indexOfFile !== -1) {
      result.contentUrl = itemsCache[indexOfFile]["@microsoft.graph.downloadUrl"];
      if (fi === "redirect.url") {
        result.contentType = "redirect";
      } else {
        result.contentType = fi.split(".")[1];
      }
      itemsCache.splice(indexOfFile, 1);
      break;
    }
  }
  if (result.contentType === "html" || result.contentType === "md" || result.contentType === "markdown") {
    for (const ic of itemsCache) {
      if (ic["file"] !== void 0) {
        result.files.push({
          name: ic.name,
          url: ic["@microsoft.graph.downloadUrl"]
        });
      }
    }
  }
  return result;
};

const article$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': article
});

const STATIC_ASSETS_BASE = "/_nuxt/home/runner/blog/dist" + "/" + "1649849787";
const PAYLOAD_JS = "/payload.js";
const getClientManifest = cachedImport(() => import('/home/runner/blog/.nuxt/dist/server/client.manifest.mjs'));
const getSSRApp = cachedImport(() => import('/home/runner/blog/.nuxt/dist/server/server.mjs'));
const getSSRRenderer = cachedResult(async () => {
  const clientManifest = await getClientManifest();
  if (!clientManifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getSSRApp();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const { renderToString: renderToString2 } = await Promise.resolve().then(function () { return vue3; });
  return createRenderer(createSSRApp, { clientManifest, renderToString: renderToString2, publicPath: buildAssetsURL() }).renderToString;
});
const getSPARenderer = cachedResult(async () => {
  const clientManifest = await getClientManifest();
  return (ssrContext) => {
    ssrContext.nuxt = {
      serverRendered: false,
      config: publicConfig
    };
    let entryFiles = Object.values(clientManifest).filter((fileValue) => fileValue.isEntry);
    if ("all" in clientManifest && "initial" in clientManifest) {
      entryFiles = clientManifest.initial.map((file) => ({ file }));
    }
    return {
      html: '<div id="__nuxt"></div>',
      renderResourceHints: () => "",
      renderStyles: () => entryFiles.flatMap(({ css }) => css).filter((css) => css != null).map((file) => `<link rel="stylesheet" href="${buildAssetsURL(file)}">`).join(""),
      renderScripts: () => entryFiles.map(({ file }) => {
        const isMJS = !file.endsWith(".js");
        return `<script ${isMJS ? 'type="module"' : ""} src="${buildAssetsURL(file)}"><\/script>`;
      }).join("")
    };
  };
});
function renderToString$1(ssrContext) {
  const getRenderer = ssrContext.noSSR ? getSPARenderer : getSSRRenderer;
  return getRenderer().then((renderToString2) => renderToString2(ssrContext));
}
async function renderMiddleware(req, res) {
  let url = req.url;
  let isPayloadReq = false;
  if (url.startsWith(STATIC_ASSETS_BASE) && url.endsWith(PAYLOAD_JS)) {
    isPayloadReq = true;
    url = url.slice(STATIC_ASSETS_BASE.length, url.length - PAYLOAD_JS.length) || "/";
  }
  const ssrContext = {
    url,
    req,
    res,
    runtimeConfig: { private: privateConfig, public: publicConfig },
    noSSR: req.spa || req.headers["x-nuxt-no-ssr"],
    ...req.context || {}
  };
  const rendered = await renderToString$1(ssrContext);
  if (ssrContext.error) {
    throw ssrContext.error;
  }
  if (ssrContext.redirected || res.writableEnded) {
    return;
  }
  if (ssrContext.nuxt.hooks) {
    await ssrContext.nuxt.hooks.callHook("app:rendered");
  }
  const payload = ssrContext.payload || ssrContext.nuxt;
  let data;
  if (isPayloadReq) {
    data = renderPayload(payload, url);
    res.setHeader("Content-Type", "text/javascript;charset=UTF-8");
  } else {
    data = await renderHTML(payload, rendered, ssrContext);
    res.setHeader("Content-Type", "text/html;charset=UTF-8");
  }
  const error = ssrContext.nuxt && ssrContext.nuxt.error;
  res.statusCode = error ? error.statusCode : 200;
  res.end(data, "utf-8");
}
async function renderHTML(payload, rendered, ssrContext) {
  const state = `<script>window.__NUXT__=${devalue(payload)}<\/script>`;
  const html = rendered.html;
  if ("renderMeta" in ssrContext) {
    rendered.meta = await ssrContext.renderMeta();
  }
  const {
    htmlAttrs = "",
    bodyAttrs = "",
    headAttrs = "",
    headTags = "",
    bodyScriptsPrepend = "",
    bodyScripts = ""
  } = rendered.meta || {};
  return htmlTemplate({
    HTML_ATTRS: htmlAttrs,
    HEAD_ATTRS: headAttrs,
    HEAD: headTags + rendered.renderResourceHints() + rendered.renderStyles() + (ssrContext.styles || ""),
    BODY_ATTRS: bodyAttrs,
    APP: bodyScriptsPrepend + html + state + rendered.renderScripts() + bodyScripts
  });
}
function renderPayload(payload, url) {
  return `__NUXT_JSONP__("${url}", ${devalue(payload)})`;
}
function _interopDefault(e) {
  return e && typeof e === "object" && "default" in e ? e.default : e;
}
function cachedImport(importer) {
  return cachedResult(() => importer().then(_interopDefault));
}
function cachedResult(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}

const render = /*#__PURE__*/Object.freeze({
  __proto__: null,
  renderMiddleware: renderMiddleware
});

const renderToString = (...args) => {
  return renderToString$2(...args).then((result) => `<div id="__nuxt">${result}</div>`);
};

const vue3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  renderToString: renderToString
});
//# sourceMappingURL=index.mjs.map
