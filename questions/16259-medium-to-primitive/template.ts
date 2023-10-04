type ToPrimitive<T> =
    T extends (...arg: never[]) => unknown ? Function
      : T extends object ? { [key in keyof T]: ToPrimitive<T[key]> }
        : T extends { valueOf: () => infer P } ? P : T

// type ToPrimitive<T> =
//     T extends (...arg: never[]) => unknown ? Function
//         : T extends string ? string
//             : T extends boolean ? boolean
//                 : T extends number ? number
//                     : T extends object ? { [key in keyof T]: ToPrimitive<T[key]> } : never
