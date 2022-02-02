"use strict";
exports.__esModule = true;
var MyStudent = /** @class */ (function () {
    function MyStudent(roll, name, marks, city) {
        if (roll === void 0) { roll = undefined; }
        if (name === void 0) { name = undefined; }
        if (marks === void 0) { marks = undefined; }
        if (city === void 0) { city = undefined; }
        this.roll = roll;
        this.sname = name;
        this.marks = marks;
        this.city = city;
    }
    // Define Member Function
    MyStudent.prototype.show = function () {
        console.log("\nRoll : ", this.roll);
        console.log("Name : ", this.sname);
        console.log("Marks : ", this.marks);
        console.log("City : ", this.city);
    };
    return MyStudent;
}());
exports["default"] = MyStudent;
