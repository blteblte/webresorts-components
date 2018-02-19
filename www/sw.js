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
    "revision": "6c5c9dbe147baff09ad934b3187394d7"
  },
  {
    "url": "assets/img/checkbox-indeterminate.svg",
    "revision": "d14737f2f8e9b5032801f1e3bf682892"
  },
  {
    "url": "assets/img/checkbox-unchecked.svg",
    "revision": "9da6b694a8530d5150586e4452c8e5b2"
  },
  {
    "url": "build/wrsts-components.js",
    "revision": "379a80454a7aeff1612f20421f5b689c"
  },
  {
    "url": "build/wrsts-components/cqyizwao.es5.js",
    "revision": "8c63a3e67a0a73227ef4a8bf8d86ca0c"
  },
  {
    "url": "build/wrsts-components/cqyizwao.js",
    "revision": "38a9ef2b5c2c47f309d67cf9144f1e5d"
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
    "revision": "6aaaeef2018de1296b07a1d34368fe9b"
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
