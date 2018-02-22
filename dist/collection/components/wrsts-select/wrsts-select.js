export class WrstsSelect {
    constructor() {
        this.wrstsSelectOptions = [];
    }
    onDocumentClick(e) {
        if (e.target !== this.wrstsSelectSelect) {
            if (this.showDropdown)
                this.showDropdown = false;
        }
    }
    get selectedOption() {
        return this.wrstsSelectOptions.find(x => x.selected);
    }
    get selectedText() {
        return this.selectedOption
            ? this.selectedOption.getSlot().innerText
            : '--';
    }
    componentDidLoad() {
        this.wrstsSelectOptions = Array.prototype.slice.call(this.wrstsSelect.querySelectorAll('wrsts-select-option'));
        this.wrstsSelectSelect = this.wrstsSelect.querySelector('.wrsts-select-select');
    }
    onSelectClicked() {
        console.log('select:clicked');
        this.showDropdown = !this.showDropdown;
    }
    render() {
        return (h("div", null,
            h("select", { name: this.name, id: this.id }, this.wrstsSelectOptions.map((wrstsOption) => h("option", { value: wrstsOption.value }, wrstsOption.getSlot().innerText))),
            h("div", { onClick: this.onSelectClicked.bind(this), class: "wrsts-select-select" }, this.selectedText),
            h("div", { class: 'wrsts-select-options ' + (this.showDropdown ? 'visible' : 'hidden') },
                h("slot", null))));
    }
    static get is() { return "wrsts-select"; }
    static get properties() { return { "id": { "type": String, "attr": "id" }, "name": { "type": String, "attr": "name" }, "search": { "type": Boolean, "attr": "search" }, "showDropdown": { "state": true }, "wrstsSelect": { "elementRef": true }, "wrstsSelectOptions": { "state": true } }; }
    static get style() { return "/**style-placeholder:wrsts-select:**/"; }
}
