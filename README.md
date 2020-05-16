# dotnet-linq

**dotnet-linq** is a similar implementation of the **DotNet** platform **LINQ** for **TypeScript/JavaScript**.

<br/>

***TypeScript is recommended for a better programming experience, such as type hinting.***

<br/>

## Use Browser

If you want to use it in a **browser**, you just need to import **dotnet-linq.js**, which is in the **dist** folder:

```html
<script type="text/javascript" src="dotnet-linq.js"></script>
```

<u>We provide an example under the **Simples** folder.</u>

You just need to run **index.html**, open the **console** (F12), and write some code.

<br/>

## Use NodeJS

### Premise

1. Install the package using **NPM**:

```powershell
npm i dotnet-linq
```

2. Open **NodeJS**:

```powershell
node
require('dotnet-linq').Linq.enable();
```

3. Try it.

<br/>

### Select / SelectMany

- **select** (similar to **JavaScript** function **map**)
  Projects each element of a sequence into a new form by incorporating the element's index.
- **selectMany** (similar to **JavaScript** function **map** -> **reduce**)
  Projects each element of a sequence to an Array, and flattens the resulting sequences into one sequence. The index of each source element is used in the projected form of that element.

```javascript
[1, 2, 3, 4].select(x => x * 2);        // [ 2, 4, 6, 8 ]
[[1, 2, 3], [4, 5]].selectMany(x => x);	// [ 1, 2, 3, 4, 5 ]
```

### Where

- **where**
  Filters a sequence of values based on a predicate.

```javascript
[1, 2, 3, 4].where(x => x % 2 === 1);   // [ 1, 3 ]
```

### Count

- **count**
  Returns the number of elements in a sequence.

```javascript
[1, 3, 5, 7].count(x => x <= 5);    // 3
```

### Any

- **any** (similar to **JavaScript** function **some**)
  Determines whether any element of a sequence satisfies a condition.

```javascript
[2, 3, 5, 6].any();     // true
[].any();               // false
[2, 3, 5, 6].any(x => x > 3);       // true
[2, 3, 5, 6].any(x => x > 6);       // false
```

### All

- **all** (similar to **JavaScript** function **every**) 
  Determines whether all elements of a sequence satisfy a condition.

```javascript
[2, 3, 5, 6].all(x => x >= 2);      // true
[2, 3, 5, 6].all(x => x >= 3);      // false
```

### Sum

- **sum**
  Computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.

```javascript
[2, 3, 5, 6].sum();             // 16
```

### Average

-  **average**
  Computes the average of a sequence of values that are obtained by invoking a transform function on each element of the input sequence.

```javascript
[2, 3, 5, 6].average();         // 4
```

### Min / Max

- **min**
  Invokes a transform function on each element of a sequence and returns the minimum value.
- **max**
  Invokes a transform function on each element of a sequence and returns the maximum value.

```javascript
[5, 6, 2, 3].min();             // 2
[5, 6, 2, 3].max();             // 6
```

### Take / TakeLast / TakeWhile

- **take**: Returns a specified number of contiguous elements from the start of a sequence.
- **takeLast**: Returns a specified number of contiguous elements from the last of a sequence.
- **takeWhile**: Returns elements from a sequence as long as a specified condition is true. The element's index is used in the logic of the predicate function.

```javascript
[1, 3, 4, 5].take(2);           // [ 1, 3 ]
[1, 3, 4, 5].takeLast(2);       // [ 4, 5 ]
[1, 3, 4, 5].takeWhile(x => x % 2 === 1);   // [ 1, 3 ]
```

### Skip / SkipLast / SkipWhile

- **skip**
  Bypasses a specified number of elements in a sequence and then returns the remaining elements.
- **skipLast**
  Bypasses a specified number of elements that begins with the last in a sequence and then returns the remaining elements.
- **skipWhile**
  Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements. The element's index is used in the logic of the predicate function.

```javascript
[1, 3, 4, 5].skip(2);           // [ 4, 5 ]
[1, 3, 4, 5].skipLast(2);       // [ 1, 3 ]
[1, 3, 4, 5].skipWhile(x => x % 2 === 1);   // [ 4, 5 ]
```

### FirstOrDefault / First

- **firstOrDefault**

  Returns the first element of the sequence that satisfies a condition or a default value if no such element is found.

- **first**
  Returns the first element in a sequence that satisfies a specified condition.

```javascript
[1, 2, 3, 4].firstOrDefault();      // 1
[1, 2, 3, 4].first();               // 1
[].firstOrDefault();                // null
[].first();                         // Error: Sequence contains no elements
[1, 2, 3, 4].firstOrDefault(x => x > 2);    // 3
[1, 2, 3, 4].first(x => x > 2);             // 3
[1, 2, 3, 4].firstOrDefault(x => x >= 5);   // null
[1, 2, 3, 4].first(x => x >= 5);    // Error: Sequence contains no elements
```

### LastOrDefault / Last

- **lastOrDefault**
  Returns the last element of a sequence that satisfies a condition or a default value if no such element is found.
- **last**
  Returns the last element of a sequence that satisfies a specified condition.

```javascript
[1, 2, 3, 4].lastOrDefault();       // 4
[1, 2, 3, 4].last();                // 4
[].lastOrDefault();                 // null
[].last();                          // Error: Sequence contains no elements
[1, 2, 3, 4].lastOrDefault(x => x > 2);     // 4
[1, 2, 3, 4].last(x => x > 2);              // 4
[1, 2, 3, 4].lastOrDefault(x => x >= 5);    // null
[1, 2, 3, 4].last(x => x >= 5);     // Error: Sequence contains no elements
```

### SingleOrDefault / Single

- **singleOrDefault**
  Returns the only element of a sequence that satisfies a specified condition or a default value if no such element exists; this method throws an exception if more than one element satisfies the condition.
- **single**
  Returns the only element of a sequence that satisfies a specified condition, and throws an exception if more than one such element exists.

```javascript
[1, 2, 3, 4].singleOrDefault();     // Error: Sequence contains more than one element
[1, 2, 3, 4].single();              // Error: Sequence contains more than one element
[].singleOrDefault();               // null
[].single();                        // Error: Sequence contains no elements
[1, 2, 3, 4].singleOrDefault(x => x > 3);   // 4
[1, 2, 3, 4].single(x => x > 3);            // 4
[1, 2, 3, 4].singleOrDefault(x => x >= 5);  // null
[1, 2, 3, 4].single(x => x >= 5);   // Error: Sequence contains no elements
```

### Intersect / Except / Union

- **intersect**
  Produces the set intersection of two sequences by using the default equality comparer to compare values.
- **except**
  Produces the set difference of two sequences by using the default equality comparer to compare values.
- **union**
  Produces the set union of two sequences by using the default equality comparer.

```javascript
[1, 2, 3].intersect([2, 3, 4]);     // [ 2, 3 ]
[1, 2, 3].except([2, 3, 4]);        // [ 1 ]
[1, 2, 3].union([2, 3, 4]);         // [ 1, 2, 3, 4 ]
```

### SequenceEqual

- **sequenceEqual**
  Determines whether two sequences are equal by comparing the elements by using the default equality comparer for their type.

```javascript
[1, 2, 3].sequenceEqual([1, 2, 3]); // true
[1, 2, 3].sequenceEqual([2, 3, 4]); // false
```

### Contains

- **contains**
  Determines whether a sequence contains a specified element by using the default equality comparer.

```javascript
[1, 2, 3, 4].contains(2);           // true
[1, 2, 3, 4].contains(0);           // false
```

### Distinct

- **distinct**
  Returns distinct elements from a sequence by using the default equality comparer to compare values.

```javascript
[1, 2, 3, 4, 3, 4, 5].distinct();   // [ 1, 2, 3, 4, 5 ]
```

### OrderBy / ThenBy

- **orderBy**
  Sorts the elements of a sequence in ascending order according to a key.
- **thenBy**
  Keep the previous sort and do the next ascending sort.

```javascript
[
    { name:'b', gold: 2, silver: 2 },
    { name:'c', gold: 1, silver: 1 },
    { name:'a', gold: 2, silver: 3 },
].orderBy(x => x.gold).thenBy(x => x.silver).toArray().select(x => x.name);
// [ 'c', 'b', 'a' ]
```

### OrderByDescending / ThenByDescending

- **orderByDescending**
  Sorts the elements of a sequence in descending order according to a key.
- **thenByDescending**
  Keep the previous sort and do the next descending sort.

```javascript
[
    { name:'b', gold: 2, silver: 2 },
    { name:'c', gold: 1, silver: 1 },
    { name:'a', gold: 2, silver: 3 },
].orderByDescending(x => x.gold).thenByDescending(x => x.silver).toArray().select(x => x.name);
// [ 'a', 'b', 'c' ]
```

### GroupBy

- **groupBy**
  Groups the elements of a sequence according to a specified key selector function.

```javascript
[
    { name: 'a', flag: 'red' },
    { name: 'b', flag: 'blue' },
    { name: 'c', flag: 'red' },
].groupBy(x => x.flag);
/*
[
  [
    { name: 'a', flag: 'red' },
    { name: 'c', flag: 'red' },
    key: 'red'
  ],
  [ { name: 'b', flag: 'blue' }, key: 'blue' ]
]
*/
```

### GroupJoin

- **groupJoin**
  Correlates the elements of two sequences based on equality of keys and groups the results. The default equality comparer is used to compare keys.

```javascript
[
    { name: 'a', flag: 'red' },
    { name: 'b', flag: 'blue' },
].groupJoin([
    { user: 'a', rank: 1 },
    { user: 'a', rank: 3 },
    { user: 'a', rank: 4 },
    { user: 'b', rank: 2 },
], x => x.name, x => x.user, (o, i) => {
    return {
        name: o.name,
        minRank: i.min(xx => xx.rank),
        maxRank: i.max(xx => xx.rank),
        flag: o.flag,
    };
});
/*
[
  { name: 'a', minRank: 1, maxRank: 4, flag: 'red' },
  { name: 'b', minRank: 2, maxRank: 2, flag: 'blue' }
]
*/
```

### Zip

- **zip**
  Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.

```javascript
[1, 2].zip(['a', 'b', 'c']);    // [ { first: 1, second: 'a' }, { first: 2, second: 'b' } ]
[1, 2].zip(['a', 'b', 'c'], (first, second) => {    
    return {
        f: first,
        s: second
    }; 
});                             // [ { f: 1, s: 'a' }, { f: 2, s: 'b' } ]
```

### Aggregate

- **aggregate** (similar to **JavaScript** function **reduce**)
  Applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.

```javascript
[2, 3, 4].aggregate(5, (prev, current) => prev * current);  // 120
[2, 3, 4].aggregate(5,
    (prev, current) => prev * current,
    result => 'result = ' + result);                        // result = 120
```

### DefaultIfEmpty

- **defaultIfEmpty**
  Returns the elements of the specified sequence or the specified value in a singleton collection if the sequence is empty.

```javascript
['a', 'b'].defaultIfEmpty();    // [ 'a', 'b' ]
[].defaultIfEmpty();            // [ null ]
```

