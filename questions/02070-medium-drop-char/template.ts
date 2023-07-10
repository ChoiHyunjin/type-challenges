type DropChar<S, C> = S extends `${infer F}${infer Rest}`
  ? `${F extends C ? '' : F}${DropChar<Rest, C>}`
  : S
