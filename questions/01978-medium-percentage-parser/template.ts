// todo: 다시 풀기
// 원안
// type isNumber = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
//
// type PercentageParser<A extends string> =
//     A extends `${infer First}${infer Rest}`
//         ? First extends '-' | '+'
//             ? [`${First}`, ...PerParser<Rest>]
//             : ['', ...PerParser<A>]
//         : ['', '', '']
//
// type PerParser<A extends string, B extends string = ''> =
//     A extends `${infer First}${infer Rest}`
//         ? First extends isNumber
//             ? PerParser<Rest, `${B}${First}`>
//             : First extends '%' ? [B, '%'] : [B, '']
//         : [B, '']

type PrefixParser<A extends string> =
    A extends '-' | '+' ? A : ''
type SuffixParser<A extends string> =
    A extends `${infer First}%` ? [First, '%'] : [A, '']

type PercentageParser<A extends string> =
    A extends `${infer First}${infer Rest}`
      ? First extends PrefixParser<First> ?
          [First, ...SuffixParser<Rest>]
        : ['', ...SuffixParser<A>] : ['', '', '']
