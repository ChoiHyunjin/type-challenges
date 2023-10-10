// 实现 Combs
type Combs<T extends any[]> = T extends [infer T1 extends string, ...infer RestT extends string[]]
  ? RestT['length'] extends 0
    ? never
    : `${T1} ${RestT[number]}` | Combs<RestT>
  : never

// type Combs<T extends any[]> = T extends [infer T1 extends string, ...infer RestT extends string[]]
//     ? RestT['length'] extends 0
//         ? never
//         : Modify<T1, RestT> | Combs<RestT>
//     : never
//
// type Modify<T extends string, Candidates extends string[]>
//     = Candidates extends [infer C1 extends string, ...infer Rest extends string[]]
//     ? `${T} ${C1}` | Modify<T, Rest>
//     : never
