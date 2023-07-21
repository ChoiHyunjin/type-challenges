type Shift<T extends any[]> =
    T extends [any, ...infer F]
      ? [...F]
      : T

