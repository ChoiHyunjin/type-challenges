type All<T extends any[], U> = T extends [infer T1, ...infer Rest]
  ? (<V>() => V extends T1 ? 1 : 2) extends (<V>() => V extends U ? 1 : 2)
      ? All<Rest, U>
      : false
  : true
