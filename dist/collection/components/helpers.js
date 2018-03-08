export function getSlotElementsByTagName(tagName) {
    return this.getSlotNodes().filter(o => o.tagName === tagName.toUpperCase());
}
export function getShadowRoot() {
    return this.elementRef.shadowRoot || this.elementRef;
}
export function getSlot() {
    return this.getShadowRoot().querySelector('slot') || this.getShadowRoot();
}
export function getSlotNodes(name) {
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
export function shadowQuerySelector(query) {
    return this.getShadowRoot().querySelector(query);
}
export function shadowQuerySelectorAll(query) {
    return Array.prototype.slice.call(this.getShadowRoot().querySelectorAll(query));
}
