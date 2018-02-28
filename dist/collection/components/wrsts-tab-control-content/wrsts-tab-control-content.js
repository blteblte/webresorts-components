export class WrstsTabControlContent {
    setActive() {
        if (!this.active) {
            this.active = true;
        }
    }
    unsetActive() {
        if (this.active) {
            this.active = false;
        }
    }
    render() {
        return (h("div", { class: this.active ? 'active' : '' },
            h("slot", null)));
    }
    static get is() { return "wrsts-tab-control-content"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "mutable": true }, "setActive": { "method": true }, "unsetActive": { "method": true }, "wrstsTabControlContent": { "elementRef": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-content:**/"; }
}
