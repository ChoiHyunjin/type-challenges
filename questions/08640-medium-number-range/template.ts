type NumberRange<L extends number, H extends number> =
    Exclude<UnionUntil<H>, UnionUntil<L>> | L

type UnionUntil<L extends number, Result extends number = L, Count extends unknown[] = []> =
    Count['length'] extends L
      ? Result
      : UnionUntil<L, Result | Count['length'], [...Count, unknown]>
