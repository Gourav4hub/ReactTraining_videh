// Object Oriented Pattern : Class / Object
// Class : Class is a place where we define our object.
    //      Blueprint of an object
// Object : Object is a instance of a class.
        // Features (Data Members) / Behaviours (Member Functions)
// Encapsulation : Wrapping up data and function 
//                  into a SINGLE UNIT (Object). 
    // Data Hiding : Hide the internal detail of  an objects       
// ***********************************************************

class Student
{
    // Declare Data Members
    private roll:number;
    private sname:string;
    private marks:number;
    private city:string;

    // Define Member Function
    public show() : void
    {
        console.log("\nRoll : " , this.roll)
        console.log("Name : " , this.sname)
        console.log("Marks : " , this.marks)
        console.log("City : " , this.city)
    }
}


var ob1:Student = new Student()

ob1.show()
