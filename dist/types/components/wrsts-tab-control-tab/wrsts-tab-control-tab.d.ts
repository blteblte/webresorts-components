import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class WrstsTabControlTab {
    clicked: EventEmitter;
    active: boolean;
    route: string;
    historyTitle: string;
    setActive(): void;
    unsetActive(): void;
    render(): JSX.Element;
}
