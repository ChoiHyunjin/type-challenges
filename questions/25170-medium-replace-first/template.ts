type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [infer T1, ...infer Rest]
  ? T1 extends S
    ? [R, ...Rest]
    : [T1, ...ReplaceFirst<Rest, S, R>]
  : []
