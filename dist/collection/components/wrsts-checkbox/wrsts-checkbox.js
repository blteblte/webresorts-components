import { ComponentSerializer, ComponentSerializerResolver } from './../../lib/component-serialization';
export class WrstsCheckbox {
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
            this.rebindGroup();
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
    rebindGroup() {
        if (!this.isToggler) {
            return;
        }
        this.releaseGroupBindings();
        const groupBoxes = Array.prototype.slice
            .call(document.querySelectorAll(`wrsts-checkbox[group="${this.groupToggler}"]`));
        if (!groupBoxes) {
            return;
        }
        this.groupBoxesBindings = [];
        groupBoxes.forEach((el) => {
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
     * Get collection of data attributes as { [name]: value }
     */
    getData(type = 1) {
        return ComponentSerializerResolver.ResolveDataAttributes(this.wrstsCheckBox, type);
    }
    /**
     * get json object for checkbox or group
    */
    toJson(type = 0) {
        const serializationType = type;
        if (this.isToggler) {
            return ComponentSerializer.SerializeData([this.wrstsCheckBox, ...this.groupBoxesBindings.map(el => el.elementRef)], serializationType, { valueResolver: ComponentSerializerResolver.ResolveCheckboxValue });
        }
        else {
            return ComponentSerializer.Serialize(this.wrstsCheckBox, serializationType, { valueResolver: ComponentSerializerResolver.ResolveCheckboxValue });
        }
    }
    componentDidLoad() {
        this.checkbox = this.wrstsCheckBox.querySelector('input[type="checkbox"]');
        this.checkbox.checked = this.checked;
        this.rebindGroup();
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
                "\u00A0",
                h("slot", null))));
    }
    static get is() { return "wrsts-checkbox"; }
    static get properties() { return { "check": { "method": true }, "checked": { "type": Boolean, "attr": "checked", "mutable": true }, "disabled": { "type": Boolean, "attr": "disabled" }, "getData": { "method": true }, "getGroupBoxesBindings": { "method": true }, "getNativeElement": { "method": true }, "group": { "type": String, "attr": "group" }, "groupToggler": { "type": String, "attr": "group-toggler", "watchCallbacks": ["onGroupTogglerChanged"] }, "hidden": { "type": Boolean, "attr": "hidden" }, "id": { "type": String, "attr": "id" }, "indeterminate": { "type": Boolean, "attr": "indeterminate" }, "indeterminateState": { "state": true }, "name": { "type": String, "attr": "name" }, "rebindGroup": { "method": true }, "setIndeterminate": { "method": true }, "toJson": { "method": true }, "uncheck": { "method": true }, "value": { "type": String, "attr": "value" }, "wrstsCheckBox": { "elementRef": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-checkbox:**/"; }
}
