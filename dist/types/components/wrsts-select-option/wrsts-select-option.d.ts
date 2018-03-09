import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export declare type WrstsSelectOptionType = WrstsSelectOption & HTMLElement;
export declare class WrstsSelectOption extends WrstsBaseShadow {
    constructor();
    getShadowRoot(): ShadowRoot;
    getSlot(): Element | ShadowRoot;
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
