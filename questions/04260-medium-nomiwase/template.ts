type AllCombinations<S extends string> = S extends `${infer F}${infer R}`
  ? AddCharacter<AllCombinations<R>, F>
  : '' | S

type AddCharacter<S extends string, T extends string> = S extends `${infer F}${infer R}`
  ? `${F}${AddCharacter<R, T>}` | `${AddCharacter<R, T>}${F}`
  : '' | T | S
