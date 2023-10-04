type DeepMutable<T extends object> = {
  -readonly [key in keyof T]: T[key] extends Function ? T[key] : T[key] extends object ? DeepMutable<T[key]> : T[key]
}
