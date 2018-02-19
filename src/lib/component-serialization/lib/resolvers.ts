import { WrstsCheckbox } from '../../../components/wrsts-checkbox/wrsts-checkbox';
import { SerializationType } from './serialization-type';

export class ComponentSerializerResolver {
  /* key */
  public static ResolveKey = resolveKey

  /* values */
  public static ResolveCheckboxValue = resolveCheckboxValue

  /* data attributes */
  public static ResolveDataAttributes = (obj: any, type: SerializationType) =>
    type === SerializationType.Object
      ? resolveDataAttributesToObj(obj)
      : resolveDataAttributesToArr(obj)
}

function resolveKey(obj: any, i: number) {
  return obj.name || obj.id || i
}

export function resolveCheckboxValue(obj: WrstsCheckbox) {
  return obj.checked
}

export function resolveDataAttributesToObj(obj: any) {
  const rArr = resolveDataAttributesToArr(obj)

  const result = {}
  rArr.forEach(el => {
    result[el.name] = el.value
  })
  return result
}

export function resolveDataAttributesToArr(obj: any) {
  return [].filter
    .call(obj.attributes, at => /^data-/.test(at.name))
    .map((attr) => {
      const nameCamelCase = attr.name.substr(5).replace(/-(.)/g, (_$0, $1) =>  $1.toUpperCase())
      return  { name: nameCamelCase, value: attr.value }
    })
}
