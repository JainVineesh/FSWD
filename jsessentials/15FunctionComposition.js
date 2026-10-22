//Demonstrate Function Composition (Pipe two functions together)

const pipe = (f, g) => (x) => g(f(x))

const addTen = (n) => n + 10
const half = (n) => n/2

const addTenThenHalf = pipe(addTen, half)

console.log('addTenThenHalf(10): ',addTenThenHalf(10))
console.log('addTenThenHalf(30): ', addTenThenHalf(30))