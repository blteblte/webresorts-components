import { WrstsCheckbox } from '../../../components/wrsts-checkbox/wrsts-checkbox';
import { SerializationType } from './serialization-type';
import { WrstsTinymce } from '../../../components/wrsts-tinymce/wrsts-tinymce';
import { WrstsSelect } from '../../../components/wrsts-select/wrsts-select';
export declare class ComponentSerializerResolver {
    static ResolveKey: (obj: any, i: number) => any;
    static ResolveCheckboxValue: (obj: WrstsCheckbox) => boolean;
    static ResolveTextareaValue: (obj: WrstsTinymce) => string;
    static ResolveSelectValue: (obj: WrstsSelect) => string;
    static ResolveDataAttributes: (obj: any, type: SerializationType) => any;
}
