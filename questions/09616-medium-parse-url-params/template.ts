type SplitSlash<T extends string> = T extends `${infer Rest1}/${infer Rest2}`
  ? [Rest1, ...SplitSlash<Rest2>]
  : [T]

type ParseUrlParams<T extends string, Splited extends string[] = SplitSlash<T>> =
    Splited extends [infer S1, ...infer Rest extends string[]]
      ? (S1 extends `:${infer Word}` ? Word : never) | ParseUrlParams<T, Rest>
      : never

// type ParseUrlParams<T extends string, Temp extends string = '', Result extends string = never> =
//     T extends `${infer T1}${infer T2}${infer Rest}`
//       ? T1 extends '/'
//         ? ParseUrlParams<`${T2}${Rest}`, '', Result | Temp>
//         : T1 extends ':'
//           ? ParseUrlParams<Rest, T2, Result>
//           : ParseUrlParams<`${T2}${Rest}`, Temp extends '' ? '' : `${Temp}${T1}`, Result>
//       : Temp extends ''
//         ? Exclude<Result, ''>
//         : ParseUrlParams<'', '', T extends '/' ? Temp : `${Temp}${T}` | Result>

type T1 = ParseUrlParams<'posts/:id/:user'>
type T2 = ParseUrlParams<'posts/:id'>
type T3 = ParseUrlParams<'posts/:id/'>
type T4 = ParseUrlParams<'posts/:id/:user/like'>
type T5 = ParseUrlParams<':like'>

type R1 = SplitSlash<'posts/:id/:user'>
