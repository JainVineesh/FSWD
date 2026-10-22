//Demonstrate impure -> pure functions

let impureCount = 0

const incrementImpure = () => {
    impureCount += 1
    return impureCount
}

const incrementPure = (count) => {
    return count+1
}

console.log('impure calls (order-dependent): ', incrementImpure(), incrementImpure())
console.log('pure calls (always predictable): ', incrementPure(5), incrementPure(5))