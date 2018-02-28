/*! Built with http://stenciljs.com */
const { h } = window.WrstsComponents;

import { ComponentSerializer, ComponentSerializerResolver } from './chunk1.js';

class WrstsCheckbox {
    constructor() {
        /**
         * WrstsCheckbox 'checked' attribute. Mimics native checkbox 'checked' attribute
         */
        this.checked = false;
        /**
         * WrstsCheckbox 'disabled' attribute. Disables the DOM element
         */
        this.disabled = false;
        /* group boxes reference if item is toggler */
        this.groupBoxesBindings = [];
    }
    /**
     * Watch for 'group-toggler' attribute change realtime
     */
    onGroupTogglerChanged(newValue /*, oldValue: string*/) {
        if (!(newValue !== null && newValue !== undefined && newValue !== '')) {
            this.releaseGroupBindings();
        }
        else {
            this.bind();
        }
    }
    /**
     * Check the checkbox programmatically
     */
    check(handleGroupElements) {
        if (this.indeterminate) {
            this.indeterminateState = false;
            this.checkbox.indeterminate = false;
        }
        if (this.checked) {
            return;
        }
        this.checked = true;
        this.checkbox.checked = true;
        this.isToggler && !handleGroupElements && this.handleGroupElementsOnTogglerCheck(true);
        this.change.emit(true);
    }
    /**
     * Uncheck the checkbox programmatically
     */
    uncheck(handleGroupElements) {
        if (this.indeterminate) {
            this.indeterminateState = false;
            this.checkbox.indeterminate = false;
        }
        if (!this.checked) {
            return;
        }
        this.checked = false;
        this.checkbox.checked = false;
        this.isToggler && !handleGroupElements && this.handleGroupElementsOnTogglerCheck(false);
        this.change.emit(false);
    }
    /**
     * Set checkbox state as indeterminate. WrstsCheckbox element must have 'indeterminate' attribute
     */
    setIndeterminate() {
        if (!(this.indeterminate && !this.indeterminateState)) {
            return;
        }
        this.indeterminateState = true;
        this.checked = false;
        this.checkbox.checked = false;
        this.checkbox.indeterminate = true;
        this.change.emit(false);
    }
    /**
     * Get the native HTMLInputElement
     */
    getNativeElement() {
        return this.checkbox;
    }
    /**
     * Rebind group elements for toggler checkbox
     */
    bind() {
        if (!this.isToggler) {
            return;
        }
        this.releaseGroupBindings();
        this.groupBoxesBindings = [];
        1 && [].forEach.call(document.querySelectorAll(`wrsts-checkbox[group="${this.groupToggler}"]`), (el) => {
            this.groupBoxesBindings.push({
                elementRef: el,
                listener: el.addEventListener('change', this.changeGroupElementHandler.bind(this))
            });
        });
    }
    /**
     * Get all the binded group boxes without toggler
    */
    getGroupBoxesBindings() {
        return this.groupBoxesBindings;
    }
    /**
     * Get data attributes as json for current object
     * @param type json creation type 'SerializationType'
     */
    getData(type = 1) {
        return ComponentSerializerResolver.ResolveDataAttributes(this.wrstsCheckBox, type);
    }
    /**
     * Get json object for checkbox or toggler's group
     * @param type json creation type 'SerializationType'
     * @param includeToggler include toggler information when creating json
     */
    toJson(type = 0, includeToggler = true) {
        if (this.isToggler) {
            return ComponentSerializer.SerializeData(includeToggler
                ? [this.wrstsCheckBox, ...this.groupBoxesBindings.map(el => el.elementRef)]
                : this.groupBoxesBindings.map(el => el.elementRef), type, { valueResolver: ComponentSerializerResolver.ResolveCheckboxValue });
        }
        else {
            return ComponentSerializer.Serialize(this.wrstsCheckBox, type, { valueResolver: ComponentSerializerResolver.ResolveCheckboxValue });
        }
    }
    componentDidLoad() {
        this.checkbox = this.wrstsCheckBox.querySelector('input[type="checkbox"]');
        this.checkbox.checked = this.checked;
        this.bind();
    }
    get totalGroupBoxesCount() {
        return this.groupBoxesBindings
            .filter(x => x.elementRef.group === this.groupToggler)
            .length;
    }
    get groupCheckedCount() {
        return this.groupBoxesBindings
            .filter(x => x.elementRef.group === this.groupToggler
            && x.elementRef.checked)
            .length;
    }
    get isToggler() {
        return this.groupToggler !== undefined
            && this.groupToggler !== null
            && this.groupToggler !== '';
    }
    releaseGroupBindings() {
        if (this.groupBoxesBindings) {
            this.groupBoxesBindings.forEach(x => {
                x.elementRef.removeEventListener('change', x.listener);
            });
        }
        this.groupBoxesBindings = [];
    }
    changeGroupElementHandler() {
        if (this.indeterminate) {
            const total = this.totalGroupBoxesCount;
            const checked = this.groupCheckedCount;
            if (checked > 0 && checked < total) {
                this.setIndeterminate();
            }
            else if (checked === 0) {
                this.uncheck(true);
            }
            else {
                this.check(true);
            }
        }
        else {
            if (this.groupCheckedCount === this.totalGroupBoxesCount) {
                this.check(true);
            }
            else {
                this.uncheck(true);
            }
        }
    }
    handleGroupElementsOnTogglerCheck(checked) {
        this.groupBoxesBindings.forEach((x) => {
            if (x.elementRef.group === this.groupToggler) {
                if (checked) {
                    x.elementRef.check();
                }
                else {
                    x.elementRef.uncheck();
                }
            }
        });
    }
    clickHandler() {
        if (this.disabled) {
            return;
        }
        if (this.checked) {
            this.uncheck();
        }
        else {
            this.check();
        }
    }
    getCheckboxIcon() {
        if (this.isToggler && this.indeterminate) {
            if (this.indeterminateState) {
                return h("i", { class: "indeterminate" });
            }
            else if (!this.checked) {
                return h("i", { class: "unchecked" });
            }
            else {
                return h("i", { class: "checked" });
            }
        }
        else {
            return this.checked
                ? h("i", { class: "checked" })
                : h("i", { class: "unchecked" });
        }
    }
    render() {
        return (h("div", { onClick: this.clickHandler.bind(this) },
            h("input", { type: "checkbox", name: this.name, id: this.id, value: this.value }),
            this.getCheckboxIcon(),
            h("label", null,
                h("slot", null))));
    }
    static get is() { return "wrsts-checkbox"; }
    static get properties() { return { "bind": { "method": true }, "check": { "method": true }, "checked": { "type": Boolean, "attr": "checked", "mutable": true }, "disabled": { "type": Boolean, "attr": "disabled" }, "getData": { "method": true }, "getGroupBoxesBindings": { "method": true }, "getNativeElement": { "method": true }, "group": { "type": String, "attr": "group" }, "groupToggler": { "type": String, "attr": "group-toggler", "watchCallbacks": ["onGroupTogglerChanged"] }, "hidden": { "type": Boolean, "attr": "hidden" }, "id": { "type": String, "attr": "id" }, "indeterminate": { "type": Boolean, "attr": "indeterminate" }, "indeterminateState": { "state": true }, "name": { "type": String, "attr": "name" }, "setIndeterminate": { "method": true }, "toJson": { "method": true }, "uncheck": { "method": true }, "value": { "type": String, "attr": "value" }, "wrstsCheckBox": { "elementRef": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/* form elements */\n/* tabs */\n/* button */\n\@-webkit-keyframes wrsts-checkbox-appear {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\@keyframes wrsts-checkbox-appear {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\nwrsts-checkbox {\n  -webkit-animation: wrsts-checkbox-appear .2s ease-in;\n          animation: wrsts-checkbox-appear .2s ease-in;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-table;\n}\n\nwrsts-checkbox[hidden] {\n  display: none;\n}\n\nwrsts-checkbox[disabled] {\n  color: #838383;\n}\n\nwrsts-checkbox input[type=\"checkbox\"] {\n  display: none;\n}\n\nwrsts-checkbox div {\n  display: table;\n}\n\nwrsts-checkbox label {\n  display: inline-block;\n  line-height: 20px;\n}\n\nwrsts-checkbox label::before {\n  content: '';\n  display: inline-block;\n  width: 3px;\n}\n\nwrsts-checkbox i {\n  display: table-cell;\n  width: 20px;\n  height: 20px;\n  transition: background-image .2s ease-in-out;\n}\n\nwrsts-checkbox i.checked {\n  background: url(/assets/img/checkbox-checked.svg);\n}\n\nwrsts-checkbox i.unchecked {\n  background: url(/assets/img/checkbox-unchecked.svg);\n}\n\nwrsts-checkbox i.indeterminate {\n  background: url(/assets/img/checkbox-indeterminate.svg);\n}"; }
}

export { WrstsCheckbox };
