type Without<T, U> = T extends [infer T1, ...infer Rest]
  ? U extends any[]
    ? T1 extends U[number] ? Without<Rest, U> : [T1, ...Without<Rest, U>]
    : T1 extends U ? Without<Rest, U> : [T1, ...Without<Rest, U>]
  : T
