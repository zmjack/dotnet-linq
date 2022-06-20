"use strict";
exports.__esModule = true;
/// <reference path="lib/extend.linq.d.ts" />
/// <reference path="lib/extend.linqsharp.d.ts" />
var assert = require("should");
var _1 = require(".");
_1.Linq.enable();
_1.LinqSharp.enable();
var lux = { name: 'Lux', win: 50.16, rank: 4, counter: [] };
var lissandra = { name: 'Lissandra', win: 49.96, rank: 4, counter: [] };
var ahri = { name: 'Ahri', win: 50.62, rank: 4, counter: [] };
var annie = { name: 'Annie', win: 50.42, rank: 3, counter: [] };
var anivia = { name: 'Anivia', win: 52.03, rank: 1, counter: [lux, lissandra] };
var ashe = { name: 'Ashe', win: 52.21, rank: 1, counter: [ahri] };
var blitzcrank = { name: 'Blitzcrank', win: 51.37, rank: 2, counter: [] };
var brand = { name: 'Brand', win: 52.17, rank: 1, counter: [lux] };
var caitlyn = { name: 'Caitlyn', win: 50.5, rank: 2, counter: [] };
var getRecords = function () { return [annie, anivia, ashe, blitzcrank, brand, caitlyn]; };
var getRecords2 = function () { return [annie, anivia, ashe, lux, lissandra, ahri]; };
var games = [
    { champion: 'Anivia', time: new Date() },
    { champion: 'Ashe', time: new Date() },
    { champion: 'Ashe', time: new Date() },
    { champion: 'Anivia', time: new Date() },
    { champion: 'Brand', time: new Date() },
    { champion: 'Anivia', time: new Date() },
];
console.log(_1.version);
describe('Linq Tests', function () {
    it('select test', function () {
        var records = getRecords();
        assert.deepEqual(records.select(function (x) { return x.name; }), ['Annie', 'Anivia', 'Ashe', 'Blitzcrank', 'Brand', 'Caitlyn']);
    });
    it('selectMany test', function () {
        var records = getRecords();
        assert.deepEqual(records.selectMany(function (x) { return x.counter; }).select(function (x) { return x.name; }), ['Lux', 'Lissandra', 'Ahri', 'Lux']);
    });
    it('where test', function () {
        var records = getRecords();
        assert.deepEqual(records.where(function (x) { return x.name.startsWith('A'); }).select(function (x) { return x.name; }), ['Annie', 'Anivia', 'Ashe']);
    });
    it('all test', function () {
        var records = getRecords();
        assert.deepEqual(records.all(function (x) { return x.win > 50; }), true);
        assert.deepEqual(records.all(function (x) { return x.win > 51; }), false);
    });
    it('count test', function () {
        var records = getRecords();
        assert.deepEqual(records.count(), 6);
        assert.deepEqual(records.count(function (x) { return x.name.startsWith('B'); }), 2);
    });
    it('any test', function () {
        var records = getRecords();
        assert.deepEqual(records.any(), true);
        assert.deepEqual(records.any(function (x) { return x.win < 50; }), false);
    });
    it('sum test', function () {
        var records = getRecords();
        assert.deepEqual(records.sum(function (x) { return x.rank; }), 10);
        assert.deepEqual([5, 6, 2, 3].sum(), 16);
    });
    it('average test', function () {
        var records = getRecords();
        assert.deepEqual(records.average(function (x) { return x.rank; }), 10 / 6);
        assert.deepEqual([5, 6, 2, 3].average(), 4);
    });
    it('min test', function () {
        var records = getRecords();
        assert.deepEqual(records.min(function (x) { return x.win; }), 50.42);
        assert.deepEqual([5, 6, 2, 3].min(), 2);
    });
    it('max test', function () {
        var records = getRecords();
        assert.deepEqual(records.max(function (x) { return x.win; }), 52.21);
        assert.deepEqual([5, 6, 2, 3].max(), 6);
    });
    it('take test', function () {
        var records = getRecords();
        assert.deepEqual(records.take(2).select(function (x) { return x.name; }), ['Annie', 'Anivia']);
    });
    it('takeLast test', function () {
        var records = getRecords();
        assert.deepEqual(records.takeLast(2).select(function (x) { return x.name; }), ['Brand', 'Caitlyn']);
    });
    it('takeWhile test', function () {
        var records = getRecords();
        assert.deepEqual(records.takeWhile(function (x) { return x.name.startsWith('A'); }).select(function (x) { return x.name; }), ['Annie', 'Anivia', 'Ashe']);
    });
    it('skip test', function () {
        var records = getRecords();
        assert.deepEqual(records.skip(4).select(function (x) { return x.name; }), ['Brand', 'Caitlyn']);
    });
    it('skipLast test', function () {
        var records = getRecords();
        assert.deepEqual(records.skipLast(4).select(function (x) { return x.name; }), ['Annie', 'Anivia']);
    });
    it('skipWhile test', function () {
        var records = getRecords();
        assert.deepEqual(records.skipWhile(function (x) { return x.name.startsWith('A'); }).select(function (x) { return x.name; }), ['Blitzcrank', 'Brand', 'Caitlyn']);
    });
    it('firstOrDefault test', function () {
        var records = getRecords();
        assert.deepEqual(records.firstOrDefault().name, 'Annie');
        assert.deepEqual(records.firstOrDefault(function (x) { return x.name.startsWith('D'); }), null);
    });
    it('first test', function () {
        var records = getRecords();
        assert.deepEqual(records.first().name, 'Annie');
        assert.throws(function () { return records.first(function (x) { return x.name.startsWith('D'); }); });
    });
    it('lastOrDefault test', function () {
        var records = getRecords();
        assert.deepEqual(records.lastOrDefault().name, 'Caitlyn');
        assert.deepEqual(records.lastOrDefault(function (x) { return x.name.startsWith('D'); }), null);
    });
    it('last test', function () {
        var records = getRecords();
        assert.deepEqual(records.last().name, 'Caitlyn');
        assert.throws(function () { return records.last(function (x) { return x.name.startsWith('D'); }); });
    });
    it('singleOrDefault test', function () {
        var records = getRecords();
        assert.throws(function () { return records.singleOrDefault(); });
        assert.deepEqual(records.singleOrDefault(function (x) { return x.name.startsWith('C'); }).name, 'Caitlyn');
        assert.deepEqual(records.singleOrDefault(function (x) { return x.name.startsWith('D'); }), null);
    });
    it('single test', function () {
        var records = getRecords();
        assert.throws(function () { return records.single(); });
        assert.deepEqual(records.single(function (x) { return x.name.startsWith('C'); }).name, 'Caitlyn');
        assert.throws(function () { return records.single(function (x) { return x.name.startsWith('D'); }); });
    });
    it('intersect test', function () {
        var records = getRecords();
        var records2 = getRecords2();
        assert.deepEqual(records.intersect(records2).select(function (x) { return x.name; }), ['Annie', 'Anivia', 'Ashe']);
    });
    it('except test', function () {
        var records = getRecords();
        var records2 = getRecords2();
        assert.deepEqual(records.except(records2).select(function (x) { return x.name; }), ['Blitzcrank', 'Brand', 'Caitlyn']);
    });
    it('union test', function () {
        var records = getRecords();
        var records2 = getRecords2();
        assert.deepEqual(records.union(records2).select(function (x) { return x.name; }), ['Annie', 'Anivia', 'Ashe', 'Blitzcrank', 'Brand', 'Caitlyn', 'Lux', 'Lissandra', 'Ahri']);
    });
    it('sequenceEqual test', function () {
        var records = getRecords();
        assert.deepEqual(true, records.select(function (x) { return x.name; }).sequenceEqual(['Annie', 'Anivia', 'Ashe', 'Blitzcrank', 'Brand', 'Caitlyn']));
    });
    it('contains test', function () {
        var records = getRecords();
        assert.deepEqual(true, records.contains(ashe));
        assert.deepEqual(false, records.contains(lux));
    });
    it('orderBy thenByDescending test', function () {
        var records = getRecords();
        var result = records.orderBy(function (x) { return x.rank; }).thenByDescending(function (x) { return x.win; }).toArray().select(function (x) { return x.name; });
        assert.deepEqual(result, ['Ashe', 'Brand', 'Anivia', 'Blitzcrank', 'Caitlyn', 'Annie']);
    });
    it('orderByDescending thenBy test', function () {
        var records = getRecords();
        var result = records.orderByDescending(function (x) { return x.rank; }).thenBy(function (x) { return x.win; }).toArray().select(function (x) { return x.name; });
        assert.deepEqual(result, ['Annie', 'Caitlyn', 'Blitzcrank', 'Anivia', 'Brand', 'Ashe']);
    });
    it('groupBy test', function () {
        var records = getRecords();
        var result = records.groupBy(function (x) { return x.rank; });
        assert.deepEqual(result[0].key, 3);
        assert.deepEqual(result[0].select(function (x) { return x.name; }), ['Annie']);
        assert.deepEqual(result[1].key, 1);
        assert.deepEqual(result[1].select(function (x) { return x.name; }), ['Anivia', 'Ashe', 'Brand']);
        assert.deepEqual(result[2].key, 2);
        assert.deepEqual(result[2].select(function (x) { return x.name; }), ['Blitzcrank', 'Caitlyn']);
    });
    it('groupBy test2', function () {
        var records = getRecords();
        var result = records.groupBy(function (x) { return { rank: x.rank }; });
        assert.deepEqual(result[0].key, { rank: 3 });
        assert.deepEqual(result[0].select(function (x) { return x.name; }), ['Annie']);
        assert.deepEqual(result[1].key, { rank: 1 });
        assert.deepEqual(result[1].select(function (x) { return x.name; }), ['Anivia', 'Ashe', 'Brand']);
        assert.deepEqual(result[2].key, { rank: 2 });
        assert.deepEqual(result[2].select(function (x) { return x.name; }), ['Blitzcrank', 'Caitlyn']);
    });
    it('groupJoin test', function () {
        var records = getRecords();
        var result = records.groupJoin(games, function (x) { return x.name; }, function (x) { return x.champion; }, function (o, i) {
            return {
                champion: o.name,
                count: i.length
            };
        });
        assert.deepEqual(result, [
            { champion: 'Annie', count: 0 },
            { champion: 'Anivia', count: 3 },
            { champion: 'Ashe', count: 2 },
            { champion: 'Blitzcrank', count: 0 },
            { champion: 'Brand', count: 1 },
            { champion: 'Caitlyn', count: 0 },
        ]);
    });
    it('zip test', function () {
        assert.deepEqual([1, 2].zip(['a', 'b', 'c']), [{ first: 1, second: 'a' }, { first: 2, second: 'b' }]);
        assert.deepEqual([1, 2].zip(['a', 'b', 'c'], function (first, second) { return { f: first, s: second }; }), [{ f: 1, s: 'a' }, { f: 2, s: 'b' }]);
    });
    it('aggregate test', function () {
        assert.deepEqual([2, 3, 4].aggregate(5, function (prev, current) { return prev * current; }), 120);
        assert.deepEqual([2, 3, 4].aggregate(5, function (prev, current) { return prev * current; }, function (result) { return 'result = ' + result; }), 'result = 120');
    });
    it('defaultIfEmpty test', function () {
        assert.deepEqual(['a', 'b'].defaultIfEmpty(), ['a', 'b']);
        assert.deepEqual([].defaultIfEmpty(), [null]);
    });
});
var trees = [{
        name: 'A',
        children: [{
                name: 'A-a',
                children: [
                    { name: '1' },
                    { name: '2' },
                ]
            }, {
                name: 'A-b',
                children: [
                    { name: '3' },
                ]
            }]
    }, {
        name: 'B',
        children: [
            { name: '4' },
            { name: '5' },
        ]
    }, {
        name: '6'
    }];
describe('LinqSharp Tests', function () {
    it('selectPage Tests', function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7];
        var expected = [4, 5, 6];
        var actual = numbers.selectPage(2, 3);
        assert.deepEqual(actual, expected);
    });
    it('selectUntil test', function () {
        var expected = ['1', '2', '3', '4', '5', '6'];
        var actual = trees.selectUntil(function (x) { return x.children; }, function (x) { var _a, _b; return !((_b = ((_a = x.children) === null || _a === void 0 ? void 0 : _a.length) > 0) !== null && _b !== void 0 ? _b : false); }).map(function (x) { return x.name; });
        assert.deepEqual(actual, expected);
    });
    it('selectWhile test', function () {
        var expected = ['A', 'A-a', 'A-b', 'B'];
        var actual = trees.selectWhile(function (x) { return x.children; }, function (x) { var _a, _b; return (_b = ((_a = x.children) === null || _a === void 0 ? void 0 : _a.length) > 0) !== null && _b !== void 0 ? _b : false; }).map(function (x) { return x.name; });
        assert.deepEqual(actual, expected);
    });
    it('selectMore test1', function () {
        var expected = ['A', 'A-a', '1', '2', 'A-b', '3', 'B', '4', '5', '6'];
        var actual = trees.selectMore(function (x) { return x.children; }).map(function (x) { return x.name; });
        assert.deepEqual(actual, expected);
    });
    it('selectMore test2', function () {
        var expected = ['A', 'A-a', 'A-b'];
        var actual = trees.selectMore(function (x) { return x.children; }, function (x) { return x.name.includes('A'); }).map(function (x) { return x.name; });
        assert.deepEqual(actual, expected);
    });
});
