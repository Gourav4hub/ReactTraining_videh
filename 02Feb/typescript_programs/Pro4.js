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
var Person = /** @class */ (function () {
    function Person(pname, age, phone) {
        if (pname === void 0) { pname = undefined; }
        if (age === void 0) { age = undefined; }
        if (phone === void 0) { phone = undefined; }
        this.pname = pname;
        this.age = age;
        this.phone = phone;
    }
    Person.prototype.show = function () {
        console.log("\nName : ", this.pname);
        console.log("Age : ", this.age);
        console.log("Phone : ", this.phone);
    };
    return Person;
}());
var Faculty = /** @class */ (function (_super) {
    __extends(Faculty, _super);
    function Faculty(facid, salary, pname, age, phone) {
        if (facid === void 0) { facid = undefined; }
        if (salary === void 0) { salary = undefined; }
        if (pname === void 0) { pname = undefined; }
        if (age === void 0) { age = undefined; }
        if (phone === void 0) { phone = undefined; }
        var _this = _super.call(this, pname, age, phone) || this;
        _this.facid = facid;
        _this.salary = salary;
        return _this;
    }
    Faculty.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("Facid : ", this.facid);
        console.log("Salary : ", this.salary);
    };
    return Faculty;
}(Person));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(roll, marks, pname, age, phone) {
        if (roll === void 0) { roll = undefined; }
        if (marks === void 0) { marks = undefined; }
        if (pname === void 0) { pname = undefined; }
        if (age === void 0) { age = undefined; }
        if (phone === void 0) { phone = undefined; }
        var _this = _super.call(this, pname, age, phone) || this;
        _this.roll = roll;
        _this.marks = marks;
        return _this;
    }
    Student.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("Roll : ", this.roll);
        console.log("Marks : ", this.marks);
    };
    return Student;
}(Person));
var ob1 = new Faculty(101, 23524.33, "Vikas", 34, "9871928319");
var ob2 = new Student(1458, 354.33, "Meena", 28, "7771928319");
var ob3 = new Person("Gopal", 23, "85928319");
function fun1(ob) {
    ob.show();
}
function fun2(ob) {
    ob.show();
}
fun2(ob2);
fun2(ob1);
fun2(ob3);
