type GUS<E extends string[]> = E extends [infer F, ...infer R]
  ? R extends string[] ? F | GUS<R> : F
  : never

type BEM<B extends string, E extends string[], M extends string[]> =
    `${B}${GUS<E> extends never ? '' : GUS<E> extends string ? `__${GUS<E>}` : ''}${GUS<M> extends never ? '' : GUS<M> extends string ? `--${GUS<M>}` : ''}`
