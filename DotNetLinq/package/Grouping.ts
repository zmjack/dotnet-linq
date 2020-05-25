
declare interface IGrouping<TKey, TSource> extends Array<TSource> {
    key: TKey;
}

export class Grouping<TSource, TKey> extends Array<TSource> implements IGrouping<TKey, TSource>
{
    constructor(public key: TKey) {
        super();
    }
}
