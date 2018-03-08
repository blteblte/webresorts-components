import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export declare type WrstsTabControlTabType = WrstsTabControlTab & HTMLElement;
export declare class WrstsTabControlTab extends WrstsBaseShadow {
    elementRef: WrstsTabControlTabType;
    clicked: EventEmitter;
    active: boolean;
    route: string;
    historyTitle: string;
    setActive(): void;
    unsetActive(): void;
    render(): JSX.Element;
}
