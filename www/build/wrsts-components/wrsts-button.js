/*! Built with http://stenciljs.com */
const { h } = window.WrstsComponents;

class WrstsButton {
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
    static get style() { return "/* form elements */\n/* tabs */\n/* button */\nwrsts-button {\n  display: inline-block;\n  cursor: pointer;\n}\n\nwrsts-button button {\n  border: none;\n  outline: none;\n  padding: 8px 12px;\n  background-color: #f3f3f3;\n  color: #595959;\n  transition: background-color .2s ease-in-out;\n}\n\nwrsts-button button:hover {\n  background-color: #dadada;\n}"; }
}

export { WrstsButton };
