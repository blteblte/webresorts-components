export class WrstsTabControlTab {
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
            if (this.route !== undefined && this.route !== null) {
                window.location.href = `#/${this.route}`;
            }
        }
    }
    unsetActive() {
        if (this.active) {
            this.active = false;
        }
    }
    render() {
        return (h("label", { class: this.active ? 'active' : '', onClick: (e) => this.clicked.emit(e) },
            h("slot", null)));
    }
    static get is() { return "wrsts-tab-control-tab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "mutable": true }, "elementRef": { "elementRef": true }, "getShadowRoot": { "method": true }, "getSlot": { "method": true }, "getSlotElementsByTagName": { "method": true }, "getSlotNodes": { "method": true }, "historyTitle": { "type": String, "attr": "history-title" }, "route": { "type": String, "attr": "route" }, "setActive": { "method": true }, "shadowQuerySelector": { "method": true }, "shadowQuerySelectorAll": { "method": true }, "unsetActive": { "method": true } }; }
    static get events() { return [{ "name": "clicked", "method": "clicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-tab:**/"; }
}
