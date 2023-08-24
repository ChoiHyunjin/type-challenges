// todo: 다시 풀기
type MapTypes<T extends object, R extends { mapFrom: any; mapTo: any }> = {
  [key in keyof T]: T[key] extends R['mapFrom']
    ? R extends { mapFrom: T[key] }
      ? R['mapTo']
      : never
    : T[key]
}

// type MapTypes<T extends object, R extends { mapFrom: any; mapTo: any }> = {
//   [key in keyof T]: T[key] extends R['mapFrom'] ? R['mapTo'] : T[key]
// }
