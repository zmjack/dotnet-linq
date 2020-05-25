"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
        var recursiveChildren = function (node) {
            var children, children_1, children_1_1, child, select, _a, _b, child_, e_1_1, e_2_1;
            var e_2, _c, e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        children = selector(node);
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 15, 16, 17]);
                        children_1 = __values(children), children_1_1 = children_1.next();
                        _e.label = 2;
                    case 2:
                        if (!!children_1_1.done) return [3 /*break*/, 14];
                        child = children_1_1.value;
                        select = selector(child);
                        if (!!until(select)) return [3 /*break*/, 11];
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 8, 9, 10]);
                        _a = (e_1 = void 0, __values(recursiveChildren(child))), _b = _a.next();
                        _e.label = 4;
                    case 4:
                        if (!!_b.done) return [3 /*break*/, 7];
                        child_ = _b.value;
                        return [4 /*yield*/, child_];
                    case 5:
                        _e.sent();
                        _e.label = 6;
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, child];
                    case 12:
                        _e.sent();
                        _e.label = 13;
                    case 13:
                        children_1_1 = children_1.next();
                        return [3 /*break*/, 2];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (children_1_1 && !children_1_1.done && (_c = children_1["return"])) _c.call(children_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 17: return [2 /*return*/];
                }
            });
        };
        var source = this;
        console.log(source);
        var ret = source.map(function (x) {
            var e_3, _a;
            var ret = [];
            try {
                for (var _b = __values(recursiveChildren(x)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    ret.push(item);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return ret;
        }).reduce(function (a, b) { return a.concat(b); });
        return ret;
    };
    return LinqSharp;
}());
exports.LinqSharp = LinqSharp;
