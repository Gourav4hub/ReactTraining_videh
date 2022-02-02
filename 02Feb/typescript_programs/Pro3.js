var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ABC = /** @class */ (function () {
    function ABC(a) {
        if (a === void 0) { a = undefined; }
        this.a = a;
    }
    ABC.prototype.show = function () {
        console.log("A : ", this.a);
    };
    return ABC;
}());
var XYZ = /** @class */ (function (_super) {
    __extends(XYZ, _super);
    function XYZ(x, a) {
        if (x === void 0) { x = undefined; }
        if (a === void 0) { a = undefined; }
        var _this = _super.call(this, a) // base class constructor
         || this;
        _this.x = x;
        return _this;
    }
    XYZ.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("X : ", this.x);
    };
    return XYZ;
}(ABC));
var ob1 = new XYZ(45, 32);
ob1.show();
