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
    LinqSharp.selectUntil = function (childrenSelector, predicate) {
        var recursiveChildren = function (node, list) {
            var _a;
            var selectNode = childrenSelector(node);
            if (predicate(selectNode))
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
    LinqSharp.selectWhile = function (childrenSelector, predicate) {
        var recursiveChildren = function (node, list) {
            var _a;
            var selectNode = childrenSelector(node);
            if (predicate(selectNode)) {
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
    LinqSharp.selectMore = function (childrenSelector, predicate) {
        var _this = this;
        var recursiveChildren = function (node, list) {
            var _a, _b;
            if ((_a = predicate === null || predicate === void 0 ? void 0 : predicate.call(_this, node)) !== null && _a !== void 0 ? _a : true)
                list.push(node);
            var selectNode = childrenSelector(node);
            if ((_b = (selectNode === null || selectNode === void 0 ? void 0 : selectNode.length) > 0) !== null && _b !== void 0 ? _b : false) {
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
