type Filter<T extends any[], P> = T extends [infer T1, ...infer Rest]
  ? T[0] extends P ? [T1, ...Filter<Rest, P>]
    : Filter<Rest, P>
  : []
