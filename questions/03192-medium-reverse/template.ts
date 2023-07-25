type Reverse<T extends string[]> = T extends [infer A, ...infer B]
  ? B extends any[] ? [...Reverse<B>, A] : T
  : T
