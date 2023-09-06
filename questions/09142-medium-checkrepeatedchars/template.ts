// type CheckRepeatedChars<T extends string> = T extends `${infer T1}${infer Rest}`
//   ? HasChar<Rest, T1> extends true
//     ? true
//     : CheckRepeatedChars<Rest>
//   : false
//
// type HasChar<T extends string, C extends string> =
//     T extends `${infer T1}${infer Rest}`
//       ? T1 extends C ? true : HasChar<Rest, C>
//       : false

type CheckRepeatedChars<T extends string> = T extends `${infer T1}${infer Rest}`
  ? Rest extends `${string}${T1}${string}`
    ? true
    : CheckRepeatedChars<Rest>
  : false

// type CheckRepeatedChars<T extends string, U extends string[] = []> =
//     T extends `${infer T1}${infer Rest}`
//       ? HasChar<T1, U> extends true ? true : CheckRepeatedChars<Rest, [...U, T1]>
//       : false
//
// type HasChar<T extends string, U extends string[]> =
//     U extends [infer U1, ...infer Rest extends string[]]
//       ? T extends U1
//         ? true
//         : HasChar<T, Rest>
//       : false
