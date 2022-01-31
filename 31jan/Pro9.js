var ob1 = {
    roll : 101,
    name : 'Vikas',
    age : 34,
    marks : 345.44,
    address : {
        city : 'pune',
        location : 'City Palace'
    }
}

// Spread Operator
var ob2 = { ...ob1 , address : { ...ob1.address }}

ob2.address.city = 'delhi'

console.log(ob1)
console.log(ob2)