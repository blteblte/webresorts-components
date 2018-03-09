import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export class WrstsSelectOption extends WrstsBaseShadow {
    constructor() { super(); }
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
    select() {
        if (!this.selected)
            this.selected = true;
    }
    unselect() {
        if (this.selected)
            this.selected = false;
    }
    focus() {
        if (!this.focused)
            this.focused = true;
    }
    unfocus() {
        if (this.focused)
            this.focused = false;
    }
    hide() {
        if (!this.hidden)
            this.hidden = true;
    }
    unhide() {
        if (this.hidden)
            this.hidden = false;
    }
    getClass() {
        let className = '';
        if (this.selected)
            className += 'selected';
        if (this.focused)
            className += ' focused';
        if (this.hidden)
            className += ' hidden';
        return className;
    }
    render() {
        return (h("div", { class: this.getClass(), onClick: (e) => this.clicked.emit(e) },
            h("slot", null)));
    }
    static get is() { return "wrsts-select-option"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "elementRef": { "elementRef": true }, "focus": { "method": true }, "focused": { "type": Boolean, "attr": "focused", "mutable": true }, "getShadowRoot": { "method": true }, "getSlot": { "method": true }, "getSlotElementsByTagName": { "method": true }, "getSlotNodes": { "method": true }, "hidden": { "type": Boolean, "attr": "hidden", "mutable": true }, "hide": { "method": true }, "index": { "type": String, "attr": "index" }, "select": { "method": true }, "selected": { "type": Boolean, "attr": "selected", "mutable": true }, "shadowQuerySelector": { "method": true }, "shadowQuerySelectorAll": { "method": true }, "unfocus": { "method": true }, "unhide": { "method": true }, "unselect": { "method": true }, "value": { "type": String, "attr": "value" } }; }
    static get events() { return [{ "name": "clicked", "method": "clicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-select-option:**/"; }
}
