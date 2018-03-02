import '../../stencil.core';
export declare type WrstsTabControlContentType = WrstsTabControlContent & HTMLElement;
export declare class WrstsTabControlContent {
    getShadowRoot(): ShadowRoot;
    getSlot(): Element;
    getSlotNodes<T extends HTMLElement>(name?: string): T[];
    shadowQuerySelector<T extends HTMLElement>(query: string): T;
    shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[];
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
    elementRef: WrstsTabControlContentType;
    active: boolean;
    setActive(): void;
    unsetActive(): void;
    render(): JSX.Element;
}
