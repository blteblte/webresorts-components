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
    "revision": "2dab0a2e98ab785eb76264f28ba2b7c9"
  },
  {
    "url": "build/wrsts-components/plgdv4be.es5.js",
    "revision": "1da736555b91449003f7d97879a6c2d7"
  },
  {
    "url": "build/wrsts-components/plgdv4be.js",
    "revision": "8ee3e139c00ef69095fff6a753c7cd19"
  },
  {
    "url": "build/wrsts-components/wrsts-components.7oklmzar.js",
    "revision": "4ac99f398722dabdff1d7d5b41a149a5"
  },
  {
    "url": "build/wrsts-components/wrsts-components.registry.json",
    "revision": "07e5a9334c3097a682d75416130aae60"
  },
  {
    "url": "build/wrsts-components/wrsts-components.x3pioboi.js",
    "revision": "5ffaf482edda4c73ecea54235180d56b"
  },
  {
    "url": "index.html",
    "revision": "8ba26efaabc168785bda71d728b105d2"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
