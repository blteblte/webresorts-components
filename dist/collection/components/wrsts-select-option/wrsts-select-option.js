import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export class WrstsSelectOption extends WrstsBaseShadow {
    constructor() { super(); }
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
    static get properties() { return { "elementRef": { "elementRef": true }, "focus": { "method": true }, "focused": { "type": Boolean, "attr": "focused", "mutable": true }, "hidden": { "type": Boolean, "attr": "hidden", "mutable": true }, "hide": { "method": true }, "index": { "type": String, "attr": "index" }, "select": { "method": true }, "selected": { "type": Boolean, "attr": "selected", "mutable": true }, "unfocus": { "method": true }, "unhide": { "method": true }, "unselect": { "method": true }, "value": { "type": String, "attr": "value" } }; }
    static get events() { return [{ "name": "clicked", "method": "clicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-select-option:**/"; }
}
