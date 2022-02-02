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
// Inheritance
var ABC = /** @class */ (function () {
    function ABC() {
    }
    ABC.prototype.fun1 = function () {
        console.log("ABC Fun1 ...... ");
    };
    return ABC;
}());
var XYZ = /** @class */ (function (_super) {
    __extends(XYZ, _super);
    function XYZ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XYZ.prototype.hello = function () {
        console.log("XYZ Hello ...... ");
    };
    return XYZ;
}(ABC));
var ob1 = new XYZ();
ob1.hello();
ob1.fun1();
