export class WrstsSelectOption {
    componentDidLoad() {
        this.slotElement = this.wrstsSelectOption
            .children[0] /* div */;
    }
    getSlot() {
        return this.slotElement;
    }
    select() {
        if (!this.selected)
            this.wrstsSelectOption.setAttribute('selected', 'true');
    }
    unselect() {
        if (this.selected)
            this.wrstsSelectOption.removeAttribute('selected');
    }
    render() {
        return (h("div", { onClick: (e) => this.clicked.emit(e) },
            h("slot", null)));
    }
    static get is() { return "wrsts-select-option"; }
    static get properties() { return { "getSlot": { "method": true }, "select": { "method": true }, "selected": { "type": Boolean, "attr": "selected", "mutable": true }, "unselect": { "method": true }, "value": { "type": String, "attr": "value" }, "wrstsSelectOption": { "elementRef": true } }; }
    static get events() { return [{ "name": "clicked", "method": "clicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-select-option:**/"; }
}
