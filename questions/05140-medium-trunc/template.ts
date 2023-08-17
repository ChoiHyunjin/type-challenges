type Trunc<T extends number | string> =
    `${T}` extends `${infer F}${infer Rest}`
      ? F extends '.'
        ? ''
        : `${F}${Trunc<Rest>}`
      : T
