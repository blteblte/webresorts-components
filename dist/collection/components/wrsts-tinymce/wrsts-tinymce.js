import tinymce from 'tinymce';
import { ComponentSerializer, ComponentSerializerResolver } from '../../lib/component-serialization';
export class WrstsTinymce {
    constructor() {
        this.tinyMceOptions = {};
        this.baseUrl = "";
    }
    get h() {
        let h = parseFloat(this.height) || 201;
        if (h < 201) {
            h = 201;
        }
        return h - (135 /* editor added height */);
    }
    get w() {
        const w = parseFloat(this.width) || 420;
        return w - (2 /* editor added width */);
    }
    componentDidLoad() {
        this.tinymce = tinymce;
        this.textarea = this.wrstsTinymce.querySelector('textarea');
        this.textarea.addEventListener('change', (e) => {
            e.stopPropagation();
        });
        this.tinymce.init({
            target: this.textarea,
            width: this.w,
            height: this.h,
            skin_url: `${this.baseUrl}assets/vendor/tinymce/skins/lightgray`,
            theme_url: `${this.baseUrl}assets/vendor/tinymce/themes/modern/theme.min.js`,
            init_instance_callback: (editor) => {
                this.editor = editor;
                editor.on('init', (e) => { this.load.emit(e); });
                editor.on('keyup', (e) => { this.save(e, editor); });
                editor.on('paste', (e) => { this.save(e, editor); });
                editor.on('cut', (e) => { this.save(e, editor); });
                editor.on('change', (e) => { this.save(e, editor); });
            }
        });
    }
    save(e, editor) {
        this.value = editor.getContent();
        editor.save();
        this.change.emit(e);
    }
    getNativeElement() { return this.textarea; }
    getTinyMce() { return this.tinymce; }
    getEditor() { return this.editor; }
    toJson(type = 0) {
        return ComponentSerializer.Serialize(this.wrstsTinymce, type, { valueResolver: ComponentSerializerResolver.ResolveTextareaValue });
    }
    render() {
        return (h("textarea", { id: this.id, name: this.name, value: this.value }));
    }
    static get is() { return "wrsts-tinymce"; }
    static get properties() { return { "baseUrl": { "type": String, "attr": "base-url" }, "getEditor": { "method": true }, "getNativeElement": { "method": true }, "getTinyMce": { "method": true }, "height": { "type": String, "attr": "height" }, "id": { "type": String, "attr": "id" }, "name": { "type": String, "attr": "name" }, "toJson": { "method": true }, "value": { "type": String, "attr": "value", "mutable": true }, "width": { "type": String, "attr": "width" }, "wrstsTinymce": { "elementRef": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }, { "name": "load", "method": "load", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-tinymce:**/"; }
}
