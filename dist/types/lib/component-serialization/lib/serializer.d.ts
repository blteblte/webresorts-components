import { SerializationType } from './serialization-type';
export interface ComponentCollectionValueData {
    name: string;
    value: any;
    data: any;
}
export interface ComponentSerializationOptions<T> {
    valueResolver: (obj: T) => any;
    keyResolver?: (obj: T, i: number) => string;
    dataResolver?: (obj: T, type: SerializationType) => any;
}
export declare class ComponentSerializer {
    static SerializeData<T>(collection: T[], type: SerializationType, options: ComponentSerializationOptions<T>): {};
    static Serialize<T>(el: T, type: SerializationType, options: ComponentSerializationOptions<T>): {};
}
