type Transpose<M extends number[][], R extends number[][] = []> =
    M extends [] ? [] :
      M[0]['length'] extends R['length']
        ? R
        : Transpose<M, [...R, GetColumn<M, R['length']>]>

type GetColumn<M extends number[][], I extends number, R extends number[]=[]> =
    R['length'] extends M['length'] ? R
      : GetColumn<M, I, [...R, M[R['length']][I]]>
