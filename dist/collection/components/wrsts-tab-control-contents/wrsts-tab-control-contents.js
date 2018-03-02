export class WrstsTabControlContents {
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
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control-contents"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "elementRef": { "elementRef": true }, "getShadowRoot": { "method": true }, "getSlot": { "method": true }, "getSlotElementsByTagName": { "method": true }, "getSlotNodes": { "method": true }, "shadowQuerySelector": { "method": true }, "shadowQuerySelectorAll": { "method": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-contents:**/"; }
}
