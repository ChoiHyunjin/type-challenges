type Chainable<T = {}> = {
  option<U extends string, V>(
    key: U extends keyof T
      ? V extends T[U]
        ? never
        : U
      : U,
    value: V): Chainable<Omit<T, U> & Record<U, V>>
  get(): T
}
