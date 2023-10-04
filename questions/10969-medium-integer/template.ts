type Integer<T extends number, U extends string = `${T}`, Checking extends boolean = false, Result extends string = ''> =
    [1, 2] extends [T, T]
      ? never
      : U extends `${infer U1}${infer Rest}`
        ? Checking extends true
          ? U1 extends '.'
            ? never
            : U1 extends '0' ? Integer<T, Rest, true> : never
          : U1 extends '.'
            ? Integer<T, Rest, true>
            : Integer<T, Rest, false, `${Result}${U1}`>
        : Result extends `${infer K extends number}` ? K : never
