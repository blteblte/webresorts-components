import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { BaseShadowComponent } from '../../lib/base-shadow-component';
export declare type WrstsSelectOptionType = WrstsSelectOption & HTMLElement;
export declare class WrstsSelectOption extends BaseShadowComponent<WrstsSelectOptionType> {
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
