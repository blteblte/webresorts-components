import tinymce from 'tinymce';
export class WrstsTinymce {
    componentDidLoad() {
        this.textarea = this.wrstsTinymce.querySelector('textarea');
        tinymce.init({ target: this.textarea });
    }
    render() {
        return (h("textarea", { id: this.id, name: this.name }));
    }
    static get is() { return "wrsts-tinymce"; }
    static get properties() { return { "id": { "type": String, "attr": "id" }, "name": { "type": String, "attr": "name" }, "wrstsTinymce": { "elementRef": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tinymce:**/"; }
}
