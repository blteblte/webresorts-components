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
    "url": "assets/img/checkbox-indeterminate.svg",
    "revision": "e2c9dc38dd21b1ae4e70a4c06e76a5a0"
  },
  {
    "url": "assets/img/checkbox-unchecked.svg",
    "revision": "c699f91234a66ec78d6009d1454b1f7a"
  },
  {
    "url": "build/wrsts-components.js",
    "revision": "93ee528b163c3b35bbc1dbe01f5f2700"
  },
  {
    "url": "build/wrsts-components/sji9ule8.es5.js",
    "revision": "f0477bd6ef30f962c590194e59766426"
  },
  {
    "url": "build/wrsts-components/sji9ule8.js",
    "revision": "da122dc85322e5c282f4d60e6280625e"
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
    "revision": "1a4bd80b2c09ca8e313cf4427a831b79"
  },
  {
    "url": "index.html",
    "revision": "8d51c770c09bcf40b4e4df31f3d2f7bc"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
