/// <reference path="lib/extend-array.d.ts" />
import * as assert from 'should'
import { Linq } from '.'

declare var describe: (name: string, func: Function) => void;
declare var it: (name: string, func: Function) => void;

Linq.enable();

type Champion = { name: string, win: number, rank: number, counter: Champion[] };
type Game = { champion: string, time: Date };
type GameStat = { champion: string, count: number };

var lux: Champion = { name: 'Lux', win: 50.16, rank: 4, counter: [] };
var lissandra: Champion = { name: 'Lissandra', win: 49.96, rank: 4, counter: [] };
var ahri: Champion = { name: 'Ahri', win: 50.62, rank: 4, counter: [] };

var annie: Champion = { name: 'Annie', win: 50.42, rank: 3, counter: [] };
var anivia: Champion = { name: 'Anivia', win: 52.03, rank: 1, counter: [lux, lissandra] };
var ashe: Champion = { name: 'Ashe', win: 52.21, rank: 1, counter: [ahri] };
var blitzcrank: Champion = { name: 'Blitzcrank', win: 51.37, rank: 2, counter: [] };
var brand: Champion = { name: 'Brand', win: 52.17, rank: 1, counter: [lux] };
var caitlyn: Champion = { name: 'Caitlyn', win: 50.5, rank: 2, counter: [] };

var getRecords = (): Champion[] => [annie, anivia, ashe, blitzcrank, brand, caitlyn];
var getRecords2 = (): Champion[] => [annie, anivia, ashe, lux, lissandra, ahri];

var games: Game[] = [
    { champion: 'Anivia', time: new Date() },
    { champion: 'Ashe', time: new Date() },
    { champion: 'Ashe', time: new Date() },
    { champion: 'Anivia', time: new Date() },
    { champion: 'Brand', time: new Date() },
    { champion: 'Anivia', time: new Date() },
]

describe('test', () => {

    it('zip test', () => {
        console.log([1, 2].zip(['a', 'b', 'c']));
        console.log([1, 2].zip(['a', 'b', 'c'], (first, second) => { return { f: first, s: second }; }));
    });
});

describe('ts-sharp-linq', () => {

    it('select test', () => {
        var records = getRecords();
        assert.deepEqual(records.select(x => x.name), ['Annie', 'Anivia', 'Ashe', 'Blitzcrank', 'Brand', 'Caitlyn']);
    });
    it('selectMany test', () => {
        var records = getRecords();
        assert.deepEqual(records.selectMany(x => x.counter).select(x => x.name), ['Lux', 'Lissandra', 'Ahri', 'Lux']);
    });

    it('where test', () => {
        var records = getRecords();
        assert.deepEqual(records.where(x => x.name.startsWith('A')).select(x => x.name), ['Annie', 'Anivia', 'Ashe']);
    });
    it('all test', () => {
        var records = getRecords();
        assert.deepEqual(records.all(x => x.win > 50), true);
        assert.deepEqual(records.all(x => x.win > 51), false);
    });
    it('count test', () => {
        var records = getRecords();
        assert.deepEqual(records.count(), 6);
        assert.deepEqual(records.count(x => x.name.startsWith('B')), 2);
    });
    it('any test', () => {
        var records = getRecords();
        assert.deepEqual(records.any(), true);
        assert.deepEqual(records.any(x => x.win < 50), false);
    });

    it('sum test', () => {
        var records = getRecords();
        assert.deepEqual(records.sum(x => x.rank), 10);
    });
    it('average test', () => {
        var records = getRecords();
        assert.deepEqual(records.average(x => x.rank), 10 / 6);
    });
    it('min test', () => {
        var records = getRecords();
        assert.deepEqual(records.min(x => x.win), 50.42);
    });
    it('max test', () => {
        var records = getRecords();
        assert.deepEqual(records.max(x => x.win), 52.21);
    });

    it('take test', () => {
        var records = getRecords();
        assert.deepEqual(records.take(2).select(x => x.name), ['Annie', 'Anivia']);
    });
    it('takeLast test', () => {
        var records = getRecords();
        assert.deepEqual(records.takeLast(2).select(x => x.name), ['Brand', 'Caitlyn']);
    });
    it('takeWhile test', () => {
        var records = getRecords();
        assert.deepEqual(records.takeWhile(x => x.name.startsWith('A')).select(x => x.name), ['Annie', 'Anivia', 'Ashe']);
    });
    it('skip test', () => {
        var records = getRecords();
        assert.deepEqual(records.skip(4).select(x => x.name), ['Brand', 'Caitlyn']);
    });
    it('skipLast test', () => {
        var records = getRecords();
        assert.deepEqual(records.skipLast(4).select(x => x.name), ['Annie', 'Anivia']);
    });
    it('skipWhile test', () => {
        var records = getRecords();
        assert.deepEqual(records.skipWhile(x => x.name.startsWith('A')).select(x => x.name), ['Blitzcrank', 'Brand', 'Caitlyn']);
    });

    it('firstOrDefault test', () => {
        var records = getRecords();
        assert.deepEqual(records.firstOrDefault().name, 'Annie');
        assert.deepEqual(records.firstOrDefault(x => x.name.startsWith('D')), null);
    });
    it('first test', () => {
        var records = getRecords();
        assert.deepEqual(records.first().name, 'Annie');
        assert.throws(() => records.first(x => x.name.startsWith('D')));
    });
    it('lastOrDefault test', () => {
        var records = getRecords();
        assert.deepEqual(records.lastOrDefault().name, 'Caitlyn');
        assert.deepEqual(records.lastOrDefault(x => x.name.startsWith('D')), null);
    });
    it('last test', () => {
        var records = getRecords();
        assert.deepEqual(records.last().name, 'Caitlyn');
        assert.throws(() => records.last(x => x.name.startsWith('D')));
    });
    it('singleOrDefault test', () => {
        var records = getRecords();
        assert.throws(() => records.singleOrDefault());
        assert.deepEqual(records.singleOrDefault(x => x.name.startsWith('C')).name, 'Caitlyn');
        assert.deepEqual(records.singleOrDefault(x => x.name.startsWith('D')), null);
    });
    it('single test', () => {
        var records = getRecords();
        assert.throws(() => records.single());
        assert.deepEqual(records.single(x => x.name.startsWith('C')).name, 'Caitlyn');
        assert.throws(() => records.single(x => x.name.startsWith('D')));
    });

    it('intersect test', () => {
        var records = getRecords();
        var records2 = getRecords2();
        assert.deepEqual(records.intersect(records2).select(x => x.name), ['Annie', 'Anivia', 'Ashe']);
    });
    it('except test', () => {
        var records = getRecords();
        var records2 = getRecords2();
        assert.deepEqual(records.except(records2).select(x => x.name), ['Blitzcrank', 'Brand', 'Caitlyn']);
    });
    it('union test', () => {
        var records = getRecords();
        var records2 = getRecords2();
        assert.deepEqual(records.union(records2).select(x => x.name), ['Annie', 'Anivia', 'Ashe', 'Blitzcrank', 'Brand', 'Caitlyn', 'Lux', 'Lissandra', 'Ahri']);
    });

    it('sequenceEqual test', () => {
        var records = getRecords();
        assert.deepEqual(true, records.select(x => x.name).sequenceEqual(['Annie', 'Anivia', 'Ashe', 'Blitzcrank', 'Brand', 'Caitlyn']));
    });
    it('contains test', () => {
        var records = getRecords();
        assert.deepEqual(true, records.contains(ashe));
        assert.deepEqual(false, records.contains(lux));
    });

    it('orderBy thenByDescending test', () => {
        var records = getRecords();
        var result = records.orderBy(x => x.rank).thenByDescending(x => x.win).toArray().select(x => x.name);
        assert.deepEqual(result, ['Ashe', 'Brand', 'Anivia', 'Blitzcrank', 'Caitlyn', 'Annie']);
    });
    it('orderByDescending thenBy test', () => {
        var records = getRecords();
        var result = records.orderByDescending(x => x.rank).thenBy(x => x.win).toArray().select(x => x.name);
        assert.deepEqual(result, ['Annie', 'Caitlyn', 'Blitzcrank', 'Anivia', 'Brand', 'Ashe']);
    });

    it('groupBy test', () => {
        var records = getRecords();
        var result = records.groupBy(x => x.rank);
        assert.deepEqual(result[0].key, 3);
        assert.deepEqual(result[0].select(x => x.name), ['Annie']);
        assert.deepEqual(result[1].key, 1);
        assert.deepEqual(result[1].select(x => x.name), ['Anivia', 'Ashe', 'Brand']);
        assert.deepEqual(result[2].key, 2);
        assert.deepEqual(result[2].select(x => x.name), ['Blitzcrank', 'Caitlyn']);
    });
    it('groupJoin test', () => {
        var records = getRecords();
        var result = records.groupJoin(games, x => x.name, x => x.champion, (o, i): GameStat => {
            return {
                champion: o.name,
                count: i.length,
            };
        });
        assert.deepEqual(result, [
            { champion: 'Annie', count: 0 },
            { champion: 'Anivia', count: 3 },
            { champion: 'Ashe', count: 2 },
            { champion: 'Blitzcrank', count: 0 },
            { champion: 'Brand', count: 1 },
            { champion: 'Caitlyn', count: 0 },
        ] as GameStat[]);
    });

    it('zip test', () => {
        assert.deepEqual([1, 2].zip(['a', 'b', 'c']), [{ first: 1, second: 'a' }, { first: 2, second: 'b' }]);
        assert.deepEqual([1, 2].zip(['a', 'b', 'c'], (first, second) => { return { f: first, s: second }; }), [{ f: 1, s: 'a' }, { f: 2, s: 'b' }]);
    });

    it('aggregate test', () => {
        assert.deepEqual([2, 3, 4].aggregate(5, (prev, current) => prev * current), 120);
        assert.deepEqual([2, 3, 4].aggregate(5, (prev, current) => prev * current, result => 'result = ' + result), 'result = 120');
    });
});
