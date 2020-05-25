/// <reference path="lib/extend.linqsharp.d.ts" />

export class LinqSharp {

    static enable(): boolean {

        (Array.prototype as any).selectUntil = this.selectUntil;
        (Array.prototype as any).selectWhile = this.selectWhile;

        return true;
    }

    static selectUntil = function <TSource>(selector: (item: TSource) => TSource[], until: (array: TSource[]) => boolean): TSource[] {
        var recursiveChildren = (node: TSource, list: TSource[]): void => {
            var selectNode = selector(node);
            if (until(selectNode))
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

    static selectWhile = function <TSource>(selector: (item: TSource) => TSource[], _while: (array: TSource[]) => boolean): TSource[] {
        var recursiveChildren = (node: TSource, list: TSource[]): void => {
            var selectNode = selector(node);
            if (_while(selectNode)) {
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

}
