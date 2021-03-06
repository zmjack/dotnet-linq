﻿/// <reference path="lib/extend.linqsharp.d.ts" />

import { Linq } from "./Linq";

export class LinqSharp {

    static enable(): boolean {
        (Array.prototype as any).selectPage = this.selectPage;
        (Array.prototype as any).selectUntil = this.selectUntil;
        (Array.prototype as any).selectWhile = this.selectWhile;
        (Array.prototype as any).selectMore = this.selectMore;
        return true;
    }

    static selectPage = function <TSource>(pageNumber: number, pageSize: number): TSource[] {
        var source = (this as TSource[]);
        return source.slice((pageNumber - 1) * pageSize).slice(0, pageSize);
    }

    static selectUntil = function <TSource>(childrenSelector: (item: TSource) => TSource[], predicate: (array: TSource) => boolean): TSource[] {
        var recursiveChildren = (node: TSource, list: TSource[]): void => {
            var selectNode = childrenSelector(node);
            if (predicate(node))
                list.push(node);
            else {
                if (selectNode?.length > 0 ?? false) {
                    for (var subNode of selectNode) {
                        recursiveChildren(subNode, list);
                    }
                }
            }
        };

        var source = (this as TSource[]);
        var ret: TSource[] = [];
        for (var item of source)
            recursiveChildren(item, ret);
        return ret;
    };

    static selectWhile = function <TSource>(childrenSelector: (item: TSource) => TSource[], predicate: (array: TSource) => boolean): TSource[] {
        var recursiveChildren = (node: TSource, list: TSource[]): void => {
            var selectNode = childrenSelector(node);
            if (predicate(node)) {
                list.push(node);
                if (selectNode?.length > 0 ?? false) {
                    for (var subNode of selectNode) {
                        recursiveChildren(subNode, list);
                    }
                }
            }
        };

        var source = (this as TSource[]);
        var ret: TSource[] = [];
        for (var item of source)
            recursiveChildren(item, ret);
        return ret;
    };

    static selectMore = function <TSource>(childrenSelector: (item: TSource) => TSource[], predicate?: (array: TSource) => boolean): TSource[] {
        var recursiveChildren = (node: TSource, list: TSource[]): void => {
            if (predicate?.call(this, node) ?? true) list.push(node);

            var selectNode = childrenSelector(node);
            if (selectNode?.length > 0 ?? false) {
                for (var subNode of selectNode) {
                    recursiveChildren(subNode, list);
                }
            }
        };

        var source = (this as TSource[]);
        var ret: TSource[] = [];
        for (var item of source)
            recursiveChildren(item, ret);
        return ret;
    };

}
