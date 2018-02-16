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
    "url": "build/webresorts-components.js",
    "revision": "aadf2086ff6012e4714e21462a4ac0fd"
  },
  {
    "url": "build/webresorts-components/g9j1buws.es5.js",
    "revision": "1c8be82ae48fce9d536beb8163c5f430"
  },
  {
    "url": "build/webresorts-components/g9j1buws.js",
    "revision": "91b91bdcd82aab002503d8723cbe47df"
  },
  {
    "url": "build/webresorts-components/webresorts-components.bj6l2fp3.js",
    "revision": "4d868efc8e4ded00065b8fb6aaa08940"
  },
  {
    "url": "build/webresorts-components/webresorts-components.oixmmxvp.js",
    "revision": "a0388d9886a9f31579e29c837e50bc8f"
  },
  {
    "url": "build/webresorts-components/webresorts-components.registry.json",
    "revision": "2fba17e60b6d8c3dda5f719a704b1a90"
  },
  {
    "url": "index.html",
    "revision": "99f255028a13f98d443366ab630d1c84"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
