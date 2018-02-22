import { EventEmitter } from '@stencil/core';
export declare class WrstsSelectOption {
    wrstsSelectOption: WrstsSelectOption & HTMLElement;
    slotElement: HTMLElement;
    value: string;
    selected: boolean;
    clicked: EventEmitter;
    componentDidLoad(): void;
    getSlot(): HTMLElement;
    render(): JSX.Element;
}
