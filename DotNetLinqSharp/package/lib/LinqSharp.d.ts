export declare class LinqSharp {
    static version: string;
    static enable(): boolean;
    static selectManyUntil: <TSource>(selector: (item: TSource, index?: number) => TSource[], until: (array: TSource[]) => boolean) => TSource[];
}
