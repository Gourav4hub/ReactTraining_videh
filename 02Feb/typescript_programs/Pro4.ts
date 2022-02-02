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

    // Getter Method
    public getName() : string
    {
        return this.sname
    }

    // Setter Method
    public setName(name:string):void
    {
        this.sname = name
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

ob1.show()

// Setter
ob1.setName("Vikas Gupta")

ob1.show()

console.log(ob1.getName())



