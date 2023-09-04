// type TupleToUnion<T extends any[]> = T extends [infer T1, ...infer Rest]
//   ? T1 | TupleToUnion<Rest>
//   : never

type TupleToUnion<T extends any[]> = T[number]

