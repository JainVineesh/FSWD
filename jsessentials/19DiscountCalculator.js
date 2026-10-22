//Demonstrate pure function - predictable discount calculator

const calculateDiscount = (price, percentage) => {
    return price - price * (percentage / 100)
}

const firstCall = calculateDiscount(200, 25)
const secondCall = calculateDiscount(200, 25)

console.log("First Call: ", firstCall)
console.log("Second Call: ", secondCall)
console.log("Same input always gives the same output: ", firstCall===secondCall)