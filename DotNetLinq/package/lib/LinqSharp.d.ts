/// <reference path="extend.linqsharp.d.ts" />
export declare class LinqSharp {
    static enable(): boolean;
    static selectUntil: <TSource>(selector: (item: TSource) => TSource[], until: (array: TSource[]) => boolean) => TSource[];
    static selectWhile: <TSource>(selector: (item: TSource) => TSource[], _while: (array: TSource[]) => boolean) => TSource[];
}
