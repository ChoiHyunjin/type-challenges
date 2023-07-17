type ReverseString2<T extends string> = T extends `${infer F}${infer Rest}`
  ? `${ReverseString2<Rest>}${F}`
  : T

type StartsWith2<T extends string, U extends string > = T extends U ? true :
  T extends `${infer L1}${infer Rest1}`
    ? U extends `${infer L2}${infer Rest2}`
      ? L1 extends L2 ? StartsWith2<Rest1, Rest2>
        : false
      : true
    : false

type EndsWith<T extends string, U extends string> = StartsWith2<ReverseString2<T>, ReverseString2<U>>

