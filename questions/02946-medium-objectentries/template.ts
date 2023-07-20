// todo: 재도전
// type ObjectEntries<T, K = keyof Required<T>> = K extends keyof Required<T>
//   ? [K, RemoveUndefined<T[K]>] : never
//
// type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>

type ObjectEntries<T, U = Required<T>> = {
  [K in keyof U]: [K, U[K] extends never ? undefined : U[K]]
}[keyof U]
