class Person
{
    private pname:string;
    private age:number;
    private phone:string;

    public constructor(pname:string=undefined,
        age:number=undefined,phone:string=undefined)
    {
        this.pname = pname
        this.age = age
        this.phone = phone
    }

    public show() : void
    {
        console.log("\nName : " , this.pname)
        console.log("Age : " , this.age)
        console.log("Phone : " , this.phone)
    }
}

class Faculty extends Person
{
    private facid:number;
    private salary:number;

    public constructor(facid:number=undefined,salary:number=undefined,
        pname:string=undefined,
        age:number=undefined,phone:string=undefined)
    {
        super(pname,age,phone)
        this.facid = facid
        this.salary = salary
    }

    public show() : void
    {
        super.show()
        console.log("Facid : " , this.facid)
        console.log("Salary : " , this.salary)        
    }
}

class Student extends Person
{
    private roll:number;
    private marks:number;

    public constructor(roll:number=undefined,marks:number=undefined,
        pname:string=undefined,
        age:number=undefined,phone:string=undefined)
    {
        super(pname,age,phone)
        this.roll = roll
        this.marks = marks
    }

    public show() : void
    {
        super.show()
        console.log("Roll : " , this.roll)
        console.log("Marks : " , this.marks)        
    }
}

var ob1:Person = new Faculty(101,23524.33,"Vikas",34,"9871928319")
ob1.show()



