import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export class WrstsTabControlContents extends WrstsBaseShadow {
    constructor() { super(); }
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control-contents"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "elementRef": { "elementRef": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-contents:**/"; }
}
