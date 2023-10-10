type FindAll<T extends string, P extends string, Result extends number[] = [], Pointer extends unknown[] = []> =
    [T, P] extends [`${infer T1}${infer RestT}`, `${infer P1}${infer RestP}`]
      ? FindAll<RestT,
            P,
            [T1, CheckStringEqual<RestT, RestP>] extends [P1, true] ? [...Result, Pointer['length']] : Result,
            [...Pointer, unknown]>
      : Result

type CheckStringEqual<T extends string, P extends string> =
    P extends ''
      ? true
      : [T, P] extends [`${infer T1}${infer RestT}`, `${infer P1}${infer RestP}`]
          ? T1 extends P1
            ? CheckStringEqual<RestT, RestP>
            : false
          : false
