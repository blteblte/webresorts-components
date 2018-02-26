import { SerializationType } from '../../lib/component-serialization';
export declare class WrstsJsonForm {
    wrstsJsonForm: WrstsJsonForm & HTMLElement;
    formElements: any[];
    form: HTMLFormElement;
    action: string;
    method: string;
    target: string;
    ajax: boolean;
    componentDidLoad(): void;
    rebind(): void;
    toJson(type?: SerializationType): any;
    submit(callback?: any, type?: SerializationType): void;
    render(): JSX.Element;
}
