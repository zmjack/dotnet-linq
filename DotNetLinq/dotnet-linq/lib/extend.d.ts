
interface IGrouping<TKey, TSource> extends Array<TSource> {
    key: TKey;
}

interface IOrdered<TKey, TSource> extends Iterable<TSource> {
    desc: boolean;
    keySelector: (item: TSource) => TKey;
    thenBy(selector: (item: TSource) => TKey): IOrdered<TKey, TSource>;
    thenByDescending(selector: (item: TSource) => TKey): IOrdered<TKey, TSource>;
    toArray(): TSource[];
}

declare interface Array<T> {

    /**
     * Projects each element of a sequence into a new form by incorporating the element's index.
     * (The behavior is similar to JavaScript function 'map')
     * @param selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
     */
    select<TResult>(selector: (item: T, index: number) => TResult): TResult[];

    /**
     * Projects each element of a sequence to an Array, and flattens the resulting sequences into one sequence. The index of each source element is used in the projected form of that element.
     * @param selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
     * (The behavior is similar to JavaScript function 'map' -> 'reduce')
     */
    selectMany<TResult>(selector: (item: T, index: number) => TResult[]): TResult[];

    /**
     * Filters a sequence of values based on a predicate.
     * (The behavior is similar to JavaScript function 'filter')
     * @param predicate
     */
    where(predicate: (item: T, index: number) => boolean): T[];

    /**
     * Returns the number of elements in a sequence.
     * @param predicate A function to test each element for a condition.
     */
    count(predicate?: (item: T) => boolean): number;

    /**
     * Determines whether any element of a sequence satisfies a condition.
     * (The behavior is similar to JavaScript function 'some')
     * @param predicate A function to test each element for a condition.
     */
    any(predicate?: (item: T) => boolean): boolean;

    /**
     * Determines whether all elements of a sequence satisfy a condition.
     * (The behavior is similar to JavaScript function 'every')
     * @param predicate A function to test each element for a condition.
     */
    all(predicate: (item: T) => boolean): boolean;

    /**
     * Computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.
     * @param selector A transform function to apply to each element.
     */
    sum(selector?: (item: T) => number): number;

    /**
     * Computes the average of a sequence of values that are obtained by invoking a transform function on each element of the input sequence.
     * @param selector A transform function to apply to each element.
     */
    average(selector?: (item: T) => number): number;

    /**
     * Invokes a transform function on each element of a sequence and returns the minimum value.
     * @param selector A transform function to apply to each element.
     */
    min(selector?: (item: T) => number): number;

    /**
     * Invokes a transform function on each element of a sequence and returns the maximum value.
     * @param selector A transform function to apply to each element.
     */
    max(selector?: (item: T) => number): number;

    /**
     * Returns a specified number of contiguous elements from the start of a sequence.
     * @param count The number of elements to return.
     */
    take(count: number): T[];

    /**
     * Returns a specified number of contiguous elements from the last of a sequence.
     * @param count The number of elements to return.
     */
    takeLast(count: number): T[];

    /**
     * Returns elements from a sequence as long as a specified condition is true. The element's index is used in the logic of the predicate function.
     * @param predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
     */
    takeWhile(predicate: (item: T, index: number) => boolean): T[];

    /**
     * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
     * @param count The number of elements to skip before returning the remaining elements.
     */
    skip(count: number): T[];

    /**
     * Bypasses a specified number of elements that begins with the last in a sequence and then returns the remaining elements.
     * @param count The number of elements to skip before returning the remaining elements.
     */
    skipLast(count: number): T[];

    /**
     * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements. The element's index is used in the logic of the predicate function.
     * @param predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
     */
    skipWhile(predicate: (item: T, index: number) => boolean): T[];

    /**
     * Returns the first element of the sequence that satisfies a condition or a default value if no such element is found.
     * @param predicate A function to test each element for a condition.
     */
    firstOrDefault(predicate?: (source: T) => boolean): T | null;

    /**
     * Returns the first element in a sequence that satisfies a specified condition.
     * @param predicate A function to test each element for a condition.
     */
    first(predicate?: (source: T) => boolean): T;

    /**
     * Returns the last element of a sequence that satisfies a condition or a default value if no such element is found.
     * @param predicate A function to test each element for a condition.
     */
    lastOrDefault(predicate?: (source: T) => boolean): T | null;

    /**
     * Returns the last element of a sequence that satisfies a specified condition.
     * @param predicate A function to test each element for a condition.
     */
    last(predicate?: (source: T) => boolean): T;

    /**
     * Returns the only element of a sequence that satisfies a specified condition or a default value if no such element exists; this method throws an exception if more than one element satisfies the condition.
     * @param predicate A function to test an element for a condition.
     */
    singleOrDefault(predicate?: (source: T) => boolean): T | null;

    /**
     * Returns the only element of a sequence that satisfies a specified condition, and throws an exception if more than one such element exists.
     * @param predicate A function to test an element for a condition.
     */
    single(predicate?: (source: T) => boolean): T;

    /**
     * Produces the set intersection of two sequences by using the default equality comparer to compare values.
     * @param second An Array whose distinct elements that also appear in the first sequence will be returned.
     */
    intersect(second: T[]): T[];

    /**
     * Produces the set difference of two sequences by using the default equality comparer to compare values.
     * @param second An Array whose elements that also occur in the first sequence will cause those elements to be removed from the returned sequence.
     */
    except(second: T[]): T[];

    /**
     * Produces the set union of two sequences by using the default equality comparer.
     * @param second An Array whose distinct elements form the second set for the union.
     */
    union(second: T[]): T[];

    /**
     * Determines whether two sequences are equal by comparing the elements by using the default equality comparer for their type.
     * @param second An Array to compare to the first sequence.
     */
    sequenceEqual(second: T[]): T[];

    /**
     * Determines whether a sequence contains a specified element by using the default equality comparer.
     * @param value The value to locate in the sequence.
     */
    contains(value: T): boolean;

    /**
     * Returns distinct elements from a sequence by using the default equality comparer to compare values.
     */
    distinct(): T[];

    /**
     * Sorts the elements of a sequence in ascending order according to a key.
     * @param keySelector A function to extract a key from an element.
     */
    orderBy<TKey = number | string>(keySelector: (item: T) => TKey): IOrdered<TKey, T>;

    /**
     * Sorts the elements of a sequence in descending order according to a key.
     * @param keySelector A function to extract a key from an element.
     */
    orderByDescending<TKey = number | string>(keySelector: (item: T) => TKey): IOrdered<TKey, T>;

    /**
     * Groups the elements of a sequence according to a specified key selector function.
     * @param keySelector A function to extract the key for each element.
     */
    groupBy<TKey>(keySelector: (item: T) => TKey): Array<IGrouping<TKey, T>>;

    /**
     * Correlates the elements of two sequences based on equality of keys and groups the results. The default equality comparer is used to compare keys.
     * @param inner The sequence to join to the first sequence.
     * @param outerKeySelector A function to extract the join key from each element of the first sequence.
     * @param innerKeySelector A function to extract the join key from each element of the second sequence.
     * @param resultSelector A function to create a result element from an element from the first sequence and a collection of matching elements from the second sequence.
     */
    groupJoin<TInner, TKey, TResult>(inner: TInner[], outerKeySelector: (outer: T) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outerItem: T, innerItems: TInner[]) => TResult): TResult[];

    /**
     * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.
     * @param second The second sequence to merge.
     * @param resultSelector A function that specifies how to merge the elements from the two sequences.
     */
    zip<TSecond, TResult = { first: T, second: TSecond }>(second: TSecond[], resultSelector?: (first: T, second: TSecond) => TResult): TResult[];

    /**
     * Applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.
     * (The behavior is similar to JavaScript function 'reduce')
     * @param seed The initial accumulator value.
     * @param func An accumulator function to be invoked on each element.
     * @param resultSelector A function to transform the final accumulator value into the result value.
     */
    aggregate<TAccumulate, TResult = TAccumulate>(seed: TAccumulate, func: (prev: TAccumulate, current: T) => TAccumulate, resultSelector?: (result: TAccumulate) => TResult): TResult;

    /**
     * Returns the elements of the specified sequence or the specified value in a singleton collection if the sequence is empty.
     * @param defaultValue The value to return if the sequence is empty.
     */
    defaultIfEmpty(defaultValue?: T): T[];

}
