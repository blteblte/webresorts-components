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
    "revision": "a1c068379c8ab2bd396799370801acbe"
  },
  {
    "url": "build/wrsts-components/tuqrkueb.es5.js",
    "revision": "5773846d090040f71c5ce1f9a597b3c0"
  },
  {
    "url": "build/wrsts-components/tuqrkueb.js",
    "revision": "1408e0b684b42b3a406a882a346d608d"
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
    "revision": "a8e265325e0f7ebf0861157cc8601853"
  },
  {
    "url": "host.config.json",
    "revision": "924078fa54fa49ec609b6c2f96911900"
  },
  {
    "url": "index.html",
    "revision": "eedf6f36215a099ce93b36464a8e78cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
