export class WrstsTabControl {
    getShadowRoot() {
        return this.elementRef.shadowRoot;
    }
    getSlot() {
        return this.getShadowRoot().querySelector('slot');
    }
    getSlotNodes(name) {
        const slotSelector = name ? `slot[name="${name}"]` : 'slot';
        return Array.prototype.slice.call(this.getShadowRoot().querySelector(slotSelector).assignedNodes());
    }
    shadowQuerySelector(query) {
        return this.getShadowRoot().querySelector(query);
    }
    shadowQuerySelectorAll(query) {
        return Array.prototype.slice.call(this.getShadowRoot().querySelectorAll(query));
    }
    getSlotElementsByTagName(tagName) {
        return this.getSlotNodes().filter(o => o.tagName === tagName.toUpperCase());
    }
    componentDidLoad() {
        this.bind();
        this.navigateByHash();
    }
    bind() {
        this.tabs = [];
        this.contents = [];
        const controlTabs = this.getSlotElementsByTagName('wrsts-tab-control-tabs');
        if (controlTabs.length) {
            this.tabs = controlTabs[0].getSlotElementsByTagName('wrsts-tab-control-tab');
        }
        const controlContents = this.getSlotElementsByTagName('wrsts-tab-control-contents');
        if (controlContents.length) {
            this.contents = controlContents[0].getSlotElementsByTagName('wrsts-tab-control-content');
        }
        // todo: test rebinding and what happens with event listeners
        if (this.tabs) {
            this.tabs.forEach((tab, index) => {
                tab.addEventListener('clicked', () => {
                    this.setTab(index);
                });
            });
        }
    }
    navigateByHash() {
        this.locationHash = window.location.hash;
        this.tabUrl = this.locationHash.replace('#/', '');
        if (this.tabUrl !== undefined && this.tabUrl !== null) {
            /* does not work on IE11 !!??!! */
            //var urlIndex = this.tabs.findIndex(x => x.route === this.tabUrl)
            /* workararound: */
            let urlIndex = 0;
            this.tabs.forEach((x, i) => {
                if (x.route === this.tabUrl)
                    urlIndex = i;
            });
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
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "bind": { "method": true }, "elementRef": { "elementRef": true }, "getShadowRoot": { "method": true }, "getSlot": { "method": true }, "getSlotElementsByTagName": { "method": true }, "getSlotNodes": { "method": true }, "setTab": { "method": true }, "shadowQuerySelector": { "method": true }, "shadowQuerySelectorAll": { "method": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-tab-control:**/"; }
}
