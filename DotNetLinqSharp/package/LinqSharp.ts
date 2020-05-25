
export class LinqSharp {

    static version = '0.0.1';

    static enable(): boolean {
        (Array.prototype as any).selectManyUntil = this.selectManyUntil;
        return true;
    }

    static selectManyUntil = function <TSource>(selector: (item: TSource, index?: number) => TSource[], until: (array: TSource[]) => boolean): TSource[] {
        var recursiveChildren = (node: TSource, list: TSource[]): void => {
            var children = selector(node);
            for (var child of children) {
                var select = selector(child);
                if (!until(select))
                    recursiveChildren(child, list);
                else list.push(child);
            }
        };
        var source = (this as TSource[]);
        var ret: TSource[] = [];
        for (var item of source)
            recursiveChildren(item, ret);
        return ret;
    };

}
