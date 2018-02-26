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
    focus() {
        if (!this.focused)
            this.wrstsSelectOption.setAttribute('focused', 'true');
    }
    unfocus() {
        if (this.focused)
            this.wrstsSelectOption.removeAttribute('focused');
    }
    hide() {
        if (!this.hidden)
            this.wrstsSelectOption.setAttribute('hidden', 'true');
    }
    unhide() {
        if (this.hidden)
            this.wrstsSelectOption.removeAttribute('hidden');
    }
    render() {
        return (h("div", { onClick: (e) => this.clicked.emit(e) },
            h("slot", null)));
    }
    static get is() { return "wrsts-select-option"; }
    static get properties() { return { "focus": { "method": true }, "focused": { "type": Boolean, "attr": "focused", "mutable": true }, "getSlot": { "method": true }, "hidden": { "type": Boolean, "attr": "hidden", "mutable": true }, "hide": { "method": true }, "index": { "type": String, "attr": "index" }, "select": { "method": true }, "selected": { "type": Boolean, "attr": "selected", "mutable": true }, "unfocus": { "method": true }, "unhide": { "method": true }, "unselect": { "method": true }, "value": { "type": String, "attr": "value" }, "wrstsSelectOption": { "elementRef": true } }; }
    static get events() { return [{ "name": "clicked", "method": "clicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-select-option:**/"; }
}
