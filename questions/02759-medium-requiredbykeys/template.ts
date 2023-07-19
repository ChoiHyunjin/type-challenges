type RequiredByKeys<T, K = keyof T> = Combine<{
  [key in keyof T as key extends K ? key : never]-?: T[key]
} & {
  [key in keyof T as key extends K ? never : key]: T[key]
}>
