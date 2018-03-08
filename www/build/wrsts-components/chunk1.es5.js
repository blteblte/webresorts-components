/*! Built with http://stenciljs.com */
WrstsComponents.loadBundle("./chunk1.js", ["exports"], function (e) { window.WrstsComponents.h, e.WrstsBaseShadow = /** @class */ (function () {
    function class_1() {
    }
    class_1.prototype.getShadowRoot = function () { return this.elementRef.shadowRoot || this.elementRef; };
    class_1.prototype.getSlot = function () { return this.getShadowRoot().querySelector("slot") || this.getShadowRoot(); };
    class_1.prototype.getSlotNodes = function (e) { var t = e ? "slot[name=\"" + e + "\"]" : "slot"; var o; var s = this.getShadowRoot().querySelector(t); return o = s ? s.assignedNodes() : this.getShadowRoot().querySelectorAll("*"), Array.prototype.slice.call(o); };
    class_1.prototype.shadowQuerySelector = function (e) { return this.getShadowRoot().querySelector(e); };
    class_1.prototype.shadowQuerySelectorAll = function (e) { return Array.prototype.slice.call(this.getShadowRoot().querySelectorAll(e)); };
    class_1.prototype.getSlotElementsByTagName = function (e) { return this.getSlotNodes().filter(function (t) { return t.tagName === e.toUpperCase(); }); };
    Object.defineProperty(class_1, "is", {
        get: function () { return "wrsts-base-shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "properties", {
        get: function () { return { getShadowRoot: { method: !0 }, getSlot: { method: !0 }, getSlotElementsByTagName: { method: !0 }, getSlotNodes: { method: !0 }, shadowQuerySelector: { method: !0 }, shadowQuerySelectorAll: { method: !0 } }; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}()); });
