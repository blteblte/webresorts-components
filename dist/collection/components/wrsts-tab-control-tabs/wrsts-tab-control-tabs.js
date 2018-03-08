var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export class WrstsTabControlTabs extends WrstsBaseShadow {
    constructor() { super(); }
    getSlotElementsByTagName(tagName) {
        return this.getSlotNodes().filter(o => o.tagName === tagName.toUpperCase());
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "elementRef": { "elementRef": true }, "getSlotElementsByTagName": { "method": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tab-control-tabs:**/"; }
}
__decorate([
    PPP()
], WrstsTabControlTabs.prototype, "getSlotElementsByTagName", null);
function PPP() {
    return function (target, propertyKey, descriptor) {
        console.log('PPP', target);
        console.log('PPP', propertyKey);
        console.log('PPP', descriptor);
    };
}
