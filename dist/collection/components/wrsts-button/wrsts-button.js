export class WrstsButton {
    get hasForm() {
        return this.formId !== undefined && this.formId !== null;
    }
    componentDidLoad() {
        if (this.hasForm) {
            this.wrstsJsonForm = document.getElementById(this.formId);
        }
    }
    onClick(e) {
        if (this.hasForm) {
            if (this.wrstsJsonForm.ajax) {
                e.preventDefault();
            }
            this.wrstsJsonForm.submit();
        }
    }
    render() {
        return (h("button", { onClick: this.onClick.bind(this) },
            h("slot", null)));
    }
    static get is() { return "wrsts-button"; }
    static get properties() { return { "formId": { "type": String, "attr": "form-id" } }; }
    static get style() { return "/**style-placeholder:wrsts-button:**/"; }
}
