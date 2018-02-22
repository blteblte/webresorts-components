import { WrstsSelectOption } from '../wrsts-select-option/wrsts-select-option';
export declare class WrstsSelect {
    wrstsSelect: WrstsSelect & HTMLElement;
    select: HTMLElement;
    wrstsSelectSelect: HTMLElement;
    id: string;
    name: string;
    search: boolean;
    wrstsSelectOptions: WrstsSelectOption[];
    showDropdown: boolean;
    onDocumentClick(e: any): void;
    readonly selectedOption: WrstsSelectOption;
    readonly selectedText: string;
    componentDidLoad(): void;
    onSelectClicked(): void;
    render(): JSX.Element;
}
