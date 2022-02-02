// Constructor is a special member function of a class. It is used
// for initialize the data members when the object is created. 
class Student
{
    // Declare Data Members
    private roll:number;
    private sname:string;
    private marks:number;
    private city:string;

    public constructor(roll:number=undefined,name:string=undefined,
                    marks:number=undefined,city:string=undefined)
    {
        this.roll = roll
        this.sname = name
        this.marks = marks
        this.city = city
    }

    // Define Member Function
    public show() : void
    {
        console.log("\nRoll : " , this.roll)
        console.log("Name : " , this.sname)
        console.log("Marks : " , this.marks)
        console.log("City : " , this.city)
    }
}


var ob1:Student = new Student(101,"Vikas",234.45,'Indore')
var ob2:Student = new Student(102,"Gopal",287.54,'Delhi')
var ob3:Student = new Student(103,"Meena",256.66,'Pune')

var ob4:Student = new Student()

ob1.show()
ob2.show()
ob3.show()
ob4.show()