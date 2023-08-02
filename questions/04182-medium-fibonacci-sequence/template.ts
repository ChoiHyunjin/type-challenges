//  todo: 다시 풀기
type Fibonacci<T extends number, Array extends number[] = [1], Prev extends number[] = [], Count extends number[] = [1]> =
    Count['length'] extends T
      ? Array['length']
      : Fibonacci<T, [...Array, ...Prev], Array, [...Count, 1]>
