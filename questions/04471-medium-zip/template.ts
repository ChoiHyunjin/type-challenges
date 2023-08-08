type Zip<T extends any[], U extends any[]> =
    [T, U] extends [[infer T1, ...infer RestT], [infer U1, ...infer RestU]]
      ? [[T1, U1], ...Zip<RestT, RestU>]
      : []

// type Zip<T extends any[], U extends any[]> = T extends [unknown, ...infer TR]
//     ? U extends [unknown, ...infer UR]
//         ? [[T[0], U[0]], ...Zip<TR, UR>]
//         : []
//     : []

// type Zip<T extends any[], U extends any[], V extends any[] = []> =
//     V['length'] extends T['length'] | U['length']
//       ? V
//       : Zip<T, U, [...V, [T[V['length']], U[V['length']]]]>

