import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { WrstsTabControlTab } from '../wrsts-tab-control-tab/wrsts-tab-control-tab';
import { WrstsTabControlContent } from '../wrsts-tab-control-content/wrsts-tab-control-content';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export declare type WrstsTabControlType = WrstsTabControl & HTMLElement;
export declare class WrstsTabControl extends WrstsBaseShadow {
    constructor();
    elementRef: WrstsTabControlType;
    tabs: (WrstsTabControlTab & HTMLElement)[];
    contents: (WrstsTabControlContent & HTMLElement)[];
    locationHash: string;
    tabUrl: string;
    change: EventEmitter;
    componentDidLoad(): void;
    bind(): void;
    navigateByHash(): void;
    setTab(index: number): void;
    render(): JSX.Element;
}
