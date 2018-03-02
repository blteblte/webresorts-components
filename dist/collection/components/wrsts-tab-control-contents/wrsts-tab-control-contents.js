export class WrstsTabControlContents {
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control-contents"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-contents:**/"; }
}
