export declare class WrstsBaseShadow {
    getShadowRoot(): ShadowRoot;
    getSlot(): Element | ShadowRoot;
    getSlotNodes<T extends HTMLElement>(name?: string): T[];
    shadowQuerySelector<T extends HTMLElement>(query: string): T;
    shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[];
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
}
