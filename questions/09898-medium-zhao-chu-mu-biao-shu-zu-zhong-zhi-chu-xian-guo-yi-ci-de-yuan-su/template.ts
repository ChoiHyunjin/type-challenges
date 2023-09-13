type RemoveDuplicate<T extends any[], U> = T extends [infer T1, ...infer Rest]
  ? T1 extends U ? Rest : [T1, ...RemoveDuplicate<Rest, U>]
  : T

type FindEles<T extends any[], Result extends any[] = [], Duplicated = never> =
    T extends [infer T1, ...infer Rest]
      ? T1 extends Duplicated
        ? FindEles<Rest, RemoveDuplicate<Result, T1>, Duplicated>
        : FindEles<Rest, [...Result, T1], Duplicated | T1>
      : Result

