type GreaterThan<
    T extends number,
    U extends number,
    TArr extends string[] = NumberToArr<`${T}`>,
    UArr extends string[] = NumberToArr<`${U}`>> =
    T extends U ? false :
      TArr['length'] extends UArr['length']
        ? CompareValue<TArr, UArr>
        : CompareNumber<TArr['length'], UArr['length']>

type NumberToArr<T extends string, A extends string[] = []> =
    T extends `${infer F}${infer R}`
      ? R extends string
        ? NumberToArr<R, [...A, F]>
        : A
      : A

type Shift2<T extends string[]> = T extends [string, ...infer TR] ? TR : T

type CompareValue<T extends string[], U extends string[]> =
      CompareNumber<StrToNum<T[0]>, StrToNum<U[0]>> extends never ? CompareValue<Shift2<T>, Shift2<U>> : CompareNumber<StrToNum<T[0]>, StrToNum<U[0]>>

type CompareNumber<T extends number, U extends number> = T extends U
  ? never
  : T extends 0
    ? false
    : U extends 0
      ? true
      : CompareNumber<NumberArr[T], NumberArr[U]>

type NumberArr = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8]

// 내가 풀었던 방법
// type StrToNum<S extends string> =
//     S extends '0' ? 0 :
//       S extends '1' ? 1 :
//         S extends '2' ? 2 :
//           S extends '3' ? 3 :
//             S extends '4' ? 4 :
//               S extends '5' ? 5 :
//                 S extends '6' ? 6 :
//                   S extends '7' ? 7 :
//                     S extends '8' ? 8 :
//                       S extends '9' ? 9 :
//                         never

type StrToNum<S extends string> =
    S extends `${infer N extends number}` ? N : 0
