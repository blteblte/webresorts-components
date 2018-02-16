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
    "revision": "46bcd703557a4cd6b2905db8b9583c73"
  },
  {
    "url": "build/webresorts-components/vxrfygnd.es5.js",
    "revision": "f1f0e05731d82c76a31e9880a506edf6"
  },
  {
    "url": "build/webresorts-components/vxrfygnd.js",
    "revision": "ae83a0d3bd664c88146943d38d07cbd8"
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
    "revision": "991230f267cbe0943d21ca57164b7143"
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
