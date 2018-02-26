import { WrstsCheckbox } from '../../../components/wrsts-checkbox/wrsts-checkbox';
import { SerializationType } from './serialization-type';
import { WrstsTinymce } from '../../../components/wrsts-tinymce/wrsts-tinymce';
import { WrstsSelect } from '../../../components/wrsts-select/wrsts-select';

export class ComponentSerializerResolver {
  /* key */
  public static ResolveKey = resolveKey

  /* values */
  public static ResolveCheckboxValue = resolveCheckboxValue
  public static ResolveTextareaValue = resolveTextareaValue
  public static ResolveSelectValue = resolveSelectValue

  /* data attributes */
  public static ResolveDataAttributes = (obj: any, type: SerializationType) =>
    type === SerializationType.Object
      ? resolveDataAttributesToObj(obj)
      : resolveDataAttributesToArr(obj)
}

function resolveKey(obj: any, i: number) {
  return obj.name || obj.id || i
}

function resolveCheckboxValue(obj: WrstsCheckbox) {
  return obj.checked
}

function resolveTextareaValue(obj: WrstsTinymce) {
  return obj.value
}

function resolveSelectValue(obj: WrstsSelect) {
  return obj.selectedValue
}

function resolveDataAttributesToObj(obj: any) {
  const rArr = resolveDataAttributesToArr(obj)

  const result = {}
  rArr.forEach(el => {
    result[el.name] = el.value
  })
  return result
}

function resolveDataAttributesToArr(obj: any) {
  return [].filter
    .call(obj.attributes, at => /^data-/.test(at.name))
    .map((attr) => {
      const nameCamelCase = attr.name.substr(5).replace(/-(.)/g, (_$0, $1) =>  $1.toUpperCase())
      return  { name: nameCamelCase, value: attr.value }
    })
}
