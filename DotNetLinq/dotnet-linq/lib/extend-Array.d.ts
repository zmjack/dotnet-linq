
interface IGrouping<TKey, TSource> extends Array<TSource> {
    key: TKey;
}

interface IOrdered<TKey, TSource> extends Iterable<TSource> {
    desc: boolean;
    keySelector: (item: TSource) => TKey;
    thenBy(selector: (item: TSource) => TKey): IOrdered<TKey, TSource>;
    thenByDescending(selector: (item: TSource) => TKey): IOrdered<TKey, TSource>;
    toArray(): TSource[];
}

declare interface Array<T> {
    select<TResult>(selector: (item: T, index: number) => TResult): TResult[];
    selectMany<TResult>(selector: (item: T, index: number) => TResult[]): TResult[];

    where(predicate: (item: T, index: number) => boolean): T[];
    count(predicate?: (item: T) => boolean): number;
    any(predicate?: (item: T) => boolean): boolean;
    all(predicate: (item: T) => boolean): boolean;

    sum(selector: (item: T) => number): number;
    average(selector: (item: T) => number): number;
    min(selector: (item: T) => number): number;
    max(selector: (item: T) => number): number;

    take(count: number): T[];
    takeLast(count: number): T[];
    takeWhile(predicate: (item: T) => boolean): T[];
    skip(count: number): T[];
    skipLast(count: number): T[];
    skipWhile(predicate: (item: T) => boolean): T[];

    firstOrDefault(predicate?: (source: T) => boolean): T | null;
    first(predicate?: (source: T) => boolean): T;
    lastOrDefault(predicate?: (source: T) => boolean): T | null;
    last(predicate?: (source: T) => boolean): T;
    singleOrDefault(predicate?: (source: T) => boolean): T | null;
    single(predicate?: (source: T) => boolean): T;

    intersect(second: T[]): T[];
    except(second: T[]): T[];
    union(second: T[]): T[];
    sequenceEqual(second: T[]): T[];

    contains(value: T): boolean;
    distinct(): T[];

    orderBy<TKey = number | string>(keySelector: (item: T) => TKey): IOrdered<TKey, T>;
    orderByDescending<TKey = number | string>(keySelector: (item: T) => TKey): IOrdered<TKey, T>;

    groupBy<TKey>(keySelector: (item: T) => TKey): Array<IGrouping<TKey, T>>;
    groupJoin<TInner, TKey, TResult>(inner: TInner[], outerKeySelector: (outer: T) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outerItem: T, innerItems: TInner[]) => TResult): TResult[];
}
