import { EventEmitter } from '@stencil/core';
import { SerializationType } from '../../lib/component-serialization';
export declare class WrstsTinymce {
    wrstsTinymce: WrstsTinymce & HTMLElement;
    textarea: HTMLElement;
    tinymce: any;
    editor: any;
    tinyMceOptions: {};
    change: EventEmitter;
    load: EventEmitter;
    id: string;
    name: string;
    value: string;
    width: string;
    height: string;
    baseUrl: string;
    readonly h: number;
    readonly w: number;
    componentDidLoad(): void;
    save(e: any, editor: any): void;
    getNativeElement(): HTMLElement;
    getTinyMce(): any;
    getEditor(): any;
    toJson(type?: SerializationType): {};
    render(): JSX.Element;
}
