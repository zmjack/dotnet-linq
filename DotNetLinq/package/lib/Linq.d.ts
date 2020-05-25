/// <reference path="extend.linq.d.ts" />
import { Grouping } from "./Grouping";
import { Ordered } from "./Ordered";
export declare class Linq {
    static enable(): boolean;
    static select: <TSource, TResult>(selector: (item: TSource, index?: number) => TResult) => TResult[];
    static selectMany: <TSource, TResult>(selector: (item: TSource, index?: number) => TResult[]) => TResult[];
    static where: <TSource>(predicate: (item: TSource, index?: number) => boolean) => TSource[];
    static count: <TSource>(predicate?: (item: TSource) => boolean) => number;
    static any: <TSource>(predicate?: (item: TSource) => boolean) => boolean;
    static all: <TSource>(predicate: (item: TSource) => boolean) => boolean;
    static sum: <TSource>(selector?: (item: TSource) => number) => number;
    static average: <TSource>(selector?: (item: TSource) => number) => number;
    static min: <TSource>(selector?: (item: TSource) => number) => number;
    static max: <TSource>(selector?: (item: TSource) => number) => number;
    static take: <TSource>(count: number) => TSource[];
    static takeLast: <TSource>(count: number) => TSource[];
    static takeWhile: <TSource>(predicate: (item: TSource, index?: number) => boolean) => TSource[];
    static skip: <TSource>(count: number) => TSource[];
    static skipLast: <TSource>(count: number) => TSource[];
    static skipWhile: <TSource>(predicate: (item: TSource, index?: number) => boolean) => TSource[];
    static firstOrDefault: <TSource>(predicate?: (item: TSource) => boolean) => TSource;
    static first: <TSource>(predicate?: (item: TSource) => boolean) => TSource;
    static lastOrDefault: <TSource>(predicate?: (item: TSource) => boolean) => TSource;
    static last: <TSource>(predicate?: (item: TSource) => boolean) => TSource;
    static singleOrDefault: <TSource>(predicate?: (item: TSource) => boolean) => TSource;
    static single: <TSource>(predicate?: (item: TSource) => boolean) => TSource;
    static intersect: <TSource>(second: TSource[]) => TSource[];
    static except: <TSource>(second: TSource[]) => TSource[];
    static union: <TSource>(second: TSource[]) => TSource[];
    static sequenceEqual: <TSource>(second: TSource[]) => boolean;
    static contains: <TSource>(value: TSource) => boolean;
    static distinct: <TSource>() => TSource[];
    static orderBy: <TSource, TKey = string | number>(keySelector: (item: TSource) => TKey) => Ordered<TSource, TKey>;
    static orderByDescending: <TSource, TKey = string | number>(keySelector: (item: TSource) => TKey) => Ordered<TSource, TKey>;
    static groupBy: <TSource, TKey>(keySelector: (item: TSource) => TKey) => Grouping<TSource, TKey>[];
    static groupJoin: <TOuter, TInner, TKey, TResult>(inner: TInner[], outerKeySelector: (outer: TOuter) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outerItem: TOuter, innerItems: TInner[]) => TResult) => TResult[];
    static zip: <TFirst, TSecond, TResult = {
        first: TFirst;
        second: TSecond;
    }>(second: TSecond[], resultSelector?: (first: TFirst, second: TSecond) => TResult) => TResult[];
    static aggregate: <TSource, TAccumulate, TResult = TAccumulate>(seed: TAccumulate, func: (prev: TAccumulate, current: TSource) => TAccumulate, resultSelector?: (result: TAccumulate) => TResult) => TResult;
    static defaultIfEmpty: <TSource>(defaultValue?: TSource) => TSource[];
}
