type GetMiddleElement<T extends any[]> =
    T extends [unknown, ...infer Rest, unknown]
      ? Rest['length'] extends 0
        ? T
        : GetMiddleElement<Rest>
      : T
