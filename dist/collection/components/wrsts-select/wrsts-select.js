export class WrstsSelect {
    constructor() {
        this.wrstsSelectOptions = [];
    }
    onSelectedIndexChanged(newValue, oldValue) {
        if (newValue !== undefined && newValue !== null && parseInt(newValue, 10) !== NaN) {
            if (newValue !== oldValue)
                this.selectOptionByIndex(parseInt(newValue, 10));
        }
        else {
            this.unselectAllOptions();
        }
    }
    onSelectedValueChanged(newValue, oldValue) {
        if (newValue !== undefined && newValue !== null && newValue !== '') {
            if (newValue !== oldValue)
                this.selectOptionByValue(newValue);
        }
        else {
            this.unselectAllOptions();
        }
    }
    // todo: celan up
    onDocumentClick(e) {
        if (e.target !== this.wrstsSelectSelect) {
            if (this.showDropdown) {
                this.showDropdown = false;
            }
            if (this.focused) {
                this.wrstsSelect.removeAttribute('focused');
            }
        }
        else {
            this.wrstsSelect.setAttribute('focused', 'true');
        }
    }
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
            const prevVisibleOption = this.wrstsSelectOptions.find((x, i) => !x.hidden && i <= prevIndex);
            if (prevVisibleOption) {
                prevVisibleOption.focus();
            }
        }
    }
    // todo: celan up
    handleDown(e) {
        if (!this.showDropdown) {
            return;
        }
        e.preventDefault();
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
            const nextVisibleOption = this.wrstsSelectOptions.find((x, i) => !x.hidden && i >= nextIndex);
            if (nextVisibleOption) {
                nextVisibleOption.focus();
            }
        }
    }
    handleEnter(e) {
        if (!this.showDropdown) {
            if (this.focused) {
                this.showDropdown = true;
                return;
            }
            else {
                return;
            }
        }
        e.preventDefault();
        const focusedIndex = this.wrstsSelectOptions.findIndex(x => x.focused);
        this.selectIndex(focusedIndex);
        this.showDropdown = false;
    }
    get selectedOption() {
        return this.wrstsSelectOptions.find(x => x.selected);
    }
    get selectedText() {
        return this.selectedOption
            ? this.selectedOption.getSlot().innerText
            : this.placeholder || '';
    }
    componentDidLoad() {
        this.select = this.wrstsSelect.querySelector('select');
        this.wrstsSelectOptions = Array.prototype.slice.call(this.wrstsSelect.querySelectorAll('wrsts-select-option'));
        this.wrstsSelectSelect = this.wrstsSelect.querySelector('.wrsts-select-select');
        this.wrstsSelectOptions.forEach((wrstsSelectOption, index) => {
            wrstsSelectOption.addEventListener('clicked', () => {
                this.selectIndex(index);
            });
            if (wrstsSelectOption.selected) {
                this.selectIndex(index);
            }
        });
    }
    selectIndex(index) {
        this.wrstsSelect.setAttribute('selected-index', index.toString());
    }
    selectValue(value) {
        this.wrstsSelect.setAttribute('selected-value', value);
    }
    selectOptionByIndex(index) {
        this.wrstsSelectOptions.forEach((option, i) => {
            if (i !== index) {
                option.unselect();
                option.unfocus();
            }
            else {
                option.select();
                option.focus();
            }
        });
        this.select.selectedIndex = index;
        this.change.emit();
    }
    selectOptionByValue(value) {
        this.wrstsSelectOptions.forEach((option, i) => {
            if (option.value !== value) {
                option.unselect();
                option.unfocus();
            }
            else {
                option.select();
                option.focus();
                this.select.selectedIndex = i;
            }
        });
        this.change.emit();
    }
    unselectAllOptions() {
        this.wrstsSelectOptions.forEach(o => {
            o.unselect();
            o.unfocus();
        });
    }
    onSelectClicked() {
        this.showDropdown = !this.showDropdown;
    }
    getOptionsVisibilityClass() {
        return this.showDropdown
            ? 'visible'
            : 'hidden';
    }
    render() {
        return (h("div", null,
            h("select", { name: this.name, id: this.id }, this.wrstsSelectOptions.map((wrstsOption) => h("option", { value: wrstsOption.value }, wrstsOption.getSlot().innerText))),
            h("div", { onClick: this.onSelectClicked.bind(this), class: 'wrsts-select-select ' + this.getOptionsVisibilityClass() }, this.selectedText),
            h("div", { class: 'wrsts-select-options ' + this.getOptionsVisibilityClass() },
                h("slot", null))));
    }
    static get is() { return "wrsts-select"; }
    static get properties() { return { "focused": { "type": Boolean, "attr": "focused" }, "id": { "type": String, "attr": "id" }, "name": { "type": String, "attr": "name" }, "placeholder": { "type": String, "attr": "placeholder" }, "search": { "type": Boolean, "attr": "search" }, "selectedIndex": { "type": String, "attr": "selected-index", "watchCallbacks": ["onSelectedIndexChanged"] }, "selectedValue": { "type": String, "attr": "selected-value", "watchCallbacks": ["onSelectedValueChanged"] }, "selectIndex": { "method": true }, "selectValue": { "method": true }, "showDropdown": { "state": true }, "wrstsSelect": { "elementRef": true }, "wrstsSelectOptions": { "state": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-select:**/"; }
}
