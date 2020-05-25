"use strict";
exports.__esModule = true;
exports.LinqSharp = void 0;
var LinqSharp = /** @class */ (function () {
    function LinqSharp() {
    }
    LinqSharp.enable = function () {
        Array.prototype.selectManyUntil = this.selectManyUntil;
        return true;
    };
    LinqSharp.version = '0.0.1';
    LinqSharp.selectManyUntil = function (selector, until) {
        var recursiveChildren = function (node, list) {
            var children = selector(node);
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                var select = selector(child);
                if (!until(select))
                    recursiveChildren(child, list);
                else
                    list.push(child);
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
    return LinqSharp;
}());
exports.LinqSharp = LinqSharp;
