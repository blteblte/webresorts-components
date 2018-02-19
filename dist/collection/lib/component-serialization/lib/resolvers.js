import { SerializationType } from './serialization-type';
export class ComponentSerializerResolver {
}
/* key */
ComponentSerializerResolver.ResolveKey = resolveKey;
/* values */
ComponentSerializerResolver.ResolveCheckboxValue = resolveCheckboxValue;
/* data attributes */
ComponentSerializerResolver.ResolveDataAttributes = (obj, type) => type === SerializationType.Object
    ? resolveDataAttributesToObj(obj)
    : resolveDataAttributesToArr(obj);
function resolveKey(obj, i) {
    return obj.name || obj.id || i;
}
export function resolveCheckboxValue(obj) {
    return obj.checked;
}
export function resolveDataAttributesToObj(obj) {
    const rArr = resolveDataAttributesToArr(obj);
    const result = {};
    rArr.forEach(el => {
        result[el.name] = el.value;
    });
    return result;
}
export function resolveDataAttributesToArr(obj) {
    return [].filter
        .call(obj.attributes, at => /^data-/.test(at.name))
        .map((attr) => {
        const nameCamelCase = attr.name.substr(5).replace(/-(.)/g, (_$0, $1) => $1.toUpperCase());
        return { name: nameCamelCase, value: attr.value };
    });
}
