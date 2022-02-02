// Constructor is a special member function of a class. It is used
// for initialize the data members when the object is created. 
var Student = /** @class */ (function () {
    function Student(roll, name, marks, city) {
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
    Student.prototype.show = function () {
        console.log("\nRoll : ", this.roll);
        console.log("Name : ", this.sname);
        console.log("Marks : ", this.marks);
        console.log("City : ", this.city);
    };
    return Student;
}());
var ob1 = new Student(101, "Vikas", 234.45, 'Indore');
var ob2 = new Student(102, "Gopal", 287.54, 'Delhi');
var ob3 = new Student(103, "Meena", 256.66, 'Pune');
var ob4 = new Student(104, "Pooja", 221.66, 'Pune');
var ob5 = new Student(105, "Lokesh", 244.46, 'Indore');
var arr = [ob1, ob2, ob3, ob4, ob5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var ob = arr_1[_i];
    ob.show();
}
