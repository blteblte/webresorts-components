import { EventEmitter } from '@stencil/core';
export declare class WrstsSelectOption {
    wrstsSelectOption: WrstsSelectOption & HTMLElement;
    slotElement: HTMLElement;
    value: string;
    selected: boolean;
    clicked: EventEmitter;
    componentDidLoad(): void;
    getSlot(): HTMLElement;
    select(): void;
    unselect(): void;
    render(): JSX.Element;
}
