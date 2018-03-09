import { Helpers } from '../helpers';
export class WrstsTabControlContents {
    getSlotElementsByTagName(tagName) {
        return Helpers.getSlotElementsByTagName.bind(this)(tagName);
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control-contents"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "elementRef": { "elementRef": true }, "getSlotElementsByTagName": { "method": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-contents:**/"; }
}
