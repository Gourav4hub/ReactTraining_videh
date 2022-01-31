function fun1()
{
    console.log('Good Morning Everyone !') 
}

function hello(ob)
{
    console.log('Hello All !')
    ob()
}

hello(fun1)