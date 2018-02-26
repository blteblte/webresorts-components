/*! Built with http://stenciljs.com */
WrstsComponents.loadBundle("./chunk1.js", ["exports"], function (e) { var t; window.WrstsComponents.h, function (e) { e[e.Default = 0] = "Default", e[e.Object = 1] = "Object", e[e.Array = 2] = "Array"; }(t || (t = {}));
    var r = /** @class */ (function () {
        function r() {
        }
        return r;
    }());  function a(e) { return [].filter.call(e.attributes, function (e) { return /^data-/.test(e.name); }).map(function (e) { return { name: e.name.substr(5).replace(/-(.)/g, function (e, t) { return t.toUpperCase(); }), value: e.value }; }); } r.ResolveKey = function (e, t) { return e.name || e.id || t; }, r.ResolveCheckboxValue = function (e) { return e.checked; }, r.ResolveTextareaValue = function (e) { return e.value; }, r.ResolveSelectValue = function (e) { return e.selectedValue; }, r.ResolveDataAttributes = (function (e, r) { return r === t.Object ? function (e) { var t = {}; return a(e).forEach(function (e) { t[e.name] = e.value; }), t; }(e) : a(e); }), e.ComponentSerializer = /** @class */ (function () {
    function class_1() {
    }
    class_1.SerializeData = function (e, a, n) { var u = n.valueResolver; var l = n.keyResolver, s = n.dataResolver; switch ((n.keyResolver || (l = r.ResolveKey), n.dataResolver || (s = r.ResolveDataAttributes), a)) {
        case t.Object: return function (e, t, r, a, n) { return e.reduce(function (e, s, o) { return e[r(s, o)] = (u = a(s), l = n(s, t), { value: u, data: l }), e; }, {}); var u, l; }(e, a, l, u, s);
        case t.Array: return function (e, t, r, a, n) { return e.reduce(function (e, o, c) { return e[c] = (u = r(o, c), l = a(o), s = n(o, t), { name: u, value: l, data: s }), e; }, []); var u, l, s; }(e, a, l, u, s);
        case t.Default: return function (e, t, r) { return e.reduce(function (e, a, n) { return e[t(a, n)] = r(a), e; }, {}); }(e, l, u);
    } };
    class_1.Serialize = function (e, t, r) { return this.SerializeData([e], t, r); };
    return class_1;
}()), e.ComponentSerializerResolver = r; });
