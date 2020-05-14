import { Grouping } from "./Grouping";
import { Ordered } from "./Ordered";

export class Linq {

    static version = '0.0.5';

    static enable(): boolean {
        (Array.prototype as any).select = this.select;
        (Array.prototype as any).selectMany = this.selectMany;

        (Array.prototype as any).where = this.where;
        (Array.prototype as any).count = this.count;
        (Array.prototype as any).any = this.any;
        (Array.prototype as any).all = this.all;

        (Array.prototype as any).sum = this.sum;
        (Array.prototype as any).average = this.average;
        (Array.prototype as any).min = this.min;
        (Array.prototype as any).max = this.max;

        (Array.prototype as any).take = this.take;
        (Array.prototype as any).takeLast = this.takeLast;
        (Array.prototype as any).takeWhile = this.takeWhile;
        (Array.prototype as any).skip = this.skip;
        (Array.prototype as any).skipLast = this.skipLast;
        (Array.prototype as any).skipWhile = this.skipWhile;

        (Array.prototype as any).firstOrDefault = this.firstOrDefault;
        (Array.prototype as any).first = this.first;
        (Array.prototype as any).lastOrDefault = this.lastOrDefault;
        (Array.prototype as any).last = this.last;
        (Array.prototype as any).singleOrDefault = this.singleOrDefault;
        (Array.prototype as any).single = this.single;

        (Array.prototype as any).intersect = this.intersect;
        (Array.prototype as any).except = this.except;
        (Array.prototype as any).union = this.union;
        (Array.prototype as any).sequenceEqual = this.sequenceEqual;

        (Array.prototype as any).contains = this.contains;
        (Array.prototype as any).distinct = this.distinct;

        (Array.prototype as any).orderBy = this.orderBy;
        (Array.prototype as any).orderByDescending = this.orderByDescending;

        (Array.prototype as any).groupBy = this.groupBy;
        (Array.prototype as any).groupJoin = this.groupJoin;

        return true;
    }

    static select = function <TSource, TResult>(selector: (item: TSource, index: number) => TResult): TResult[] {
        return (this as TSource[]).map((source, index) => selector(source, index));
    };

    static selectMany = function <TSource, TResult>(selector: (item: TSource, index: number) => TResult[]): TResult[] {
        return (this as TSource[]).map((source, index) => selector(source, index)).reduce((a, b) => a.concat(b));
    };

    static where = function <TSource>(predicate: (item: TSource, index: number) => boolean): TSource[] {
        return (this as TSource[]).filter(predicate);
    };

    static count = function <TSource>(predicate?: (item: TSource) => boolean): number {
        var source = !predicate ? this as TSource[] : (this as TSource[]).filter(predicate);
        return source.length;
    };

    static any = function <TSource>(predicate?: (item: TSource) => boolean): boolean {
        var source = !predicate ? this as TSource[] : (this as TSource[]).filter(predicate);
        return source.length > 0;
    };

    static all = function <TSource>(predicate: (item: TSource) => boolean): boolean {
        var source = !predicate ? this as TSource[] : (this as TSource[]).filter((item: TSource) => !predicate(item));
        return source.length === 0;
    };

    static sum = function <TSource>(selector: (item: TSource) => number): number {
        return (this as TSource[]).map(source => selector(source)).reduce((a, b) => a + b);
    };

    static average = function <TSource>(selector: (item: TSource) => number): number {
        return (this as TSource[]).map(source => selector(source)).reduce((a, b) => a + b) / (this as TSource[]).length;
    };

    static min = function <TSource>(selector: (item: TSource) => number): number {
        return Math.min(...(this as TSource[]).map(source => selector(source)));
    };

    static max = function <TSource>(selector: (item: TSource) => number): number {
        return Math.max(...(this as TSource[]).map(source => selector(source)));
    };

    static take = function <TSource>(count: number): TSource[] {
        return (this as TSource[]).slice(0, count);
    };

    static takeLast = function <TSource>(count: number): TSource[] {
        return (this as TSource[]).slice((this as TSource[]).length - count);
    };

    static takeWhile = function <TSource>(predicate: (item: TSource) => boolean): TSource[] {
        var count = 0;
        for (var item of this as TSource[]) {
            if (predicate(item)) count++;
            else break;
        }
        return (this as TSource[]).slice(0, count);
    };

    static skip = function <TSource>(count: number): TSource[] {
        return (this as TSource[]).slice(count);
    };

    static skipLast = function <TSource>(count: number): TSource[] {
        return (this as TSource[]).slice(0, (this as TSource[]).length - count);
    };

    static skipWhile = function <TSource>(predicate: (item: TSource) => boolean): TSource[] {
        var count = 0;
        for (var item of this as TSource[]) {
            if (predicate(item)) count++;
            else break;
        }
        return (this as TSource[]).slice(count);
    };

    static firstOrDefault = function <TSource>(predicate?: (item: TSource) => boolean): TSource | null {
        var source = !predicate ? this as TSource[] : (this as TSource[]).filter(predicate);
        if (source.length > 0) return source[0];
        else return null;
    };

    static first = function <TSource>(predicate?: (item: TSource) => boolean): TSource {
        var source = !predicate ? this as TSource[] : (this as TSource[]).filter(predicate);
        if (source.length > 0) return source[0];
        else throw new Error('Sequence contains no elements');
    };

    static lastOrDefault = function <TSource>(predicate?: (item: TSource) => boolean): TSource | null {
        var source = !predicate ? this as TSource[] : (this as TSource[]).filter(predicate);
        if (source.length > 0) return source[source.length - 1];
        else return null;
    };

    static last = function <TSource>(predicate?: (item: TSource) => boolean): TSource {
        var source = !predicate ? this as TSource[] : (this as TSource[]).filter(predicate);
        if (source.length > 0) return source[source.length - 1];
        else throw new Error('Sequence contains no elements');
    };

    static singleOrDefault = function <TSource>(predicate?: (item: TSource) => boolean): TSource | null {
        var source = !predicate ? this as TSource[] : (this as TSource[]).filter(predicate);
        if (source.length > 0) {
            if (source.length == 1) return source[0];
            else throw new Error('Sequence contains more than one element');
        }
        else return null;
    };

    static single = function <TSource>(predicate?: (item: TSource) => boolean): TSource {
        var source = !predicate ? this as TSource[] : (this as TSource[]).filter(predicate);
        if (source.length > 0) {
            if (source.length == 1) return source[0];
            else throw new Error('Sequence contains more than one element');
        }
        else throw new Error('Sequence contains no elements');
    };

    static intersect = function <TSource>(second: TSource[]): TSource[] {
        var first = this as TSource[];
        return first.filter(x => second.includes(x));
    };

    static except = function <TSource>(second: TSource[]): TSource[] {
        var first = this as TSource[];
        return first.filter(x => !second.includes(x));
    };

    static union = function <TSource>(second: TSource[]): TSource[] {
        var first = this as TSource[];
        return first.concat(second.filter(x => !first.includes(x)));
    };

    static sequenceEqual = function <TSource>(second: TSource[]): boolean {
        var first = this as TSource[];
        if (first.length !== second.length) return false;
        for (var i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) return false;
        }
        return true;
    };

    static contains = function <TSource>(value: TSource): boolean {
        return (this as TSource[]).indexOf(value) > -1;
    };

    static distinct = function <TSource>(): TSource[] {
        return Array.from(new Set(this as TSource[]));
    };

    static orderBy = function <TSource, TKey = number | string>(keySelector: (item: TSource) => TKey): Ordered<TSource, TKey> {
        return new Ordered<TSource, TKey>(this, keySelector, false, void 0);
    };

    static orderByDescending = function <TSource, TKey = number | string>(keySelector: (item: TSource) => TKey): Ordered<TSource, TKey> {
        return new Ordered<TSource, TKey>(this, keySelector, true, void 0);
    };

    static groupBy = function <TSource, TKey>(keySelector: (item: TSource) => TKey): Array<Grouping<TSource, TKey>> {
        var keyIndexies = {};
        var groups: Array<Grouping<TSource, TKey>> = [];
        for (var item of this as TSource[]) {
            var key = keySelector(item);
            var skey = key.toString();
            if (Object.keys(keyIndexies).indexOf(skey) == -1) {
                keyIndexies[skey] = groups.length;
                groups.push(new Grouping<TSource, TKey>(key));
            }
            var index = keyIndexies[skey] as number;
            groups[index].push(item);
        }
        return groups;
    };

    static groupJoin = function <TOuter, TInner, TKey, TResult>(inner: TInner[], outerKeySelector: (outer: TOuter) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outerItem: TOuter, innerItems: TInner[]) => TResult): TResult[] {
        var outer = this as TOuter[];
        return outer.map(outerItem => {
            var outerKey = outerKeySelector(outerItem);
            var innerItems = inner.filter(innerItem => innerKeySelector(innerItem) === outerKey);
            return resultSelector(outerItem, innerItems);
        })
    };
}
