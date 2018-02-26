import { httpAsync } from '../../lib/http/http';
import { isFunction } from '../../lib/js-helpers/js-helpers';
const FORM_ELEMENTS_QUERY_SELECTOR = 'wrsts-checkbox'
    + ', wrsts-select'
    + ', wrsts-tinymce';
export class WrstsJsonForm {
    componentDidLoad() {
        this.rebind();
    }
    rebind() {
        this.formElements = Array.prototype.slice.call(this.wrstsJsonForm.querySelectorAll(FORM_ELEMENTS_QUERY_SELECTOR));
        this.form = this.wrstsJsonForm.querySelector('form');
    }
    toJson(type = 0) {
        return this.formElements.reduce((arr, next) => {
            arr.push(next.toJson(type));
            return arr;
        }, []);
    }
    submit(callback, type = 0) {
        if (!this.ajax && this.form) {
            this.form.submit();
            this.submitted.emit();
        }
        else {
            const data = this.toJson(type);
            httpAsync(this.action, this.method, JSON.stringify(data))
                .then((e) => { isFunction(callback) && callback(e); this.submitted.emit(e); })
                .catch((e) => { isFunction(callback) && callback(e); this.submitted.emit(e); });
        }
    }
    render() {
        return (h("div", null, this.ajax
            ? h("slot", null)
            : h("form", { action: this.action, method: this.method, target: this.target, novalidate: true },
                h("slot", null))));
    }
    static get is() { return "wrsts-json-form"; }
    static get properties() { return { "action": { "type": String, "attr": "action" }, "ajax": { "type": Boolean, "attr": "ajax" }, "method": { "type": String, "attr": "method" }, "rebind": { "method": true }, "submit": { "method": true }, "target": { "type": String, "attr": "target" }, "toJson": { "method": true }, "wrstsJsonForm": { "elementRef": true } }; }
    static get events() { return [{ "name": "submitted", "method": "submitted", "bubbles": true, "cancelable": true, "composed": true }]; }
}
