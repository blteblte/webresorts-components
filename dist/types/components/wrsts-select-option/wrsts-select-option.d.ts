import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare type WrstsSelectOptionType = WrstsSelectOption & HTMLElement;
export declare class WrstsSelectOption {
    getShadowRoot(): ShadowRoot;
    getSlot(): Element;
    getSlotNodes<T extends HTMLElement>(name?: string): T[];
    shadowQuerySelector<T extends HTMLElement>(query: string): T;
    shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[];
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
    elementRef: WrstsSelectOptionType;
    value: string;
    index: string;
    selected: boolean;
    focused: boolean;
    hidden: boolean;
    clicked: EventEmitter;
    select(): void;
    unselect(): void;
    focus(): void;
    unfocus(): void;
    hide(): void;
    unhide(): void;
    getClass(): string;
    render(): JSX.Element;
}
