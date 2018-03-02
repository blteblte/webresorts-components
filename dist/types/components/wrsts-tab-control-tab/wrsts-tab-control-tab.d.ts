import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare type WrstsTabControlTabType = WrstsTabControlTab & HTMLElement;
export declare class WrstsTabControlTab {
    getShadowRoot(): ShadowRoot;
    getSlot(): Element;
    getSlotNodes<T extends HTMLElement>(name?: string): T[];
    shadowQuerySelector<T extends HTMLElement>(query: string): T;
    shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[];
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
    elementRef: WrstsTabControlTabType;
    clicked: EventEmitter;
    active: boolean;
    route: string;
    historyTitle: string;
    setActive(): void;
    unsetActive(): void;
    render(): JSX.Element;
}
