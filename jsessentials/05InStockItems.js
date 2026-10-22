//Demonstrate filter() + map() chained

const getInStockNames = (cartItems) => {
    return cartItems
        .filter((item)=>item.inStock)
        .map((item)=>item.name)
}

const cartItems = [
    {name:"Headphones", price:59, inStock:true},
    {name:"Keyboard", price:25, inStock:false},
    {name:"Mouse", price:20, inStock:true},
]

console.log(getInStockNames(cartItems))