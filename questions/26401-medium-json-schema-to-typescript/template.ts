type JSONType = 'string' | 'number' | 'boolean' | 'array' | 'object'
type JSONMap = {
  string: string
  number: number
  boolean: boolean
}
type JSONSchema = {
  type: JSONType
  enum?: unknown[]
  items?: JSONSchema
  properties?: Record<string, JSONSchema>
  required?: string[]
}

type CombineObjects<T extends object, K extends object> = {
  [key in keyof (T & K)]: (T & K)[key]
}

type RequiredTS<T extends object, K extends (keyof T)> =
      CombineObjects<
          { [key in keyof T as key extends K ? key : never]-?: T[key] },
          { [key in keyof T as key extends K ? never : key]: T[key] }>

type JSONSchema2TS<T extends JSONSchema> =
    T['type'] extends 'object'
      ? T['properties'] extends object
        ? T['required'] extends string[]
          ? RequiredTS<{ [key in keyof T['properties']]?: JSONSchema2TS<T['properties'][key]> }, T['required'][number]>
          : { [key in keyof T['properties']]?: JSONSchema2TS<T['properties'][key]> }
        : Record<string, unknown>

      : T['type'] extends 'array'
        ? T['items'] extends JSONSchema
          ? JSONSchema2TS<T['items']>[]
          : unknown[]

        : T['type'] extends 'string' | 'number' | 'boolean'
          ? T['enum'] extends unknown[]
            ? T['enum'][number]
            : JSONMap[T['type']]
          : unknown
