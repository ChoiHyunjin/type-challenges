type PartialByKeys<T extends object, K = keyof T> = Combine<{
  [key in keyof T as key extends K ? key : never]?: T[key]
} & {
  [key in keyof T as key extends K ? never : key]: T[key]
}>

type Combine<T extends object> = {
  [key in keyof T]: T[key]
}
