/*! Built with http://stenciljs.com */
const { h, Context } = window.WrstsComponents;

var SerializationType;
(function (SerializationType) {
    SerializationType[SerializationType["Default"] = 0] = "Default";
    SerializationType[SerializationType["Object"] = 1] = "Object";
    SerializationType[SerializationType["Array"] = 2] = "Array";
})(SerializationType || (SerializationType = {}));

class ComponentSerializerResolver {
}
/* key */
ComponentSerializerResolver.ResolveKey = resolveKey;
/* values */
ComponentSerializerResolver.ResolveCheckboxValue = resolveCheckboxValue;
/* data attributes */
ComponentSerializerResolver.ResolveDataAttributes = (obj, type) => type === SerializationType.Object
    ? resolveDataAttributesToObj(obj)
    : resolveDataAttributesToArr(obj);
function resolveKey(obj, i) {
    return obj.name || obj.id || i;
}
function resolveCheckboxValue(obj) {
    return obj.checked;
}
function resolveDataAttributesToObj(obj) {
    const rArr = resolveDataAttributesToArr(obj);
    const result = {};
    rArr.forEach(el => {
        result[el.name] = el.value;
    });
    return result;
}
function resolveDataAttributesToArr(obj) {
    return [].filter
        .call(obj.attributes, at => /^data-/.test(at.name))
        .map((attr) => {
        const nameCamelCase = attr.name.substr(5).replace(/-(.)/g, (_$0, $1) => $1.toUpperCase());
        return { name: nameCamelCase, value: attr.value };
    });
}

class ComponentSerializer {
    static SerializeData(collection, type, options) {
        const valueResolver = options.valueResolver;
        let keyResolver = options.keyResolver;
        let dataResolver = options.dataResolver;
        if (!options.keyResolver) {
            keyResolver = ComponentSerializerResolver.ResolveKey;
        }
        if (!options.dataResolver) {
            dataResolver = ComponentSerializerResolver.ResolveDataAttributes;
        }
        switch (type) {
            case SerializationType.Object:
                return serializeCollectionToObject(collection, type, keyResolver, valueResolver, dataResolver);
            case SerializationType.Array:
                return serializeCollectionToArray(collection, type, keyResolver, valueResolver, dataResolver);
            case SerializationType.Default:
                return serializeCollectionToObjectSimple(collection, keyResolver, valueResolver);
        }
    }
    static Serialize(el, type, options) {
        return this.SerializeData([el], type, options);
    }
}
function toObjectWithName(name, value, data) {
    return { name, value, data };
}
function toObjectWithotName(value, data) {
    return { value, data };
}
function serializeCollectionToArray(collection, type, resolveKey, resolveValue, resolveData) {
    return collection.reduce((p, c, i) => {
        p[i] = toObjectWithName(resolveKey(c, i), resolveValue(c), resolveData(c, type));
        return p;
    }, []);
}
function serializeCollectionToObject(collection, type, resolveKey, resolveValue, resolveData) {
    return collection.reduce((p, c, i) => {
        p[resolveKey(c, i)] = toObjectWithotName(resolveValue(c), resolveData(c, type));
        return p;
    }, {});
}
function serializeCollectionToObjectSimple(collection, resolveKey, resolveValue) {
    return collection.reduce((p, c, i) => {
        p[resolveKey(c, i)] = resolveValue(c);
        return p;
    }, {});
}

class WrstsCheckbox {
    constructor() {
        this.checked = false;
        this.disabled = false;
        /* group boxes reference if item is toggler */
        this.groupBoxesBindings = [];
    }
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
        if (!this.checked) {
            return;
        }
        this.checked = false;
        this.checkbox.checked = false;
        this.isToggler && !handleGroupElements && this.handleGroupElementsOnTogglerCheck(false);
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
            return ComponentSerializer.SerializeData(this.groupBoxesBindings.map(el => el.elementRef), serializationType, { valueResolver: ComponentSerializerResolver.ResolveCheckboxValue });
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
        if (this.groupCheckedCount === this.totalGroupBoxesCount) {
            this.check(true);
        }
        else {
            this.uncheck(true);
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
        return this.checked
            ? h("i", { class: "checked" })
            : h("i", { class: "unchecked" });
    }
    render() {
        return (h("div", { onClick: this.clickHandler.bind(this) },
            h("input", { type: "checkbox", name: this.name, id: this.id }),
            this.getCheckboxIcon(),
            h("label", null,
                h("slot", null))));
    }
    static get is() { return "wrsts-checkbox"; }
    static get properties() { return { "check": { "method": true }, "checked": { "type": Boolean, "attr": "checked", "mutable": true }, "disabled": { "type": Boolean, "attr": "disabled" }, "getData": { "method": true }, "getGroupBoxesBindings": { "method": true }, "getNativeElement": { "method": true }, "group": { "type": String, "attr": "group" }, "groupToggler": { "type": String, "attr": "group-toggler", "watchCallbacks": ["onGroupTogglerChanged"] }, "hidden": { "type": Boolean, "attr": "hidden" }, "id": { "type": String, "attr": "id" }, "name": { "type": String, "attr": "name" }, "rebindGroup": { "method": true }, "toJson": { "method": true }, "uncheck": { "method": true }, "wrstsCheckBox": { "elementRef": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "wrsts-checkbox {\n  user-select: none;\n  display: inline-block;\n  font-family: Helvetica, sans-serif;\n}\n\nwrsts-checkbox div {\n  display: inline-block;\n}\n\nwrsts-checkbox label {\n  margin-left: 4px;\n}\n\nwrsts-checkbox input[type=\"checkbox\"] {\n  display: none;\n}\n\nwrsts-checkbox i {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-bottom: -4px;\n}\n\nwrsts-checkbox i.checked {\n  background: url(/assets/img/checkbox-checked.svg);\n}\n\nwrsts-checkbox i.unchecked {\n  background: url(/assets/img/checkbox-unchecked.svg);\n}\n\nwrsts-checkbox[disabled] {\n  color: gray;\n}\n\nwrsts-checkbox[hidden] {\n  display: none;\n}"; }
}

export { WrstsCheckbox };
