import { N as NUXT_CONFIG } from './nitro/server.mjs';
import axios from 'axios';

const getAccessToken = async (reload) => {
  const accessToken = { token: "", error: false };
  if (NUXT_CONFIG.ACCESS_TOKEN !== void 0) {
    accessToken.token = NUXT_CONFIG.ACCESS_TOKEN;
  }
  if (reload === false && accessToken.token !== "") {
    return accessToken;
  }
  const body = new URLSearchParams();
  body.append("client_id", NUXT_CONFIG.CLIENT_ID);
  body.append("redirect_uri", NUXT_CONFIG.REDIRECT_URI);
  body.append("client_secret", NUXT_CONFIG.CLIENT_SECRET);
  body.append("refresh_token", NUXT_CONFIG.REFRESH_TOKEN);
  body.append("grant_type", "refresh_token");
  await axios.post("https://login.microsoftonline.com/common/oauth2/v2.0/token", body, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).then((response) => {
    accessToken.token = response.data.access_token;
  }).catch(() => {
    accessToken.error = true;
  });
  return accessToken;
};

export { getAccessToken as g };
