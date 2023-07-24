type TupleToNestedObject<T extends string[], U> =
    T extends [infer F, ...infer R]
      ? F extends string ?
        R extends string[] ?
            { [key in F]: TupleToNestedObject<R, U> }
          : U
        : U
      : U
