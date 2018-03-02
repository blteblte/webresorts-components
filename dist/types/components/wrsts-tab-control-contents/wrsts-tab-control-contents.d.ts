import '../../stencil.core';
export declare type WrstsTabControlContentsType = WrstsTabControlContents & HTMLElement;
export declare class WrstsTabControlContents {
    getShadowRoot(): ShadowRoot;
    getSlot(): Element;
    getSlotNodes<T extends HTMLElement>(name?: string): T[];
    shadowQuerySelector<T extends HTMLElement>(query: string): T;
    shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[];
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
    elementRef: WrstsTabControlContentsType;
    render(): JSX.Element;
}
