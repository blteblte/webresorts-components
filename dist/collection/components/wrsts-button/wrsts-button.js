export class WrstsButton {
    render() {
        return (h("button", null,
            h("slot", null)));
    }
    static get is() { return "wrsts-button"; }
    static get style() { return "/**style-placeholder:wrsts-button:**/"; }
}
