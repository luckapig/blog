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

const index = async (req, res) => {
  const result = {
    article: [],
    settingsUrl: ""
  };
  const page = Number(new URLSearchParams(req.url).get("page"));
  const accessToken = await getAccessToken(false);
  if (accessToken.error) {
    return result;
  }
  let articleCache = [];
  const path = NUXT_CONFIG.ONEDRIVE_URI + "/root" + (NUXT_CONFIG.ROOT_PATH + "/").replace(/\//g, ":/");
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

export { index as default };
