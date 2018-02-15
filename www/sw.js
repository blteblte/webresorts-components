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
    "url": "build/webresorts-components.js",
    "revision": "15ebd0624dc2bd71c48cee186c34fc9c"
  },
  {
    "url": "build/webresorts-components/fh9l89js.es5.js",
    "revision": "f38e6c4a9e906ee958dc604b038bc932"
  },
  {
    "url": "build/webresorts-components/fh9l89js.js",
    "revision": "47d0c0629dfde3ebaf7f9a1159eabf76"
  },
  {
    "url": "build/webresorts-components/fh9l89js.sc.es5.js",
    "revision": "f5fad4d5d7401aa1b8557afbc91ca0a2"
  },
  {
    "url": "build/webresorts-components/fh9l89js.sc.js",
    "revision": "78815080ba9bc71079d248a08ba546e8"
  },
  {
    "url": "build/webresorts-components/webresorts-components.fiyj2mbs.js",
    "revision": "cb0ffff652530c85019a8106f36a00a2"
  },
  {
    "url": "build/webresorts-components/webresorts-components.registry.json",
    "revision": "a2cfcc43a14291ac0c5267cd1340cb6c"
  },
  {
    "url": "build/webresorts-components/webresorts-components.zejpniqj.js",
    "revision": "cb314747885b90f5bba62a38ec99ca00"
  },
  {
    "url": "index.html",
    "revision": "863bff6dbb97c7d2b81e43f6ab32cd1c"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
