/*! Built with http://stenciljs.com */
const { h } = window.WrstsComponents;

function httpAsync(theUrl, method, data) {
    return new Promise(function (resolve, reject) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                resolve(xmlHttp.responseText);
            }
            else if (xmlHttp.readyState == 4 && xmlHttp.status !== 200) {
                reject(xmlHttp);
            }
        };
        xmlHttp.open(method, theUrl, true);
        xmlHttp.send(data);
    });
}

function isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
}

const FORM_ELEMENTS_QUERY_SELECTOR = 'wrsts-checkbox'
    + ', wrsts-select'
    + ', wrsts-tinymce';
class WrstsJsonForm {
    componentDidLoad() {
        this.bind();
    }
    bind() {
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
        if (!this.ajax && this.form)
            this.submiSync();
        else
            this.submitAsyncJson(callback, type);
    }
    submiSync() {
        this.form.submit();
        this.submitted.emit();
    }
    submitAsyncJson(callback, type = 0) {
        const data = this.toJson(type);
        httpAsync(this.action, this.method, JSON.stringify(data))
            .then((e) => { isFunction(callback) && callback(e); this.submitted.emit(e); })
            .catch((e) => { isFunction(callback) && callback(e); this.submitted.emit(e); });
    }
    render() {
        return (h("div", null, this.ajax
            ? h("slot", null)
            : h("form", { action: this.action, method: this.method, target: this.target, novalidate: true },
                h("slot", null))));
    }
    static get is() { return "wrsts-json-form"; }
    static get properties() { return { "action": { "type": String, "attr": "action" }, "ajax": { "type": Boolean, "attr": "ajax" }, "bind": { "method": true }, "method": { "type": String, "attr": "method" }, "submit": { "method": true }, "target": { "type": String, "attr": "target" }, "toJson": { "method": true }, "wrstsJsonForm": { "elementRef": true } }; }
    static get events() { return [{ "name": "submitted", "method": "submitted", "bubbles": true, "cancelable": true, "composed": true }]; }
}

export { WrstsJsonForm };
