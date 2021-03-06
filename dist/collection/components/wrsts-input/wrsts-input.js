import { ComponentSerializer, ComponentSerializerResolver } from '../../lib/component-serialization';
export class WrstsInput {
    toJson(type = 0) {
        return ComponentSerializer.Serialize(this.wrstsInput, type, { valueResolver: ComponentSerializerResolver.ResolveInputValue });
    }
    componentDidLoad() {
        this.input = this.wrstsInput.querySelector('inpout');
    }
    render() {
        return (h("input", Object.assign({ type: this.type, id: this.id, name: this.name, value: this.value, title: this.title, autocomplete: this.autocomplete, placeholder: this.placeholder, formenctype: this.formenctype, formaction: this.formaction, formmethod: this.formmethod, formtarget: this.formtarget, maxlength: this.maxlength, minlength: this.minlength, list: this.list, min: this.min, max: this.max, step: this.step, pattern: this.patern, height: this.height, width: this.width, size: this.size }, this.formnovalidate, this.autofocus, this.required, this.readonly, this.multiple, this.disabled)));
    }
    static get is() { return "wrsts-input"; }
    static get properties() { return { "autocomplete": { "type": "Any", "attr": "autocomplete" }, "autofocus": { "type": Boolean, "attr": "autofocus" }, "disabled": { "type": Boolean, "attr": "disabled" }, "formaction": { "type": String, "attr": "formaction" }, "formenctype": { "type": String, "attr": "formenctype" }, "formmethod": { "type": String, "attr": "formmethod" }, "formnovalidate": { "type": Boolean, "attr": "formnovalidate" }, "formtarget": { "type": String, "attr": "formtarget" }, "height": { "type": Number, "attr": "height" }, "id": { "type": String, "attr": "id" }, "list": { "type": String, "attr": "list" }, "max": { "type": Number, "attr": "max" }, "maxlength": { "type": Number, "attr": "maxlength" }, "min": { "type": Number, "attr": "min" }, "minlength": { "type": Number, "attr": "minlength" }, "multiple": { "type": Boolean, "attr": "multiple" }, "name": { "type": String, "attr": "name" }, "patern": { "type": String, "attr": "patern" }, "placeholder": { "type": String, "attr": "placeholder" }, "readonly": { "type": Boolean, "attr": "readonly" }, "required": { "type": Boolean, "attr": "required" }, "size": { "type": Number, "attr": "size" }, "step": { "type": Number, "attr": "step" }, "title": { "type": String, "attr": "title" }, "toJson": { "method": true }, "type": { "type": String, "attr": "type" }, "value": { "type": String, "attr": "value" }, "width": { "type": Number, "attr": "width" }, "wrstsInput": { "elementRef": true } }; }
    static get style() { return "/**style-placeholder:wrsts-input:**/"; }
}
