/// <reference path="lib/extend.d.ts" />
import * as assert from 'should'
import LinqSharp from '.'

declare var describe: (name: string, func: Function) => void;
declare var it: (name: string, func: Function) => void;

LinqSharp.enable();

console.log(LinqSharp.version);

type Tree = { name: string, children?: Tree[] };

var trees: Tree[] = [{
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
}];

describe('dotnet-linq-sharp tests', () => {

    it('selectManyUntil test', () => {
        var expected = ['1', '2', '3', '4', '5'];
        var actual = trees.selectManyUntil(x => x.children, x => !(x?.length > 0 ?? false)).map(x => x.name);
        assert.deepEqual(actual, expected);
    });

});
