import axios from 'axios';
import { N as NUXT_CONFIG } from './nitro/server.mjs';
import { g as getAccessToken } from './getAccessToken.mjs';
import { URLSearchParams } from 'url';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'h3';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'ufo';
import 'defu';

const article = async (req, res) => {
  const result = {
    contentUrl: "",
    contentType: "",
    settings: {},
    files: [],
    password: false
  };
  const articleId = new URLSearchParams(req.url).get("id");
  const articlePassword = new URLSearchParams(req.url).get("password");
  const accessToken = await getAccessToken(false);
  if (accessToken.error) {
    return result;
  }
  let itemsCache = [];
  const path = NUXT_CONFIG.ONEDRIVE_URI + "/items/" + articleId + "/children";
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

export { article as default };
