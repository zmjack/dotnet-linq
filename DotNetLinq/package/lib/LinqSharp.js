"use strict";
/// <reference path="lib/extend.linqsharp.d.ts" />
exports.__esModule = true;
exports.LinqSharp = void 0;
var LinqSharp = /** @class */ (function () {
    function LinqSharp() {
    }
    LinqSharp.enable = function () {
        Array.prototype.selectUntil = this.selectUntil;
        Array.prototype.selectWhile = this.selectWhile;
        Array.prototype.selectMore = this.selectMore;
        return true;
    };
    LinqSharp.selectUntil = function (selector, until) {
        var recursiveChildren = function (node, list) {
            var _a;
            var selectNode = selector(node);
            if (until(selectNode))
                list.push(node);
            else {
                if ((_a = (selectNode === null || selectNode === void 0 ? void 0 : selectNode.length) > 0) !== null && _a !== void 0 ? _a : false) {
                    for (var _i = 0, selectNode_1 = selectNode; _i < selectNode_1.length; _i++) {
                        var subNode = selectNode_1[_i];
                        recursiveChildren(subNode, list);
                    }
                }
            }
        };
        var source = this;
        var ret = [];
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var item = source_1[_i];
            recursiveChildren(item, ret);
        }
        return ret;
    };
    LinqSharp.selectWhile = function (selector, _while) {
        var recursiveChildren = function (node, list) {
            var _a;
            var selectNode = selector(node);
            if (_while(selectNode)) {
                list.push(node);
                if ((_a = (selectNode === null || selectNode === void 0 ? void 0 : selectNode.length) > 0) !== null && _a !== void 0 ? _a : false) {
                    for (var _i = 0, selectNode_2 = selectNode; _i < selectNode_2.length; _i++) {
                        var subNode = selectNode_2[_i];
                        recursiveChildren(subNode, list);
                    }
                }
            }
        };
        var source = this;
        var ret = [];
        for (var _i = 0, source_2 = source; _i < source_2.length; _i++) {
            var item = source_2[_i];
            recursiveChildren(item, ret);
        }
        return ret;
    };
    LinqSharp.selectMore = function (selector) {
        var recursiveChildren = function (node, list) {
            var _a;
            list.push(node);
            var selectNode = selector(node);
            if ((_a = (selectNode === null || selectNode === void 0 ? void 0 : selectNode.length) > 0) !== null && _a !== void 0 ? _a : false) {
                for (var _i = 0, selectNode_3 = selectNode; _i < selectNode_3.length; _i++) {
                    var subNode = selectNode_3[_i];
                    recursiveChildren(subNode, list);
                }
            }
        };
        var source = this;
        var ret = [];
        for (var _i = 0, source_3 = source; _i < source_3.length; _i++) {
            var item = source_3[_i];
            recursiveChildren(item, ret);
        }
        return ret;
    };
    return LinqSharp;
}());
exports.LinqSharp = LinqSharp;
