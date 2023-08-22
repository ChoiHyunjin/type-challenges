type Unique<T, U extends any[] = []> = T extends [infer T1, ...infer Rest]
  ? Unique<Rest, Has<U, T1> extends true ? U : [...U, T1]>
  : U

type Has<T extends any[], U> = T extends [infer T1, ...infer Rest]
  ? (<W>() => W extends T1 ? 0 : 1) extends(<W>() => W extends U ? 0 : 1)
      ? true
      : Has<Rest, U>
  : false
