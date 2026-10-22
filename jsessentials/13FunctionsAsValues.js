//Demonstrate functions as values

const double = (n) => n * 2
const square = (n) => n * n
const negate = (n) => -n

const numbers = [1,2,3,4]

console.log("Doubled: ", numbers.map(double))
console.log("Squared: ", numbers.map(square))
console.log("Negated: ", numbers.map(negate))