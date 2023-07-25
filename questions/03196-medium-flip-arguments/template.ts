type FlipArguments<T extends (...arg: any[]) => any>
    = T extends ((...r: infer R) => infer K)
      ? R extends any[]
        ? ((...arg: Reverse<R>) => K)
        : T
      : T
