import { SerializationType } from './serialization-type';
import { ComponentSerializerResolver } from './resolvers';

export interface ComponentCollectionValueData {
  name: string,
  value: any,
  data: any
}

export interface ComponentSerializationOptions<T> {
  valueResolver: (obj: T) => any
  keyResolver?: (obj: T, i: number) => string
  dataResolver?: (obj: T, type: SerializationType) => any
}

export class ComponentSerializer {
  public static SerializeData<T>(
      collection: T[]
    , type: SerializationType
    , options: ComponentSerializationOptions<T>
  ) {
    const valueResolver = options.valueResolver
    let keyResolver = options.keyResolver
    let dataResolver = options.dataResolver

    if (!options.keyResolver) {
      keyResolver = ComponentSerializerResolver.ResolveKey
    }
    if (!options.dataResolver) {
      dataResolver = ComponentSerializerResolver.ResolveDataAttributes
    }

    switch(type) {
      case SerializationType.Object:
        return serializeCollectionToObject(collection, type, keyResolver, valueResolver, dataResolver)
      case SerializationType.Array:
        return serializeCollectionToArray(collection, type, keyResolver, valueResolver, dataResolver)
      case SerializationType.Default:
        return serializeCollectionToObjectSimple(collection, keyResolver, valueResolver)
    }
  }

  public static Serialize<T>(
      el: T
    , type: SerializationType
    , options: ComponentSerializationOptions<T>
  ) {
    return this.SerializeData([el], type, options)
  }
}

function toObjectWithName(name, value, data) {
  return { name, value, data }
}

function toObjectWithotName(value, data) {
  return { value, data }
}

function serializeCollectionToArray<T>(
    collection:   T[]
  , type: SerializationType
  , resolveKey:   (obj: T, i: number) => string
  , resolveValue: (obj: T) => any
  , resolveData:  (obj: T, type: SerializationType) => any
) {
  return collection.reduce((p, c, i) => {
    p[i] = toObjectWithName(resolveKey(c, i), resolveValue(c), resolveData(c, type))
    return p
  }, [] as ComponentCollectionValueData[])
}

function serializeCollectionToObject<T>(
    collection:   T[]
  , type: SerializationType
  , resolveKey:   (obj: T, i: number) => string
  , resolveValue: (obj: T) => any
  , resolveData:  (obj: T, type: SerializationType) => any
) {
  return collection.reduce((p, c, i) => {
    p[resolveKey(c, i)] = toObjectWithotName(resolveValue(c), resolveData(c, type))
    return p
  }, {})
}

function serializeCollectionToObjectSimple<T>(
    collection:   T[]
  , resolveKey:   (obj: T, i: number) => string
  , resolveValue: (obj: T) => any
) {
  return collection.reduce((p, c, i) => {
    p[resolveKey(c, i)] = resolveValue(c)
    return p
  }, {})
}
