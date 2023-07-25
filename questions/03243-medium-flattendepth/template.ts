type MinusOne2<T extends number> = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9][T]

type FlattenDepth<T extends any[], N extends number = 1> = N extends 0
  ? T
  : T extends [infer F, ...infer R]
    ? [...(F extends any[]
        ? FlattenDepth<F, MinusOne2<N>> : [F]),
      ...(R extends any[] ? FlattenDepth<R, N> : [R])]
    : T

