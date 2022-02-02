export default class MyStudent
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
