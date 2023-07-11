// todo: 재도전
type ParseInt<N extends number> = `${N}`

type ReverseString<S extends string> = S extends `${infer F}${infer Rest}` ? `${ReverseString<Rest>}${F}` : S

type MinusOneString<S extends string> = S extends `${infer F extends number}${infer Rest}`
  ? F extends 0
    ? `9${MinusOneString<Rest>}`
    : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][F]}${Rest}`
  : S

type ParseStringToInt<S extends string> = S extends `${infer N extends number}` ? N : never

type RemoveZero<S extends string> = S extends `0${infer Rest}`
  ? Rest extends '' ? S : RemoveZero<Rest>
  : S

type MinusOne<T extends number>
    = ParseStringToInt<RemoveZero<ReverseString<MinusOneString<ReverseString<ParseInt<T>>>>>>

// 1안. Equal<MinusOne<1101>, 1100> 미통과.
// type MinusOne<T extends number, S extends string[] = []>
//     = T extends ['', ...S]['length'] ? S['length'] : MinusOne<T, ['', ...S]>
