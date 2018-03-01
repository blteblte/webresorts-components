export declare abstract class BaseShadowComponent<X extends HTMLElement> {
    abstract elementRef: X;
    readonly ShadowRoot: ShadowRoot;
    readonly Slot: Element;
    readonly SlotNodes: HTMLElement[];
    getSlotNodes<T extends HTMLElement>(name?: string): T[];
    shadowQuerySelector<T extends HTMLElement>(query: string): T;
    shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[];
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
}
