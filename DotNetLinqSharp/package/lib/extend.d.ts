
declare interface Array<T> {

    selectManyUntil(selector: (item: T, index?: number) => T[], until: (array: T[]) => boolean): T[];

}
