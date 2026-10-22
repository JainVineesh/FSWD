//Demonstrate impure to pure refactoring

const addItemImpure = (list, item) => {
    list.push(item) //mutates the original array
    return list
}

const addItemPure = (list, item) => {
    return [...list, item] //returns a new array, original array untouched
}

const originalList = ['Apple', 'Banana']

const pureResult = addItemPure(originalList, 'Cherry')

console.log("Original list (unchanged): ", originalList)
console.log("New list from pure function: ", pureResult)