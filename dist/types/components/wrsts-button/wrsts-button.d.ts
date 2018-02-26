import { WrstsJsonForm } from '../wrsts-json-form/wrsts-json-form';
export declare class WrstsButton {
    formId: string;
    wrstsJsonForm: WrstsJsonForm;
    readonly hasForm: boolean;
    componentDidLoad(): void;
    onClick(e: any): void;
    render(): JSX.Element;
}
