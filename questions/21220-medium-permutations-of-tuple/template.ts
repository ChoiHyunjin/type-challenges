type PermutationsOfTuple<T extends unknown[], R extends unknown[] = []> = T extends [infer T1, ...infer Rest]
  ? PermutationsOfTuple<Rest, Permutations<T1, R>>
  : R

type Permutations<T, A extends unknown[], P extends unknown[] = []> =
    A['length'] extends P['length']
      ? [...A, T]
      : PutAt<T, A, P['length']> | Permutations<T, A, [...P, unknown]>

type PutAt<T, A extends unknown[], P extends number, Prev extends unknown[] = []> =
    P extends Prev['length'] ? [...Prev, T, ...A] : A extends [infer A1, ...infer Rest]
      ? PutAt<T, Rest, P, [...Prev, A1]>
      : never
