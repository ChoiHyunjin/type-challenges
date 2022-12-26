export type Flatten<T> = T extends [infer F, ...infer R] ? [...(F extends [...infer P] ? Flatten<P>: [F]), ...Flatten<R>] : T
