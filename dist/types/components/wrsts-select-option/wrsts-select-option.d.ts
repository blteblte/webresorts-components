import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class WrstsSelectOption {
    wrstsSelectOption: WrstsSelectOption & HTMLElement;
    slotElement: HTMLElement;
    value: string;
    index: string;
    selected: boolean;
    focused: boolean;
    hidden: boolean;
    clicked: EventEmitter;
    componentDidLoad(): void;
    getSlot(): HTMLElement;
    select(): void;
    unselect(): void;
    focus(): void;
    unfocus(): void;
    hide(): void;
    unhide(): void;
    getClass(): string;
    render(): JSX.Element;
}
