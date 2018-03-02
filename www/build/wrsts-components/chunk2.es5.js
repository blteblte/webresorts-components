/*! Built with http://stenciljs.com */
WrstsComponents.loadBundle("./chunk2.js", ["exports"], function (o) { window.WrstsComponents.h, o.BaseShadowComponent = /** @class */ (function () {
    function class_1() {
    }
    Object.defineProperty(class_1.prototype, "ShadowRoot", {
        get: function () { return this.elementRef.shadowRoot; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "Slot", {
        get: function () { return this.ShadowRoot.querySelector("slot"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "SlotNodes", {
        get: function () { return this.getSlotNodes(); },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.getSlotNodes = function (o) { var e = o ? "slot[name=\"" + o + "\"]" : "slot"; return Array.prototype.slice.call(this.ShadowRoot.querySelector(e).assignedNodes()); };
    class_1.prototype.shadowQuerySelector = function (o) { return this.ShadowRoot.querySelector(o); };
    class_1.prototype.shadowQuerySelectorAll = function (o) { return Array.prototype.slice.call(this.ShadowRoot.querySelectorAll(o)); };
    class_1.prototype.getSlotElementsByTagName = function (o) { return this.SlotNodes.forEach(function (o) { return console.log(o); }), this.SlotNodes.filter(function (e) { return e.tagName === o; }); };
    return class_1;
}()); });
