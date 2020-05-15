# dotnet-linq

**dotnet-linq** is a similar implementation of the **DotNet** platform **LINQ** for **TypeScript/JavaScript**.

<br/>

***TypeScript is recommended for a better programming experience, such as type hinting.***

<br/>

## Try it with NodeJS

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

```javascript
[1, 2, 3, 4].select(x => x * 2);        // [ 2, 4, 6, 8 ]
[[1, 2, 3], [4, 5]].selectMany(x => x);	// [ 1, 2, 3, 4, 5 ]
```

### Where

```javascript
[1, 2, 3, 4].where(x => x % 2 === 1);   // [ 1, 3 ]
```

### Count

```javascript
[1, 3, 5, 7].count(x => x <= 5);    // 3
```

### Any

```javascript
[2, 3, 5, 6].any();     // true
[].any();               // false
[2, 3, 5, 6].any(x => x > 3);       // true
[2, 3, 5, 6].any(x => x > 6);       // false
```

### All

```javascript
[2, 3, 5, 6].all(x => x >= 2);      // true
[2, 3, 5, 6].all(x => x >= 3);      // false
```

### Sum

```javascript
[2, 3, 5, 6].sum();             // 16
```

### Average

```javascript
[2, 3, 5, 6].average();         // 4
```

### Min / Max

```javascript
[5, 6, 2, 3].min();             // 2
[5, 6, 2, 3].max();             // 6
```

### Take / TakeLast / TakeWhile

```javascript
[1, 3, 4, 5].take(2);           // [ 1, 3 ]
[1, 3, 4, 5].takeLast(2);       // [ 4, 5 ]
[1, 3, 4, 5].takeWhile(x => x % 2 === 1);   // [ 1, 3 ]
```

### Skip / SkipLast / SkipWhile

```javascript
[1, 3, 4, 5].skip(2);           // [ 4, 5 ]
[1, 3, 4, 5].skipLast(2);       // [ 1, 3 ]
[1, 3, 4, 5].skipWhile(x => x % 2 === 1);   // [ 4, 5 ]
```

### FirstOrDefault / First

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

```javascript
[1, 2, 3, 4].singleOrDefault();     // Error: Sequence contains more than one element
[1, 2, 3, 4].single();              // Error: Sequence contains more than one element
[].singleOrDefault();               // null
[].single();                        // Uncaught Error: Sequence contains no elements
[1, 2, 3, 4].singleOrDefault(x => x > 3);   // 4
[1, 2, 3, 4].single(x => x > 3);            // 4
[1, 2, 3, 4].singleOrDefault(x => x >= 5);  // null
[1, 2, 3, 4].single(x => x >= 5);   // Uncaught Error: Sequence contains no elements
```

### Intersect / Except / Union

```javascript
[1, 2, 3].intersect([2, 3, 4]);     // [ 2, 3 ]
[1, 2, 3].except([2, 3, 4]);        // [ 1 ]
[1, 2, 3].union([2, 3, 4]);         // [ 1, 2, 3, 4 ]
```

### SequenceEqual

```javascript
[1, 2, 3].sequenceEqual([1, 2, 3]); // true
[1, 2, 3].sequenceEqual([2, 3, 4]); // false
```

### Contains

```javascript
[1, 2, 3, 4].contains(2);           // true
[1, 2, 3, 4].contains(0);           // false
```

### Distinct

```javascript
[1, 2, 3, 4, 3, 4, 5].distinct(2);  // [ 1, 2, 3, 4, 5 ]
```

### OrderBy / ThenBy

```javascript
[
    { name:'b', gold: 2, silver: 2 },
    { name:'c', gold: 1, silver: 1 },
    { name:'a', gold: 2, silver: 3 },
].orderBy(x => x.gold).thenBy(x => x.silver).toArray().select(x => x.name);
// [ 'c', 'b', 'a' ]
```

### OrderByDescending / ThenByDescending

```javascript
[
    { name:'b', gold: 2, silver: 2 },
    { name:'c', gold: 1, silver: 1 },
    { name:'a', gold: 2, silver: 3 },
].orderByDescending(x => x.gold).thenByDescending(x => x.silver).toArray().select(x => x.name);
// [ 'a', 'b', 'c' ]
```

### GroupBy

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

```javascript
[2, 3, 4].aggregate(5, (prev, current) => prev * current);  // 120
[2, 3, 4].aggregate(5,
    (prev, current) => prev * current,
    result => 'result = ' + result);                        // result = 120
```

### DefaultIfEmpty

```javascript
['a', 'b'].defaultIfEmpty();    // [ 'a', 'b' ]
[].defaultIfEmpty(), [null];    // [ null ]
```

