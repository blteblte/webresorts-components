import '../../stencil.core';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export declare type WrstsTabControlContentType = WrstsTabControlContent & HTMLElement;
export declare class WrstsTabControlContent extends WrstsBaseShadow {
    constructor();
    elementRef: WrstsTabControlContentType;
    active: boolean;
    setActive(): void;
    unsetActive(): void;
    render(): JSX.Element;
}
