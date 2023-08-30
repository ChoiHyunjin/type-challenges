type Subsequence<T extends any[]> = T extends [infer T1, ...infer Rest]
  ? AddValue<Subsequence<Rest>, T1>
  : []

type AddValue<T extends any[], V> = T extends T
  ? T | [V, ...T]
  : never
