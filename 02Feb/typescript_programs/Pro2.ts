// Inheritance
// Single , Multilevel , Hierarchical
class ABC
{
    public fun1():void
    {
        console.log("ABC Fun1 ...... ")
    }   
    
    public fun2():void
    {
        console.log("ABC Fun2 ...... ")
    }  

    public fun3():void
    {
        console.log("ABC Fun3 ...... ")
    }  
}
class XYZ extends ABC
{
    public hello():void
    {
        console.log("XYZ Hello ...... ")
    }    

    public fun2():void
    {
        console.log("XYZ Fun2 ...... ")
    }  

    public fun3():void
    {
        super.fun3()
        console.log("XYZ Fun3 ...... ")
    }  
}

var ob1 = new XYZ()
ob1.hello() // Own Function
ob1.fun1() // Inherited Function
ob1.fun2() // Override Function
ob1.fun3()
//  Object (Own Beh...) >> Parent Object
