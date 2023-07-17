type StartsWith<T extends string, U extends string> =
    T extends U ? true : T extends `${infer FirstOfT}${infer RestOfT}`
      ? U extends `${infer FirstOfU}${infer RestOfU}`
        ? FirstOfT extends FirstOfU ? StartsWith<RestOfT, RestOfU>
          : false
        : true
      : false
