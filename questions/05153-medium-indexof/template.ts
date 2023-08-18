type IndexOf<T, U, V extends number[] = []> = T extends [infer T1, ...infer Rest]
  ? (<W>() => W extends T1 ? 0 : 1) extends (<W>() => W extends U ? 0 : 1)
      ? V['length']
      : IndexOf<Rest, U, [...V, 0]>
  : -1

// type IndexOf<T, U, V extends number[] = []> = T extends [infer T1, ...infer Rest]
//   ? [T1, U] extends [U, T1] ? V['length'] : IndexOf<Rest, U, [...V, 0]>
//   : -1

// type IndexOf<T, U, V extends number[] = []> = T extends [infer T1, ...infer Rest]
//     ? T1 extends U ? V['length'] : IndexOf<Rest, U, [...V, 0]>
//     : -1
