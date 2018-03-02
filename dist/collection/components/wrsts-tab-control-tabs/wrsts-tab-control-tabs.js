export class WrstsTabControlTabs {
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-tabs:**/"; }
}
