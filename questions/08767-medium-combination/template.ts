// todo: 다시 풀기
type Combination<T extends string[], All = T[number], Item = All> = Item extends string
  ? Item | `${Item} ${Combination<[], Exclude<All, Item>>}`
  : never
