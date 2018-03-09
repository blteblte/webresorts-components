import '../../stencil.core';
import { GetSlotElementsByTagName } from '../helpers';
export declare type WrstsTabControlTabsType = WrstsTabControlTabs & HTMLElement;
export declare class WrstsTabControlTabs implements GetSlotElementsByTagName {
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
    elementRef: WrstsTabControlTabsType;
    render(): JSX.Element;
}
