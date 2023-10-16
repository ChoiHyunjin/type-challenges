// todo: 다시 풀기
type ObjectKey = string | number
type CountElementNumberToObjectResult = {
  [key in ObjectKey]: unknown[]
}

type Flatten2<T> = T extends [never] ? [] : T extends [infer T1, ...infer Rest]
  ? T1 extends any[]
    ? Flatten2<[...T1, ...Rest]>
    : [T1, ...Flatten2<Rest>]
  : T

type CountElementNumberToObject<T> = CountElementNumberToObject2<Flatten2<T>>

type CountElementNumberToObject2<T, Result extends CountElementNumberToObjectResult = {}> =
    T extends [infer T1 extends ObjectKey, ...infer Rest extends ObjectKey[]]
      ? CountElementNumberToObject2<Rest, AddElement<Result, T1>>
      : {
          [key in keyof Result]: Result[key]['length']
        }

type AddElement<T extends CountElementNumberToObjectResult, U extends ObjectKey> =
    Omit<T, U> & {
      [key in U]: key extends keyof T ? [...T[key], unknown] : [unknown]
    }
