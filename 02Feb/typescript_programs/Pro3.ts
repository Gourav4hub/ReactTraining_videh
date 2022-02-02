class ABC
{
    private a:number;

    public constructor(a:number=undefined)
    {
        this.a = a
    }
    public show():void
    {
        console.log("A : ",this.a)
    }
}

class XYZ extends ABC
{
    private x:number;
    public constructor(x:number=undefined,a:number=undefined)
    {
        super(a) // base class constructor
        this.x = x
    }
    public show():void
    {
        super.show()
        console.log("X : ",this.x)
    }
}

var ob1 = new XYZ(45,32)
ob1.show()