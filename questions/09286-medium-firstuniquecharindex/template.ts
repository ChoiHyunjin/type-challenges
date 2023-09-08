type FirstUniqueCharIndex<T extends string, Pointer extends string[] = []> =
    T extends `${infer T1}${infer Rest}`
      ? Rest extends `${string}${T1}${string}`
        ? FirstUniqueCharIndex<Rest, [...Pointer, T1]>
        : T1 extends Pointer[number]
          ? FirstUniqueCharIndex<Rest, [...Pointer, T1]>
          : Pointer['length']
      : -1
