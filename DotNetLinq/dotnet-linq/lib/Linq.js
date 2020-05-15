"use strict";
exports.__esModule = true;
exports.Linq = void 0;
var Grouping_1 = require("./Grouping");
var Ordered_1 = require("./Ordered");
var Linq = /** @class */ (function () {
    function Linq() {
    }
    Linq.enable = function () {
        Array.prototype.select = this.select;
        Array.prototype.selectMany = this.selectMany;
        Array.prototype.where = this.where;
        Array.prototype.count = this.count;
        Array.prototype.any = this.any;
        Array.prototype.all = this.all;
        Array.prototype.sum = this.sum;
        Array.prototype.average = this.average;
        Array.prototype.min = this.min;
        Array.prototype.max = this.max;
        Array.prototype.take = this.take;
        Array.prototype.takeLast = this.takeLast;
        Array.prototype.takeWhile = this.takeWhile;
        Array.prototype.skip = this.skip;
        Array.prototype.skipLast = this.skipLast;
        Array.prototype.skipWhile = this.skipWhile;
        Array.prototype.firstOrDefault = this.firstOrDefault;
        Array.prototype.first = this.first;
        Array.prototype.lastOrDefault = this.lastOrDefault;
        Array.prototype.last = this.last;
        Array.prototype.singleOrDefault = this.singleOrDefault;
        Array.prototype.single = this.single;
        Array.prototype.intersect = this.intersect;
        Array.prototype.except = this.except;
        Array.prototype.union = this.union;
        Array.prototype.sequenceEqual = this.sequenceEqual;
        Array.prototype.contains = this.contains;
        Array.prototype.distinct = this.distinct;
        Array.prototype.orderBy = this.orderBy;
        Array.prototype.orderByDescending = this.orderByDescending;
        Array.prototype.groupBy = this.groupBy;
        Array.prototype.groupJoin = this.groupJoin;
        Array.prototype.zip = this.zip;
        Array.prototype.aggregate = this.aggregate;
        return true;
    };
    Linq.version = '0.1.5';
    Linq.select = function (selector) {
        return this.map(function (source, index) { return selector(source, index); });
    };
    Linq.selectMany = function (selector) {
        return this.map(function (source, index) { return selector(source, index); }).reduce(function (a, b) { return a.concat(b); });
    };
    Linq.where = function (predicate) {
        return this.filter(predicate);
    };
    Linq.count = function (predicate) {
        var source = !predicate ? this : this.filter(predicate);
        return source.length;
    };
    Linq.any = function (predicate) {
        var source = !predicate ? this : this.filter(predicate);
        return source.length > 0;
    };
    Linq.all = function (predicate) {
        var source = !predicate ? this : this.filter(function (item) { return !predicate(item); });
        return source.length === 0;
    };
    Linq.sum = function (selector) {
        return this.map(function (source) { return selector(source); }).reduce(function (a, b) { return a + b; });
    };
    Linq.average = function (selector) {
        return this.map(function (source) { return selector(source); }).reduce(function (a, b) { return a + b; }) / this.length;
    };
    Linq.min = function (selector) {
        return Math.min.apply(Math, this.map(function (source) { return selector(source); }));
    };
    Linq.max = function (selector) {
        return Math.max.apply(Math, this.map(function (source) { return selector(source); }));
    };
    Linq.take = function (count) {
        return this.slice(0, count);
    };
    Linq.takeLast = function (count) {
        return this.slice(this.length - count);
    };
    Linq.takeWhile = function (predicate) {
        var count = 0;
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var item = _a[_i];
            if (predicate(item))
                count++;
            else
                break;
        }
        return this.slice(0, count);
    };
    Linq.skip = function (count) {
        return this.slice(count);
    };
    Linq.skipLast = function (count) {
        return this.slice(0, this.length - count);
    };
    Linq.skipWhile = function (predicate) {
        var count = 0;
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var item = _a[_i];
            if (predicate(item))
                count++;
            else
                break;
        }
        return this.slice(count);
    };
    Linq.firstOrDefault = function (predicate) {
        var source = !predicate ? this : this.filter(predicate);
        if (source.length > 0)
            return source[0];
        else
            return null;
    };
    Linq.first = function (predicate) {
        var source = !predicate ? this : this.filter(predicate);
        if (source.length > 0)
            return source[0];
        else
            throw new Error('Sequence contains no elements');
    };
    Linq.lastOrDefault = function (predicate) {
        var source = !predicate ? this : this.filter(predicate);
        if (source.length > 0)
            return source[source.length - 1];
        else
            return null;
    };
    Linq.last = function (predicate) {
        var source = !predicate ? this : this.filter(predicate);
        if (source.length > 0)
            return source[source.length - 1];
        else
            throw new Error('Sequence contains no elements');
    };
    Linq.singleOrDefault = function (predicate) {
        var source = !predicate ? this : this.filter(predicate);
        if (source.length > 0) {
            if (source.length == 1)
                return source[0];
            else
                throw new Error('Sequence contains more than one element');
        }
        else
            return null;
    };
    Linq.single = function (predicate) {
        var source = !predicate ? this : this.filter(predicate);
        if (source.length > 0) {
            if (source.length == 1)
                return source[0];
            else
                throw new Error('Sequence contains more than one element');
        }
        else
            throw new Error('Sequence contains no elements');
    };
    Linq.intersect = function (second) {
        var first = this;
        return first.filter(function (x) { return second.includes(x); });
    };
    Linq.except = function (second) {
        var first = this;
        return first.filter(function (x) { return !second.includes(x); });
    };
    Linq.union = function (second) {
        var first = this;
        return first.concat(second.filter(function (x) { return !first.includes(x); }));
    };
    Linq.sequenceEqual = function (second) {
        var first = this;
        if (first.length !== second.length)
            return false;
        for (var i = 0; i < first.length; i++) {
            if (first[i] !== second[i])
                return false;
        }
        return true;
    };
    Linq.contains = function (value) {
        return this.indexOf(value) > -1;
    };
    Linq.distinct = function () {
        return Array.from(new Set(this));
    };
    Linq.orderBy = function (keySelector) {
        return new Ordered_1.Ordered(this, keySelector, false, void 0);
    };
    Linq.orderByDescending = function (keySelector) {
        return new Ordered_1.Ordered(this, keySelector, true, void 0);
    };
    Linq.groupBy = function (keySelector) {
        var keyIndexies = {};
        var groups = [];
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var item = _a[_i];
            var key = keySelector(item);
            var skey = key.toString();
            if (Object.keys(keyIndexies).indexOf(skey) == -1) {
                keyIndexies[skey] = groups.length;
                groups.push(new Grouping_1.Grouping(key));
            }
            var index = keyIndexies[skey];
            groups[index].push(item);
        }
        return groups;
    };
    Linq.groupJoin = function (inner, outerKeySelector, innerKeySelector, resultSelector) {
        var outer = this;
        return outer.map(function (outerItem) {
            var outerKey = outerKeySelector(outerItem);
            var innerItems = inner.filter(function (innerItem) { return innerKeySelector(innerItem) === outerKey; });
            return resultSelector(outerItem, innerItems);
        });
    };
    Linq.zip = function (second, resultSelector) {
        var first = this;
        var zip = [];
        var length = Math.min(first.length, second.length);
        if (!resultSelector) {
            for (var i = 0; i < length; i++) {
                zip.push({ first: first[i], second: second[i] });
            }
        }
        else {
            for (var i = 0; i < length; i++) {
                zip.push(resultSelector(first[i], second[i]));
            }
        }
        return zip;
    };
    Linq.aggregate = function (seed, func, resultSelector) {
        var source = this;
        var result = seed;
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var item = source_1[_i];
            result = func(result, item);
        }
        if (resultSelector)
            return resultSelector(result);
        else
            return result;
    };
    return Linq;
}());
exports.Linq = Linq;
