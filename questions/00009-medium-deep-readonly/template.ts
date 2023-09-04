type DeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never ? T[key] : DeepReadonly<T[key]>
}

// type DeepReadonly<T extends object> = {
//   readonly [key in keyof T]: T[key] extends object ? DeepReadonly<T[key]> : T[key]
// }
