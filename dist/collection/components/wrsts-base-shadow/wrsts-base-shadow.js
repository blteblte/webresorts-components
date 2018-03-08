/* extending does not seem to work in stencil */
export class WrstsBaseShadow {
    getShadowRoot() {
        return this.elementRef.shadowRoot || this.elementRef;
    }
    getSlot() {
        return this.getShadowRoot().querySelector('slot') || this.getShadowRoot();
    }
    getSlotNodes(name) {
        const slotSelector = name ? `slot[name="${name}"]` : 'slot';
        let assignedNodes;
        const slot = this.getShadowRoot().querySelector(slotSelector);
        if (slot) {
            assignedNodes = slot.assignedNodes();
        }
        else {
            assignedNodes = this.getShadowRoot().querySelectorAll('*');
        }
        return Array.prototype.slice.call(assignedNodes);
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
    static get is() { return "wrsts-base-shadow"; }
    static get properties() { return { "getShadowRoot": { "method": true }, "getSlot": { "method": true }, "getSlotElementsByTagName": { "method": true }, "getSlotNodes": { "method": true }, "shadowQuerySelector": { "method": true }, "shadowQuerySelectorAll": { "method": true } }; }
}
