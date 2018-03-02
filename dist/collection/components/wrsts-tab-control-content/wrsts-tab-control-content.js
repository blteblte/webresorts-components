export class WrstsTabControlContent {
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
    setActive() {
        if (!this.active) {
            this.active = true;
        }
    }
    unsetActive() {
        if (this.active) {
            this.active = false;
        }
    }
    render() {
        return (h("div", { class: this.active ? 'active' : '' },
            h("slot", null)));
    }
    static get is() { return "wrsts-tab-control-content"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "mutable": true }, "elementRef": { "elementRef": true }, "getShadowRoot": { "method": true }, "getSlot": { "method": true }, "getSlotElementsByTagName": { "method": true }, "getSlotNodes": { "method": true }, "setActive": { "method": true }, "shadowQuerySelector": { "method": true }, "shadowQuerySelectorAll": { "method": true }, "unsetActive": { "method": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-content:**/"; }
}
