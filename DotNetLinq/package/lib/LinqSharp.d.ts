/// <reference path="extend.linqsharp.d.ts" />
export declare class LinqSharp {
    static enable(): boolean;
    static selectPage: <TSource>(pageNumber: number, pageSize: number) => TSource[];
    static selectUntil: <TSource>(childrenSelector: (item: TSource) => TSource[], predicate: (array: TSource) => boolean) => TSource[];
    static selectWhile: <TSource>(childrenSelector: (item: TSource) => TSource[], predicate: (array: TSource) => boolean) => TSource[];
    static selectMore: <TSource>(childrenSelector: (item: TSource) => TSource[], predicate?: (array: TSource) => boolean) => TSource[];
}
