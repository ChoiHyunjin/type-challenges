type Join<T extends unknown[], U extends string | number> = T extends [infer T1 extends string, ...infer Rest]
  ? Rest['length'] extends 0
    ? T1
    : `${T1}${U}${Join<Rest, U>}`
  : ''

