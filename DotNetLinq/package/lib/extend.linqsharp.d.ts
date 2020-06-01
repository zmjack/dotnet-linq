
declare interface Array<T> {

    selectUntil(childrenSelector: (item: T) => T[], predicate: (array: T[]) => boolean): T[];
    selectWhile(childrenSelector: (item: T) => T[], predicate: (array: T[]) => boolean): T[];
    selectMore(childrenSelector: (item: T) => T[], predicate?: (array: T) => boolean): T[];

}
