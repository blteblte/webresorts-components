import { ComponentSerializer, ComponentSerializerResolver } from '../../lib/component-serialization';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export class WrstsSelect extends WrstsBaseShadow {
    constructor() {
        super();
        this.setProp = 0; // hax
        this.wrstsSelectOptions = [];
    }
    getShadowRoot() {
        return this.elementRef.shadowRoot || this.elementRef;
    }
    getSlot() {
        return this.getShadowRoot().querySelector('slot') || this.getShadowRoot();
    }
    getSlotNodes(name) {
        const slotSelector = name ? `slot[name="${name}"]` : 'slot';
        let assignedNodes;
        const slot = this.getShadowRoot().querySelector(slotSelector);
        if (slot) {
            assignedNodes = slot.assignedNodes();
        }
        else {
            assignedNodes = this.getShadowRoot().querySelectorAll('*');
        }
        return Array.prototype.slice.call(assignedNodes);
    }
    shadowQuerySelector(query) {
        return this.getShadowRoot().querySelector(query);
    }
    shadowQuerySelectorAll(query) {
        return Array.prototype.slice.call(this.getShadowRoot().querySelectorAll(query));
    }
    getSlotElementsByTagName(tagName) {
        return this.getSlotNodes().filter(o => o.tagName === tagName.toUpperCase());
    }
    onSelectedIndexChanged(newValue, oldValue) {
        //console.log('watch selected index')
        if (newValue !== undefined && newValue !== null && parseInt(newValue, 10) !== NaN) {
            if (newValue !== oldValue) {
                this.selectOptionByIndex(parseInt(newValue, 10));
            }
        }
        else {
            this.selectedValue = null;
            this.unselectAllOptions();
        }
    }
    onSelectedValueChanged(newValue, oldValue) {
        if (newValue !== undefined && newValue !== null && newValue !== '') {
            if (newValue !== oldValue) {
                this.selectOptionByValue(newValue);
            }
        }
        else {
            this.selectedIndex = null;
            this.unselectAllOptions();
        }
    }
    onDocumentClick(e) {
        if (e.target !== this.elementRef && e.target !== this.input) {
            if (this.showDropdown) {
                this.toggleDropdown(false);
            }
            if (this.focused) {
                this.focused = false;
            }
        }
        else {
            this.focused = true;
        }
    }
    // todo: celan up
    handleUp(e) {
        if (!this.showDropdown) {
            return;
        }
        e.preventDefault();
        let prevIndex = 0;
        const focusedIndex = this.wrstsSelectOptions.findIndex(x => x.focused);
        if (focusedIndex > 0) {
            prevIndex = focusedIndex - 1;
        }
        if (focusedIndex > -1)
            this.wrstsSelectOptions[focusedIndex].unfocus();
        const prevOption = this.wrstsSelectOptions[prevIndex];
        if (!prevOption.hidden) {
            prevOption.focus();
        }
        else {
            let elFound = false;
            let loop = false;
            let i = prevIndex;
            while (!loop) {
                if (!this.wrstsSelectOptions[i].hidden) {
                    this.wrstsSelectOptions[i].focus();
                    loop = true;
                    elFound = true;
                }
                if (i === 0) {
                    loop = true;
                }
                i--;
            }
            if (!elFound && focusedIndex > -1) {
                this.wrstsSelectOptions[focusedIndex].focus();
            }
        }
    }
    // todo: celan up
    handleDown(e) {
        if (!this.showDropdown) {
            return;
        }
        e.preventDefault();
        //console.log(this.wrstsSelectOptions)
        let nextIndex = 0;
        const len = this.wrstsSelectOptions.length;
        const focusedIndex = this.wrstsSelectOptions.findIndex(x => x.focused);
        if (focusedIndex > -1) {
            nextIndex = focusedIndex + 1;
        }
        if (nextIndex > len - 1) {
            nextIndex = len - 1;
        }
        if (focusedIndex > -1)
            this.wrstsSelectOptions[focusedIndex].unfocus();
        const nextOption = this.wrstsSelectOptions[nextIndex];
        if (!nextOption.hidden) {
            nextOption.focus();
        }
        else {
            let elFound = false;
            let loop = false;
            let i = nextIndex;
            while (!loop) {
                if (!this.wrstsSelectOptions[i].hidden) {
                    this.wrstsSelectOptions[i].focus();
                    loop = true;
                    elFound = true;
                }
                if (i === this.wrstsSelectOptions.length - 1) {
                    loop = true;
                }
                i++;
            }
            if (!elFound && focusedIndex > -1) {
                this.wrstsSelectOptions[focusedIndex].focus();
            }
        }
    }
    handleEnter(e) {
        if (!this.showDropdown) {
            if (this.focused) {
                this.toggleDropdown(true);
                return;
            }
            else {
                return;
            }
        }
        e.preventDefault();
        const focusedIndex = this.wrstsSelectOptions.findIndex(x => x.focused);
        if (focusedIndex > -1) {
            this.selectIndex(focusedIndex);
            this.toggleDropdown(false);
        }
    }
    handleEsc(e) {
        if (!this.showDropdown) {
            return;
        }
        e.preventDefault();
        this.toggleDropdown(false);
    }
    get selectedOption() {
        return this.wrstsSelectOptions.find(x => x.selected);
    }
    get selectedText() {
        return this.selectedOption
            ? this.selectedOption.getSlotNodes()
            : this.placeholder || '';
    }
    componentDidLoad() {
        this.bind();
    }
    /**
     * this should occur automatically - if <slot /> get's changed
     *  ... how do we look for a <slot /> changes?
     */
    bind() {
        this.select = this.shadowQuerySelector('select');
        this.wrstsSelectSelect = this.shadowQuerySelector('.wrsts-select-select');
        this.wrstsSelectOptions = this.getSlotElementsByTagName('wrsts-select-option');
        //console.log(this.wrstsSelectOptions)
        this.wrstsSelectOptions.forEach((wrstsSelectOption, index) => {
            wrstsSelectOption.index = index.toString();
            wrstsSelectOption.addEventListener('clicked', () => {
                this.selectIndex(index);
            });
            if (wrstsSelectOption.selected) {
                this.selectIndex(index);
            }
        });
        if (this.search) {
            this.input = this.shadowQuerySelector('input');
            this.input.addEventListener('change', e => e.stopPropagation());
        }
    }
    selectIndex(index) {
        this.selectedIndex = index.toString();
    }
    selectValue(value) {
        this.selectedValue = value;
    }
    selectOptionByIndex(index) {
        this.setProp++; // this should we redone totally...
        let selectedOption;
        this.wrstsSelectOptions.forEach((option, i) => {
            if (i !== index) {
                option.unselect();
                option.unfocus();
            }
            else {
                selectedOption = option;
                option.select();
                option.focus();
            }
        });
        this.select.selectedIndex = index;
        this.selectedValue = selectedOption.value;
        if (this.setProp === 1) {
            this.change.emit();
        }
        this.setProp--;
    }
    selectOptionByValue(value) {
        this.setProp++; // this should we redone totally...
        let selectedOption;
        this.wrstsSelectOptions.forEach((option, i) => {
            if (option.value !== value) {
                option.unselect();
                option.unfocus();
            }
            else {
                selectedOption = option;
                option.select();
                option.focus();
                this.select.selectedIndex = i;
            }
        });
        this.selectedIndex = selectedOption.index;
        if (this.setProp === 1) {
            this.change.emit();
        }
        this.setProp--;
    }
    unselectAllOptions() {
        this.wrstsSelectOptions.forEach(o => {
            o.unselect();
            o.unfocus();
        });
    }
    onSelectClicked() {
        this.toggleDropdown();
    }
    toggleDropdown(forceState = null) {
        if (forceState === null) {
            this.showDropdown = !this.showDropdown;
        }
        else {
            this.showDropdown = forceState;
        }
        if (this.showDropdown && this.search) {
            setTimeout(() => { this.input.focus(); }, 100);
        }
    }
    getOptionsVisibilityClass() {
        return this.showDropdown
            ? 'visible'
            : 'hidden';
    }
    handleSearch(e) {
        const value = e.target.value;
        this.wrstsSelectOptions.forEach((option) => {
            var isMatch = false;
            if (option.getSlotNodes().filter(o => o.innerText.toLowerCase().indexOf(value.toLowerCase()) > -1)) {
                isMatch = true;
            }
            if (option.value.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                isMatch = true;
            }
            if (isMatch) {
                option.unhide();
            }
            else {
                option.hide();
            }
        });
    }
    toJson(type = 0) {
        return ComponentSerializer.Serialize(this.elementRef, type, { valueResolver: ComponentSerializerResolver.ResolveSelectValue });
    }
    render() {
        return (h("div", { class: this.focused ? 'focused' : null },
            h("select", { name: this.name, id: this.id }),
            h("div", { onClick: this.onSelectClicked.bind(this), class: 'wrsts-select-select ' + this.getOptionsVisibilityClass() }, this.selectedText),
            h("div", { class: 'wrsts-select-options ' + this.getOptionsVisibilityClass() },
                this.search
                    ? h("input", { onKeyUp: this.handleSearch.bind(this), type: "text" })
                    : null,
                h("slot", null))));
    }
    static get is() { return "wrsts-select"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "bind": { "method": true }, "elementRef": { "elementRef": true }, "focused": { "type": Boolean, "attr": "focused", "mutable": true }, "getShadowRoot": { "method": true }, "getSlot": { "method": true }, "getSlotElementsByTagName": { "method": true }, "getSlotNodes": { "method": true }, "id": { "type": String, "attr": "id" }, "name": { "type": String, "attr": "name" }, "placeholder": { "type": String, "attr": "placeholder" }, "search": { "type": Boolean, "attr": "search" }, "selectedIndex": { "type": String, "attr": "selected-index", "mutable": true, "watchCallbacks": ["onSelectedIndexChanged"] }, "selectedValue": { "type": String, "attr": "selected-value", "mutable": true, "watchCallbacks": ["onSelectedValueChanged"] }, "selectIndex": { "method": true }, "selectValue": { "method": true }, "shadowQuerySelector": { "method": true }, "shadowQuerySelectorAll": { "method": true }, "showDropdown": { "state": true }, "toJson": { "method": true }, "wrstsSelectOptions": { "state": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-select:**/"; }
}
