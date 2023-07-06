// todo: 다시 풀기
type IsUnion<T, C = T> =
    (T extends T
      ? C extends T ? true : unknown
      : never) extends true
      ? false
      : true
