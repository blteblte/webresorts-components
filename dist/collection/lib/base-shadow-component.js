export class BaseShadowComponent {
    get ShadowRoot() {
        return this.elementRef.shadowRoot;
    }
    get Slot() {
        return this.ShadowRoot.querySelector('slot');
    }
    get SlotNodes() {
        return this.getSlotNodes();
    }
    getSlotNodes(name) {
        const slotSelector = name ? `slot[name="${name}"]` : 'slot';
        return Array.prototype.slice.call(this.ShadowRoot.querySelector(slotSelector).assignedNodes());
    }
    shadowQuerySelector(query) {
        return this.ShadowRoot.querySelector(query);
    }
    shadowQuerySelectorAll(query) {
        return Array.prototype.slice.call(this.ShadowRoot.querySelectorAll(query));
    }
    getSlotElementsByTagName(tagName) {
        this.SlotNodes.forEach(o => console.log(o));
        return this.SlotNodes.filter(o => o.tagName === tagName);
    }
}
