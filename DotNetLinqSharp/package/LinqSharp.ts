
export class LinqSharp {

    static version = '0.0.1';

    static enable(): boolean {
        (Array.prototype as any).selectManyUntil = this.selectManyUntil;
        return true;
    }

    static selectManyUntil = function <TSource>(selector: (item: TSource, index?: number) => TSource[], until: (array: TSource[]) => boolean): TSource[] {

        var recursiveChildren = function* (node: TSource) {
            var children = selector(node);
            for (var child of children) {
                var select = selector(child);
                if (!until(select)) {
                    for (var child_ of recursiveChildren(child)) {
                        yield child_;
                    }
                }
                else yield child;
            }
        };

        var source = (this as TSource[]);
        var ret = source.map(x => {
            var ret: TSource[] = [];
            for (var item of recursiveChildren(x)) {
                ret.push(item);
            }
            return ret;
        }).reduce((a, b) => a.concat(b));

        return ret;
    };

}
