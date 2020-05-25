
declare interface Array<T> {

    selectUntil(selector: (item: T) => T[], until: (array: T[]) => boolean): T[];
    selectWhile(selector: (item: T) => T[], _while: (array: T[]) => boolean): T[];

}
