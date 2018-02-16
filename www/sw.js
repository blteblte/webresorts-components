/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */


importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js");









/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/img/checkbox-checked.svg",
    "revision": "fa68fd03723003bb9be800a002960474"
  },
  {
    "url": "assets/img/checkbox-unchecked.svg",
    "revision": "c699f91234a66ec78d6009d1454b1f7a"
  },
  {
    "url": "build/wrsts-components.js",
    "revision": "182a24b547ed03ba5faa1d919a764264"
  },
  {
    "url": "build/wrsts-components/ujlja1ug.es5.js",
    "revision": "0c96328d4472a4099b83fed852705a13"
  },
  {
    "url": "build/wrsts-components/ujlja1ug.js",
    "revision": "636be664be6df6b9497825f3ed0c66ed"
  },
  {
    "url": "build/wrsts-components/wrsts-components.glghvxpw.js",
    "revision": "272f5f1b5dce08d87c494d1ba7ff3b16"
  },
  {
    "url": "build/wrsts-components/wrsts-components.pw14yfvz.js",
    "revision": "b66c15f7d848c2abfa7087e576f9bdca"
  },
  {
    "url": "build/wrsts-components/wrsts-components.registry.json",
    "revision": "177d6b1c8130f11310acbc7d06ae9dd6"
  },
  {
    "url": "index.html",
    "revision": "eb7391aea2a9074d43e32b0cb5f5098a"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
