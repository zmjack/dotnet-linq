"use strict";
exports.__esModule = true;
/// <reference path="lib/extend.d.ts" />
var assert = require("should");
var _1 = require(".");
_1["default"].enable();
console.log(_1["default"].version);
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
    }];
describe('dotnet-linq-sharp tests', function () {
    it('selectManyUntil test', function () {
        var expected = ['1', '2', '3', '4', '5'];
        var actual = trees.selectManyUntil(function (x) { return x.children; }, function (x) { var _a; return !((_a = (x === null || x === void 0 ? void 0 : x.length) > 0) !== null && _a !== void 0 ? _a : false); }).map(function (x) { return x.name; });
        assert.deepEqual(actual, expected);
    });
});
