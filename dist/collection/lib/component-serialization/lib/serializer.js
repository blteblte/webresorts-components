import { SerializationType } from './serialization-type';
import { ComponentSerializerResolver } from './resolvers';
export class ComponentSerializer {
    static SerializeData(collection, type, options) {
        const valueResolver = options.valueResolver;
        let keyResolver = options.keyResolver;
        let dataResolver = options.dataResolver;
        if (!options.keyResolver) {
            keyResolver = ComponentSerializerResolver.ResolveKey;
        }
        if (!options.dataResolver) {
            dataResolver = ComponentSerializerResolver.ResolveDataAttributes;
        }
        switch (type) {
            case SerializationType.Object:
                return serializeCollectionToObject(collection, type, keyResolver, valueResolver, dataResolver);
            case SerializationType.Array:
                return serializeCollectionToArray(collection, type, keyResolver, valueResolver, dataResolver);
            case SerializationType.Default:
                return serializeCollectionToObjectSimple(collection, keyResolver, valueResolver);
        }
    }
    static Serialize(el, type, options) {
        return this.SerializeData([el], type, options);
    }
}
function toObjectWithName(name, value, data) {
    return { name, value, data };
}
function toObjectWithotName(value, data) {
    return { value, data };
}
function serializeCollectionToArray(collection, type, resolveKey, resolveValue, resolveData) {
    return collection.reduce((p, c, i) => {
        p[i] = toObjectWithName(resolveKey(c, i), resolveValue(c), resolveData(c, type));
        return p;
    }, []);
}
function serializeCollectionToObject(collection, type, resolveKey, resolveValue, resolveData) {
    return collection.reduce((p, c, i) => {
        p[resolveKey(c, i)] = toObjectWithotName(resolveValue(c), resolveData(c, type));
        return p;
    }, {});
}
function serializeCollectionToObjectSimple(collection, resolveKey, resolveValue) {
    return collection.reduce((p, c, i) => {
        p[resolveKey(c, i)] = resolveValue(c);
        return p;
    }, {});
}
