import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { WrstsTabControlTab } from '../wrsts-tab-control-tab/wrsts-tab-control-tab';
import { WrstsTabControlContent } from '../wrsts-tab-control-content/wrsts-tab-control-content';
export declare type WrstsTabControlType = WrstsTabControl & HTMLElement;
export declare class WrstsTabControl {
    getShadowRoot(): ShadowRoot;
    getSlot(): Element;
    getSlotNodes<T extends HTMLElement>(name?: string): T[];
    shadowQuerySelector<T extends HTMLElement>(query: string): T;
    shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[];
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
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
