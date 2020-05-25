declare interface IOrdered<TKey, TSource> extends Iterable<TSource> {
    desc: boolean;
    keySelector: (item: TSource) => TKey;
    thenBy(selector: (item: TSource) => TKey): IOrdered<TKey, TSource>;
    thenByDescending(selector: (item: TSource) => TKey): IOrdered<TKey, TSource>;
    toArray(): TSource[];
}
export declare class Ordered<TSource, TKey = number | string> implements IOrdered<TKey, TSource> {
    source: Array<TSource>;
    keySelector: (item: TSource) => TKey;
    desc: boolean;
    protected prevOrdered: Ordered<TSource, TKey>;
    constructor(source: Array<TSource>, keySelector: (item: TSource) => TKey, desc: boolean, prevOrdered: Ordered<TSource, TKey>);
    [Symbol.iterator](): Generator<TSource, void, unknown>;
    thenBy: (keySelector: (item: TSource) => TKey) => Ordered<TSource, TKey>;
    thenByDescending: (keySelector: (item: TSource) => TKey) => Ordered<TSource, TKey>;
    toArray: () => TSource[];
    order: (prevOrdered: Ordered<TSource, TKey>) => (a: TSource, b: TSource) => -1 | 0 | 1;
}
export {};
