//Demonstrate Function as arguments

const findFirst = (array, predicate) => {
    for(const item of array) {
        if(predicate(item)) return item;
    }
    return undefined
}
const inventory = [
    {name:'Charger', qty:0}, 
    {name:'Cable', qty:12}, 
    {name:'Case', qty:4}, 
]

const firstInStock = findFirst(inventory, (item)=>item.qty > 0)

console.log("First item in stock: ", firstInStock)