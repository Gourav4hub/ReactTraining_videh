// Inheritance
// Single , Multilevel , Hierarchical
class ABC
{
    public fun1():void
    {
        console.log("ABC Fun1 ...... ")
    }    
}
class PQR extends ABC
{

}

class XYZ extends ABC
{
    public hello():void
    {
        console.log("XYZ Hello ...... ")
    }    
}

var ob1 = new XYZ()
ob1.hello() // Own Function
ob1.fun1() // Inherited Function