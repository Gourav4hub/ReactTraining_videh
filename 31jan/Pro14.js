// Callback
// Blocking and NonBlocking(Asynchronous)

function add(a,b,callback)
{
    var c = a + b
    for(var x=1;x<938583844;x++){}
    callback(c) // Call this callback
}

console.log("Good Morning !")

setTimeout(add,1,22,33,(result)=>{
    console.log(result)
})

console.log("thanks")