import '../../stencil.core';
export declare type WrstsTabControlTabsType = WrstsTabControlTabs & HTMLElement;
export declare class WrstsTabControlTabs {
    getShadowRoot(): ShadowRoot;
    getSlot(): Element;
    getSlotNodes<T extends HTMLElement>(name?: string): T[];
    shadowQuerySelector<T extends HTMLElement>(query: string): T;
    shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[];
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
    elementRef: WrstsTabControlTabsType;
    render(): JSX.Element;
}
