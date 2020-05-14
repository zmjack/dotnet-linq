
declare interface IOrdered<TKey, TSource> extends Iterable<TSource> {
    desc: boolean;
    keySelector: (item: TSource) => TKey;
    thenBy(selector: (item: TSource) => TKey): IOrdered<TKey, TSource>;
    thenByDescending(selector: (item: TSource) => TKey): IOrdered<TKey, TSource>;
    toArray(): TSource[];
}

export class Ordered<TSource, TKey = number | string> implements IOrdered<TKey, TSource>
{
    constructor(public source: Array<TSource>, public keySelector: (item: TSource) => TKey, public desc: boolean, protected prevOrdered: Ordered<TSource, TKey>) {
        this.source.sort(this.order(this.prevOrdered));
    }

    *[Symbol.iterator]() {
        for (var record of this.source)
            yield record;
    }

    thenBy = (keySelector: (item: TSource) => TKey): Ordered<TSource, TKey> => {
        return new Ordered<TSource, TKey>(this.source, keySelector, false, this);
    }

    thenByDescending = (keySelector: (item: TSource) => TKey): Ordered<TSource, TKey> => {
        return new Ordered<TSource, TKey>(this.source, keySelector, true, this);
    }

    toArray = (): TSource[] => { return this.source; };

    order = (prevOrdered: Ordered<TSource, TKey>): (a: TSource, b: TSource) => -1 | 0 | 1 => {
        return (a: TSource, b: TSource) => {
            if (prevOrdered) {
                var prevRet = this.desc
                    ? prevOrdered.order(prevOrdered.prevOrdered)(a, b)
                    : prevOrdered.order(prevOrdered.prevOrdered)(a, b);

                if (prevRet != 0) return prevRet;
            }

            var _a = this.keySelector(a);
            var _b = this.keySelector(b);
            if (_a < _b) return this.desc ? 1 : -1;
            else if (_a > _b) return this.desc ? -1 : 1;
            else return 0;
        };
    }
}
