import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { WrstsSelectOptionType } from '../wrsts-select-option/wrsts-select-option';
import { SerializationType } from '../../lib/component-serialization';
export declare type WrstsSelectType = WrstsSelect & HTMLElement;
export declare class WrstsSelect {
    getShadowRoot(): ShadowRoot;
    getSlot(): Element;
    getSlotNodes<T extends HTMLElement>(name?: string): T[];
    shadowQuerySelector<T extends HTMLElement>(query: string): T;
    shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[];
    getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[];
    elementRef: WrstsSelectType;
    select: HTMLSelectElement;
    wrstsSelectSelect: HTMLElement;
    input: HTMLInputElement;
    setProp: number;
    change: EventEmitter;
    id: string;
    name: string;
    placeholder: string;
    search: boolean;
    selectedIndex: string;
    onSelectedIndexChanged(newValue: any, oldValue: any): void;
    selectedValue: string;
    onSelectedValueChanged(newValue: any, oldValue: any): void;
    focused: boolean;
    wrstsSelectOptions: WrstsSelectOptionType[];
    showDropdown: boolean;
    onDocumentClick(e: any): void;
    handleUp(e: any): void;
    handleDown(e: any): void;
    handleEnter(e: any): void;
    handleEsc(e: any): void;
    readonly selectedOption: WrstsSelectOptionType;
    readonly selectedText: string | HTMLElement[];
    componentDidLoad(): void;
    /**
     * this should occur automatically - if <slot /> get's changed
     *  ... how do we look for a <slot /> changes?
     */
    bind(): void;
    selectIndex(index: number): void;
    selectValue(value: string): void;
    private selectOptionByIndex(index);
    private selectOptionByValue(value);
    private unselectAllOptions();
    onSelectClicked(): void;
    toggleDropdown(forceState?: boolean): void;
    getOptionsVisibilityClass(): "hidden" | "visible";
    handleSearch(e: any): void;
    toJson(type?: SerializationType): {};
    render(): JSX.Element;
}
