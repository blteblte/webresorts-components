import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare type WrstsTabControlTabType = WrstsTabControlTab & HTMLElement;
export declare class WrstsTabControlTab {
    elementRef: WrstsTabControlTabType;
    clicked: EventEmitter;
    active: boolean;
    route: string;
    historyTitle: string;
    setActive(): void;
    unsetActive(): void;
    render(): JSX.Element;
}
