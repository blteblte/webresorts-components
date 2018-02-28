/*! Built with http://stenciljs.com */
const { h } = window.WrstsComponents;

class WrstsTabControl {
    componentDidLoad() {
        this.bind();
        this.navigateByHash();
    }
    bind() {
        this.tabs = Array.prototype.slice.call(this.wrstsTabControl.children[0].children);
        this.contents = Array.prototype.slice.call(this.wrstsTabControl.children[1].children);
        // todo: test rebinding and what happens with event listeners
        this.tabs.forEach((tab, index) => {
            tab.addEventListener('clicked', () => {
                this.setTab(index);
            });
        });
    }
    navigateByHash() {
        this.locationHash = window.location.hash;
        this.tabUrl = this.locationHash.replace('#/', '');
        if (this.tabUrl !== undefined && this.tabUrl !== null) {
            var urlIndex = this.tabs.findIndex(x => x.route === this.tabUrl);
            if (urlIndex > -1) {
                this.setTab(urlIndex);
            }
        }
    }
    setTab(index) {
        this.tabs.forEach((t, tabIndex) => {
            if (index !== tabIndex) {
                t.unsetActive();
            }
            else {
                t.setActive();
            }
        });
        this.contents.forEach((c, contentIndex) => {
            if (index !== contentIndex) {
                c.unsetActive();
            }
            else {
                c.setActive();
            }
        });
        // todo: this is not really what we want
        this.change.emit(index);
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control"; }
    static get properties() { return { "bind": { "method": true }, "setTab": { "method": true }, "wrstsTabControl": { "elementRef": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "wrsts-tab-control {\n  display: block;\n}"; }
}

class WrstsTabControlContent {
    setActive() {
        if (!this.active) {
            this.wrstsTabControlContent.setAttribute('active', 'true');
        }
    }
    unsetActive() {
        if (this.active) {
            this.wrstsTabControlContent.removeAttribute('active');
        }
    }
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "wrsts-tab-control-content"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "mutable": true }, "setActive": { "method": true }, "unsetActive": { "method": true }, "wrstsTabControlContent": { "elementRef": true } }; }
    static get style() { return "/* form elements */\n/* tabs */\n/* button */\n\@-webkit-keyframes wrsts-tab-control-content-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.99, 0.99);\n            transform: scale(0.99, 0.99);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n\@keyframes wrsts-tab-control-content-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.99, 0.99);\n            transform: scale(0.99, 0.99);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n\nwrsts-tab-control-content {\n  display: none;\n  padding: 10px 8px;\n  background-color: #ffffff;\n  color: #595959;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\nwrsts-tab-control-content[active] {\n  display: block;\n}\n\nwrsts-tab-control-content > div {\n  -webkit-animation: wrsts-tab-control-content-in .2s ease-in-out;\n          animation: wrsts-tab-control-content-in .2s ease-in-out;\n}"; }
}

class WrstsTabControlContents {
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control-contents"; }
    static get style() { return "wrsts-tab-control-contents {\n  display: block;\n}"; }
}

class WrstsTabControlTab {
    setActive() {
        if (!this.active) {
            this.wrstsTabControlTab.setAttribute('active', 'true');
            if (this.route !== undefined && this.route !== null) {
                window.history.pushState(null, this.historyTitle, `#/${this.route}`);
            }
        }
    }
    unsetActive() {
        if (this.active) {
            this.wrstsTabControlTab.removeAttribute('active');
        }
    }
    render() {
        return (h("label", { class: this.active ? 'active' : '', onClick: (e) => this.clicked.emit(e) },
            h("slot", null)));
    }
    static get is() { return "wrsts-tab-control-tab"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "mutable": true }, "historyTitle": { "type": String, "attr": "history-title" }, "route": { "type": String, "attr": "route" }, "setActive": { "method": true }, "unsetActive": { "method": true }, "wrstsTabControlTab": { "elementRef": true } }; }
    static get events() { return [{ "name": "clicked", "method": "clicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/* form elements */\n/* tabs */\n/* button */\nwrsts-tab-control-tab {\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\nwrsts-tab-control-tab label {\n  display: inline-block;\n  background-color: #f3f3f3;\n  color: #595959;\n  padding: 10px 8px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color .2s ease-in-out;\n  box-shadow: 0 -0.5px 2px rgba(0, 0, 0, 0.2);\n}\n\nwrsts-tab-control-tab label:hover {\n  background-color: #e6e6e6;\n}\n\nwrsts-tab-control-tab[active] label {\n  background-color: #ffffff;\n}"; }
}

class WrstsTabControlTabs {
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control-tabs"; }
    static get style() { return "wrsts-tab-control-tabs {\n  display: block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}"; }
}

export { WrstsTabControl, WrstsTabControlContent, WrstsTabControlContents, WrstsTabControlTab, WrstsTabControlTabs };
