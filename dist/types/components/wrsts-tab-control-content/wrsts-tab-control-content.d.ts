import '../../stencil.core';
export declare type WrstsTabControlContentType = WrstsTabControlContent & HTMLElement;
export declare class WrstsTabControlContent {
    elementRef: WrstsTabControlContentType;
    active: boolean;
    setActive(): void;
    unsetActive(): void;
    render(): JSX.Element;
}
