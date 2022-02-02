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
    // Getter Method
    // public get name()
    // {
    //     return this.sname
    // }
    // Setter Method
    Student.prototype.setName = function (name) {
        this.sname = name;
    };
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
ob1.show();
// Setter
ob1.setName("Vikas Gupta");
ob1.show();
