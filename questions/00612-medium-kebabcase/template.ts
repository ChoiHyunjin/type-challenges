type Upper = 'A' | 'B' | 'C' | 'D' | 'E'
| 'F'
| 'G'
| 'H'
| 'I'
| 'J'
| 'K'
| 'L'
| 'M'
| 'O'
| 'P'
| 'Q'
| 'R'
| 'S'
| 'T'
| 'U'
| 'V'
| 'W'
| 'X'
| 'Y'
| 'Z'

type KebabCase<S extends string, A extends string[] = []> =
    S extends `${infer L}${infer R}`
      ? A['length'] extends 0
        ? `${Lowercase<L>}${KebabCase<R, [L]>}`
        : `${L extends Upper ? `-${Lowercase<L>}` : L}${KebabCase<R, A>}`
      : ''
