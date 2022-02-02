"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var ob1 = new Student_1["default"](101, "Vikas", 234.45, 'Indore');
var ob2 = new Student_1["default"](102, "Gopal", 287.54, 'Delhi');
var ob3 = new Student_1["default"](103, "Meena", 256.66, 'Pune');
var ob4 = new Student_1["default"](104, "Pooja", 221.66, 'Pune');
var ob5 = new Student_1["default"](105, "Lokesh", 244.46, 'Indore');
var arr = [ob1, ob2, ob3, ob4, ob5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var ob = arr_1[_i];
    ob.show();
}
