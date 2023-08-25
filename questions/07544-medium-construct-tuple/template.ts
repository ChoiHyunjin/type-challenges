type ConstructTuple<L extends number, Answer extends unknown[] = [], S extends string = `${L}`> =
    S extends `${infer S1 extends string}${infer Rest}`
      ? ConstructTuple<L, AddNTime<S1, Answer>, Rest>
      : Answer

type AddNTime<N extends string, A extends unknown[] = [], Counter extends any[] = []> =
    `${Counter['length']}` extends N
      ? Multiple10<A>
      : [...AddNTime<N, A, [...Counter, 0]>, unknown]

type Multiple10<N extends unknown[], Count extends any[] = []> =
    Count['length'] extends 9 ? N : [...Multiple10<N, [...Count, 0]>, ...N]

// 1차
// type ConstructTuple<L extends number, Answer extends unknown[] = []> =
//  Answer['length'] extends L ? Answer : ConstructTuple<L, [...Answer, unknown]>
