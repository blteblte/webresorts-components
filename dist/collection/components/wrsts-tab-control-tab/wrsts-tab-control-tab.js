export class WrstsTabControlTab {
    setActive() {
        if (!this.active) {
            this.wrstsTabControlTab.setAttribute('active', 'true');
        }
    }
    unsetActive() {
        if (this.active) {
            this.wrstsTabControlTab.removeAttribute('active');
        }
    }
    render() {
        return (h("label", { class: this.active ? 'active' : '', onClick: (e) => this.clicked.emit(e) },
            h("slot", null)));
    }
    static get is() { return "wrsts-tab-control-tab"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "mutable": true }, "setActive": { "method": true }, "unsetActive": { "method": true }, "wrstsTabControlTab": { "elementRef": true } }; }
    static get events() { return [{ "name": "clicked", "method": "clicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-tab:**/"; }
}
