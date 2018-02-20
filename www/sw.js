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
    "revision": "b8442f5d96aecd57140d23da69c91465"
  },
  {
    "url": "build/wrsts-components/9bzz7bss.es5.js",
    "revision": "319c7201e8942c1579ba58bdc84e2bf4"
  },
  {
    "url": "build/wrsts-components/9bzz7bss.js",
    "revision": "584ef89c7761b78437863c3a89258505"
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
    "revision": "d40bb070650c8af6d3638e720af7cac9"
  },
  {
    "url": "index.html",
    "revision": "9400b853de4e7ac7ca445df87c6830ca"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
