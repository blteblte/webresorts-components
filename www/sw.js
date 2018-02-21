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

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/img/checkbox-checked.svg",
    "revision": "c9d2ad4c31a5dc12f3b6ac8ce27b59c1"
  },
  {
    "url": "assets/img/checkbox-indeterminate.svg",
    "revision": "40274e52863514e606652513159f8ff5"
  },
  {
    "url": "assets/img/checkbox-unchecked.svg",
    "revision": "92127e053967651c313959dda0bea437"
  },
  {
    "url": "build/wrsts-components.js",
    "revision": "2c1c5edd9940b63e2641d39bab30a049"
  },
  {
    "url": "build/wrsts-components/lbrg4f4i.es5.js",
    "revision": "da76c13b3b1e70b8d329ee8385dd63d4"
  },
  {
    "url": "build/wrsts-components/lbrg4f4i.js",
    "revision": "355d111d514f4bf1bf742ea07966b8a0"
  },
  {
    "url": "build/wrsts-components/wrsts-components.7m4ivvt1.js",
    "revision": "c7a7af2db4257ab7858ee83924b5a2d7"
  },
  {
    "url": "build/wrsts-components/wrsts-components.doomxah3.js",
    "revision": "cb9fc93b275356937972b8b41eabd537"
  },
  {
    "url": "build/wrsts-components/wrsts-components.registry.json",
    "revision": "85b2c5522a32573991c7d059a9de0d8c"
  },
  {
    "url": "host.config.json",
    "revision": "924078fa54fa49ec609b6c2f96911900"
  },
  {
    "url": "index.html",
    "revision": "9789548b7edd0bc9b9073d0dc8224f94"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
