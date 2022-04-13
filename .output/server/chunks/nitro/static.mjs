import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/onedrive.png": {
    "type": "image/png",
    "etag": "\"3d12-UPL7MpTVK1TOZls9QzBcqR4jf+w\"",
    "mtime": "2022-04-13T02:48:59.329Z",
    "path": "../public/onedrive.png"
  },
  "/_nuxt/_id_-e6161300.mjs": {
    "type": "application/javascript",
    "etag": "\"1031-tCD0DuWzZI3hGmjRyRhd2smS7bo\"",
    "mtime": "2022-04-13T02:48:59.357Z",
    "path": "../public/_nuxt/_id_-e6161300.mjs"
  },
  "/_nuxt/bootstrap-b9dab7bb.mjs": {
    "type": "application/javascript",
    "etag": "\"27e50-pPCEE05zTTAXwXJQApYQivbbQwg\"",
    "mtime": "2022-04-13T02:48:59.353Z",
    "path": "../public/_nuxt/bootstrap-b9dab7bb.mjs"
  },
  "/_nuxt/bootstrap.9470bcb7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b3e-LcIqWzg2tbFdFVQUOqoDrJTU3xM\"",
    "mtime": "2022-04-13T02:48:59.353Z",
    "path": "../public/_nuxt/bootstrap.9470bcb7.css"
  },
  "/_nuxt/entry-bde73081.mjs": {
    "type": "application/javascript",
    "etag": "\"65-3/MDi1TDNE2PABSw/5m6E5lucYY\"",
    "mtime": "2022-04-13T02:48:59.349Z",
    "path": "../public/_nuxt/entry-bde73081.mjs"
  },
  "/_nuxt/home-6026886b.mjs": {
    "type": "application/javascript",
    "etag": "\"c34-Car6ECNVuDiZ0E0qt5yYpVhdmoY\"",
    "mtime": "2022-04-13T02:48:59.349Z",
    "path": "../public/_nuxt/home-6026886b.mjs"
  },
  "/_nuxt/home.0a3938a1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3b63-pyLAAJVkwHfDasaQNs/DyDxiFoM\"",
    "mtime": "2022-04-13T02:48:59.345Z",
    "path": "../public/_nuxt/home.0a3938a1.css"
  },
  "/_nuxt/index-982ea3c4.mjs": {
    "type": "application/javascript",
    "etag": "\"4d-VRLoOLM3wr//0q6feWs9b8YZAjw\"",
    "mtime": "2022-04-13T02:48:59.345Z",
    "path": "../public/_nuxt/index-982ea3c4.mjs"
  },
  "/_nuxt/index-c09ba485.mjs": {
    "type": "application/javascript",
    "etag": "\"d58-d6Kxt9A4mbh6mdwYr6lWXgX3lQw\"",
    "mtime": "2022-04-13T02:48:59.341Z",
    "path": "../public/_nuxt/index-c09ba485.mjs"
  },
  "/_nuxt/loading-8d644460.mjs": {
    "type": "application/javascript",
    "etag": "\"234-vRZk0dORvLthbTJrRmYS4xjGfh4\"",
    "mtime": "2022-04-13T02:48:59.337Z",
    "path": "../public/_nuxt/loading-8d644460.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"6cb-01fiHmQ7+SpDWckQ7qPyWyGMv9E\"",
    "mtime": "2022-04-13T02:48:59.337Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/onedrive.74f43d3f.png": {
    "type": "image/png",
    "etag": "\"6384-BcG/qZCtg+qNHmyQdK4D5mKMQEM\"",
    "mtime": "2022-04-13T02:48:59.333Z",
    "path": "../public/_nuxt/onedrive.74f43d3f.png"
  },
  "/_nuxt/states-73e9eaab.mjs": {
    "type": "application/javascript",
    "etag": "\"154-Etoj4devniDI8VQP3IOwJLqZYpM\"",
    "mtime": "2022-04-13T02:48:59.333Z",
    "path": "../public/_nuxt/states-73e9eaab.mjs"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/home/runner/blog/dist" + "/" + "1649818131";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
