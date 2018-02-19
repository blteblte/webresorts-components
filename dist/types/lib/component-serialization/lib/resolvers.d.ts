import { WrstsCheckbox } from '../../../components/wrsts-checkbox/wrsts-checkbox';
import { SerializationType } from './serialization-type';
export declare class ComponentSerializerResolver {
    static ResolveKey: (obj: any, i: number) => any;
    static ResolveCheckboxValue: typeof resolveCheckboxValue;
    static ResolveDataAttributes: (obj: any, type: SerializationType) => any;
}
export declare function resolveCheckboxValue(obj: WrstsCheckbox): boolean;
export declare function resolveDataAttributesToObj(obj: any): {};
export declare function resolveDataAttributesToArr(obj: any): any;
