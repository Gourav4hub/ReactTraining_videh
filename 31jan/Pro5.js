function add(a,b)
{
    var c = a + b
    console.log("Result : ", c)
}
function mul(a,b)
{
    var c = a * b
    console.log("Result : ", c)
}

function hello(a,b,ob)
{
    console.log("Hello Students !")
    ob(a,b)
    console.log("Good Morning !")
}

// Arrow Function

hello(34,21,(a,b)=> 
{
    var c = a - b
    console.log("Result : ",c)
})



