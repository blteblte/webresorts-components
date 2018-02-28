/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, docScripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCorePolyfilled, hydratedCssClass, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    if (discoverPublicPath) {
        x = docScripts[docScripts.length - 1];
        if (x && x.src) {
            y = x.src.split('/').slice(0, -1);
            publicPath = (y.join('/')) + (y.length ? '/' : '') + urlNamespace + '/';
        }
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + (usePolyfills(win, win.location, x, 'import("")') ? appCorePolyfilled : appCore);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', urlNamespace);
    doc.head.appendChild(x);
}
function usePolyfills(win, location, scriptElm, dynamicImportTest) {
    // fyi, dev mode has verbose if/return statements
    // but it minifies to a nice 'lil one-liner ;)
    if (location.search.indexOf('core=es5') > -1) {
        // force es5 polyfill w/ ?core=es5 querystring
        return true;
    }
    if (location.protocol === 'file:') {
        // file protocol cannot use dynamic module imports
        return true;
    }
    if (!win.customElements) {
        // does not have customElement support
        return true;
    }
    if (!win.fetch) {
        // does not have fetch support
        return true;
    }
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // does not have CSS variables support
        return true;
    }
    if (!('noModule' in scriptElm)) {
        // does not have static ES module support
        return true;
    }
    return doesNotSupportsDynamicImports(dynamicImportTest);
}
function doesNotSupportsDynamicImports(dynamicImportTest) {
    try {
        new Function(dynamicImportTest);
        return false;
    }
    catch (e) { }
    return true;
}


init(win, doc, doc.scripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "WrstsComponents","wrsts-components","/build/wrsts-components/",true,"wrsts-components.core.js","es5-build-disabled.js","hydrated",[["wrsts-button","wrsts-button",1,[["formId",1,"form-id",2]]],["wrsts-checkbox","wrsts-checkbox",1,[["bind",6],["check",6],["checked",2,1,3],["disabled",1,1,3],["getData",6],["getGroupBoxesBindings",6],["getNativeElement",6],["group",1,1,2],["groupToggler",1,"group-toggler",2],["hidden",1,1,3],["id",1,1,2],["indeterminate",1,1,3],["indeterminateState",5],["name",1,1,2],["setIndeterminate",6],["toJson",6],["uncheck",6],["value",1,1,2],["wrstsCheckBox",7]]],["wrsts-input","wrsts-input",1,[["autocomplete",1],["autofocus",1,1,3],["disabled",1,1,3],["formaction",1,1,2],["formenctype",1,1,2],["formmethod",1,1,2],["formnovalidate",1,1,3],["formtarget",1,1,2],["height",1,1,4],["id",1,1,2],["list",1,1,2],["max",1,1,4],["maxlength",1,1,4],["min",1,1,4],["minlength",1,1,4],["multiple",1,1,3],["name",1,1,2],["patern",1,1,2],["placeholder",1,1,2],["readonly",1,1,3],["required",1,1,3],["size",1,1,4],["step",1,1,4],["title",1,1,2],["toJson",6],["type",1,1,2],["value",1,1,2],["width",1,1,4],["wrstsInput",7]]],["wrsts-json-form","wrsts-json-form",0,[["action",1,1,2],["ajax",1,1,3],["bind",6],["method",1,1,2],["submit",6],["target",1,1,2],["toJson",6],["wrstsJsonForm",7]]],["wrsts-select","wrsts-select",1,[["bind",6],["focused",1,1,3],["id",1,1,2],["name",1,1,2],["placeholder",1,1,2],["search",1,1,3],["selectIndex",6],["selectValue",6],["selectedIndex",2,"selected-index",2],["selectedValue",2,"selected-value",2],["showDropdown",5],["toJson",6],["wrstsSelect",7],["wrstsSelectOptions",5]],0,[["document:click","onDocumentClick"],["document:keydown.up","handleUp"],["document:keydown.down","handleDown"],["document:keydown.enter","handleEnter"],["document:keydown.escape","handleEsc"]]],["wrsts-select-option","wrsts-select",1,[["focus",6],["focused",2,1,3],["getSlot",6],["hidden",2,1,3],["hide",6],["index",1,1,2],["select",6],["selected",2,1,3],["unfocus",6],["unhide",6],["unselect",6],["value",1,1,2],["wrstsSelectOption",7]]],["wrsts-tab-control","wrsts-tab-control",1,[["bind",6],["setTab",6],["wrstsTabControl",7]],0,[["window:hashchange","navigateByHash"]]],["wrsts-tab-control-content","wrsts-tab-control",1,[["active",2,1,3],["setActive",6],["unsetActive",6],["wrstsTabControlContent",7]]],["wrsts-tab-control-contents","wrsts-tab-control",1],["wrsts-tab-control-tab","wrsts-tab-control",1,[["active",2,1,3],["historyTitle",1,"history-title",2],["route",1,1,2],["setActive",6],["unsetActive",6],["wrstsTabControlTab",7]]],["wrsts-tab-control-tabs","wrsts-tab-control",1],["wrsts-tinymce","wrsts-tinymce",1,[["baseUrl",1,"base-url",2],["getEditor",6],["getNativeElement",6],["getTinyMce",6],["height",1,1,2],["id",1,1,2],["name",1,1,2],["toJson",6],["value",2,1,2],["width",1,1,2],["wrstsTinymce",7]]]]);