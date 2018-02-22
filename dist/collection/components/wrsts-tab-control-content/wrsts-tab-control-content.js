export class WrstsTabControlContent {
    setActive() {
        if (!this.active) {
            this.wrstsTabControlContent.setAttribute('active', 'true');
        }
    }
    unsetActive() {
        if (this.active) {
            this.wrstsTabControlContent.removeAttribute('active');
        }
    }
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "wrsts-tab-control-content"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "mutable": true }, "setActive": { "method": true }, "unsetActive": { "method": true }, "wrstsTabControlContent": { "elementRef": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-content:**/"; }
}
