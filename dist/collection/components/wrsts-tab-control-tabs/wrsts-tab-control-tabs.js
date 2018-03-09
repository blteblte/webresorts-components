import { Helpers } from '../helpers';
export class WrstsTabControlTabs {
    getSlotElementsByTagName(tagName) {
        return Helpers.getSlotElementsByTagName.bind(this)(tagName);
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "elementRef": { "elementRef": true }, "getSlotElementsByTagName": { "method": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-tabs:**/"; }
}
