import { EventEmitter } from '@stencil/core';
export declare class WrstsTabControlTab {
    wrstsTabControlTab: WrstsTabControlTab & HTMLElement;
    clicked: EventEmitter;
    active: boolean;
    setActive(): void;
    unsetActive(): void;
    render(): JSX.Element;
}
