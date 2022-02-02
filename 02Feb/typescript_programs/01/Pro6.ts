import MyStudent from './Student'

var ob1:MyStudent = new MyStudent(101,"Vikas",234.45,'Indore')
var ob2:MyStudent = new MyStudent(102,"Gopal",287.54,'Delhi')
var ob3:MyStudent = new MyStudent(103,"Meena",256.66,'Pune')
var ob4:MyStudent = new MyStudent(104,"Pooja",221.66,'Pune')
var ob5:MyStudent = new MyStudent(105,"Lokesh",244.46,'Indore')

var arr:MyStudent[] = [ob1,ob2,ob3,ob4,ob5] 

for(let ob of arr)
{
    ob.show()
}