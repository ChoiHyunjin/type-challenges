type LengthOfString<S extends string, L extends string[] = []> =
    S extends `${string}${infer R}` ? LengthOfString<R, [...L, string]> : L['length']
