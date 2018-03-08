import '../../stencil.core';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export declare type WrstsTabControlTabsType = WrstsTabControlTabs & HTMLElement;
export declare class WrstsTabControlTabs extends WrstsBaseShadow {
    constructor();
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
    elementRef: WrstsTabControlTabsType;
    render(): JSX.Element;
}
