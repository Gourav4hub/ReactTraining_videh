var ob1 = {
    roll : 101,
    name : 'Vikas',
    age : 34,
    marks : 345.44
}

// Spread Operator
// var ob2 = { ...ob1 }
var ob2 = { ...ob1, city:'indore',gender:'male' }

ob2.age = 21

console.log(ob1)
console.log(ob2)