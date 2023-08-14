type TrimRight<S extends string, Temp extends string = ''> =
    S extends `${infer C}${infer Rest}`
      ? C extends ' ' | '\n' | '\t'
        ? TrimRight<Rest, `${Temp}${C}`>
        : `${Temp}${C}${TrimRight<Rest>}`
      : S
