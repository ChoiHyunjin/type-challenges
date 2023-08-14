type Fill<
    T extends unknown[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
    Pointer extends unknown[] = [],
    Started extends boolean = Pointer['length'] extends Start ? true : false,
> = Pointer['length'] extends End
  ? T
  : T extends [infer T1, ...infer Rest]
    ? Started extends true
      ? [N, ...Fill<Rest, N, Start, End, [...Pointer, 0], Started>]
      : [T1, ...Fill<Rest, N, Start, End, [...Pointer, 0]>]
    : T
