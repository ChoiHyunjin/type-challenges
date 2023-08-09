// todo: 다시 풀기
type Chunk<T extends any[], N extends number, V extends any[] = []> =
    V['length'] extends N ? [V, ...Chunk<T, N>]
      : T extends [infer T1, ...infer RestT]
        ? Chunk<RestT, N, [...V, T1]>
        : V extends [] ? V : [V]
