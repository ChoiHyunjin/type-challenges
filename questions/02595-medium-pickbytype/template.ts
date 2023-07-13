// todo: 재도전
type PickByType<T extends object, U> = {
  [key in keyof T as T[key] extends U ? key : never]: U
}
