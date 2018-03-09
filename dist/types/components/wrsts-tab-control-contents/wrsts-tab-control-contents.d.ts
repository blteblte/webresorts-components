import '../../stencil.core';
import { GetSlotElementsByTagName } from '../helpers';
export declare type WrstsTabControlContentsType = WrstsTabControlContents & HTMLElement;
export declare class WrstsTabControlContents implements GetSlotElementsByTagName {
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
    elementRef: WrstsTabControlContentsType;
    render(): JSX.Element;
}
