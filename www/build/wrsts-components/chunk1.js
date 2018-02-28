/*! Built with http://stenciljs.com */
const { h } = window.WrstsComponents;

var SerializationType;
(function (SerializationType) {
    SerializationType[SerializationType["Default"] = 0] = "Default";
    SerializationType[SerializationType["Object"] = 1] = "Object";
    SerializationType[SerializationType["Array"] = 2] = "Array";
})(SerializationType || (SerializationType = {}));

class ComponentSerializerResolver {
}
/* key */
ComponentSerializerResolver.ResolveKey = resolveKey;
/* values */
ComponentSerializerResolver.ResolveCheckboxValue = resolveCheckboxValue;
ComponentSerializerResolver.ResolveTextareaValue = resolveTextareaValue;
ComponentSerializerResolver.ResolveSelectValue = resolveSelectValue;
ComponentSerializerResolver.ResolveInputValue = resolveInputValue;
/* data attributes */
ComponentSerializerResolver.ResolveDataAttributes = (obj, type) => type === SerializationType.Object
    ? resolveDataAttributesToObj(obj)
    : resolveDataAttributesToArr(obj);
function resolveKey(obj, i) {
    return obj.name || obj.id || i;
}
function resolveCheckboxValue(obj) {
    return obj.checked;
}
function resolveTextareaValue(obj) {
    return obj.value;
}
function resolveSelectValue(obj) {
    return obj.selectedValue;
}
function resolveInputValue(obj) {
    return obj.input.value;
}
function resolveDataAttributesToObj(obj) {
    const rArr = resolveDataAttributesToArr(obj);
    const result = {};
    rArr.forEach(el => {
        result[el.name] = el.value;
    });
    return result;
}
function resolveDataAttributesToArr(obj) {
    return [].filter
        .call(obj.attributes, at => /^data-/.test(at.name))
        .map((attr) => {
        const nameCamelCase = attr.name.substr(5).replace(/-(.)/g, (_$0, $1) => $1.toUpperCase());
        return { name: nameCamelCase, value: attr.value };
    });
}

class ComponentSerializer {
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

export { ComponentSerializer, ComponentSerializerResolver };
