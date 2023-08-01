type Flip<T> = {
  [key in keyof T as T[key] extends (string | boolean | number) ? `${T[key]}` : never]: key
}
