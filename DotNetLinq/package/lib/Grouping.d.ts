declare interface IGrouping<TKey, TSource> extends Array<TSource> {
    key: TKey;
}
export declare class Grouping<TSource, TKey> extends Array<TSource> implements IGrouping<TKey, TSource> {
    key: TKey;
    constructor(key: TKey);
}
export {};
