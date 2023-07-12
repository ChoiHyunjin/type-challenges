// todo: 다시 풀기
type RemoveIndexSignature<T, P = PropertyKey> = {
  [key in keyof T as P extends key ? never : key extends P ? key : never]: T[key]
}
