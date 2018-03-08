import '../../stencil.core';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export declare type WrstsTabControlContentsType = WrstsTabControlContents & HTMLElement;
export declare class WrstsTabControlContents extends WrstsBaseShadow {
    constructor();
    elementRef: WrstsTabControlContentsType;
    render(): JSX.Element;
}
