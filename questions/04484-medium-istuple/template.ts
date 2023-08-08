// todo: 다시 풀기
//  내가 쓴 답
// type IsTuple<T> = [T] extends [never]
//   ? false
//   : T extends []
//     ? true
//     : T extends readonly [unknown]
//       ? true
//       : false

type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T['length']
      ? false
      : true
    : false
