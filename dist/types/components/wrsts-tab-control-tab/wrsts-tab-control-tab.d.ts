import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class WrstsTabControlTab {
    wrstsTabControlTab: WrstsTabControlTab & HTMLElement;
    clicked: EventEmitter;
    active: boolean;
    route: string;
    historyTitle: string;
    setActive(): void;
    unsetActive(): void;
    render(): JSX.Element;
}
