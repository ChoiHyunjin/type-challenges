export type Permutation<T, F=T> =
    [T] extends [never]
      ? []
      : F extends F
        ? [F, ...Permutation<Exclude<T, F>>]
        : never
