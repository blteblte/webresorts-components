//
function getShadowRoot() {
    return this.elementRef.shadowRoot || this.elementRef;
}
//
function getSlot() {
    return getShadowRoot.bind(this)().querySelector('slot') || getShadowRoot.bind(this)();
}
//
function getSlotNodes(name) {
    const slotSelector = name ? `slot[name="${name}"]` : 'slot';
    let assignedNodes;
    const slot = getShadowRoot.bind(this)().querySelector(slotSelector);
    if (slot) {
        assignedNodes = slot.assignedNodes();
    }
    else {
        assignedNodes = getShadowRoot.bind(this)().querySelectorAll('*');
    }
    return Array.prototype.slice.call(assignedNodes);
}
//
function shadowQuerySelector(query) {
    return getShadowRoot.bind(this)().querySelector(query);
}
//
function shadowQuerySelectorAll(query) {
    return Array.prototype.slice.call(getShadowRoot.bind(this)().querySelectorAll(query));
}
//
function getSlotElementsByTagName(tagName) {
    return getSlotNodes.bind(this)()
        .filter(o => o.tagName === tagName.toUpperCase());
}
export const Helpers = {
    getShadowRoot,
    getSlot,
    getSlotNodes,
    shadowQuerySelector,
    shadowQuerySelectorAll,
    getSlotElementsByTagName
};
