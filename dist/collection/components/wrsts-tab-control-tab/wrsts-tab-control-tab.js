export class WrstsTabControlTab {
    setActive() {
        if (!this.active) {
            this.active = true;
            if (this.route !== undefined && this.route !== null) {
                window.location.href = `#/${this.route}`;
            }
        }
    }
    unsetActive() {
        if (this.active) {
            this.active = false;
        }
    }
    render() {
        return (h("label", { class: this.active ? 'active' : '', onClick: (e) => this.clicked.emit(e) },
            h("slot", null)));
    }
    static get is() { return "wrsts-tab-control-tab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "mutable": true }, "elementRef": { "elementRef": true }, "historyTitle": { "type": String, "attr": "history-title" }, "route": { "type": String, "attr": "route" }, "setActive": { "method": true }, "unsetActive": { "method": true } }; }
    static get events() { return [{ "name": "clicked", "method": "clicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-tab:**/"; }
}
