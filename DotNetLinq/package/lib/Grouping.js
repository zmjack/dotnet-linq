"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Grouping = void 0;
var Grouping = /** @class */ (function (_super) {
    __extends(Grouping, _super);
    function Grouping(key) {
        var _this = _super.call(this) || this;
        _this.key = key;
        return _this;
    }
    return Grouping;
}(Array));
exports.Grouping = Grouping;
