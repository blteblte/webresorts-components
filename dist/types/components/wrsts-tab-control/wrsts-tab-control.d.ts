import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { WrstsTabControlTab } from '../wrsts-tab-control-tab/wrsts-tab-control-tab';
import { WrstsTabControlContent } from '../wrsts-tab-control-content/wrsts-tab-control-content';
export declare class WrstsTabControl {
    wrstsTabControl: WrstsTabControl & HTMLElement;
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
