type IsEqual<T, U> = U extends T ? T extends U ? true : false : false

type LastIndexOf<T, U>
    = T extends [...infer Rest, infer TL]
      ? IsEqual<TL, U> extends true
        ? Rest['length']
        : LastIndexOf<Rest, U>
      : -1
