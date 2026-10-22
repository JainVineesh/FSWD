//Activity 1
const printQueue = ['Report.pdf', 'Invoice.pdf', 'Poster.pdf']

function processNextJob(queue) {
    return queue.shift()
}

function addRushJob (queue, job) {
    queue.unshift(job)
    return queue
}

console.log('Processed: ', processNextJob(printQueue))
console.log("Queue Now: ", printQueue)
console.log('After rush job: ', addRushJob(printQueue, "Urgent-Memo.pdf"))

//Activity 2
const celsiusTemps = [0, 20, 37, 100]

const celsiusToFahrenheit = (temps) => {
    return temps.map((c)=>Math.round((c*9)/5 + 32))
}
console.log("Temperatures in Fahrenheit")
console.log(celsiusToFahrenheit(celsiusTemps))

//Activity 3
const cartItems = [
    {name:'Headphone', price:59, inStock:true},
    {name:'Keyboard', price:45, inStock:false},
    {name:'Mouse', price:25, inStock:true},
]

const getInStockNames = (cartItems) => {
    return cartItems
        .filter((item)=>item.inStock)
        .map((item)=>item.name)
}
console.log(getInStockNames(cartItems))

//Activity 4
const profile = {
    id:'e612043',
    name:'Vinesh Jain',
    email:'vinesh.jain@utas.edu.om',
    bio:'Full Stack Developer @ Nizwa',
    followers:1024,
}
const {name, email} = profile

console.log("Name: ", name)
console.log("Email: ", email)

//Activity 5

const rectangle = {
    width:8,
    height:5, 
    area() {
        return this.width * this.height
    }
}
console.log("Rectangle area: ", rectangle.area())

//Activity 6
const account = {
    username: 'Vinesh Jain',
    address: {
        city:"Dehradun",
        country:"India",
        zip:'248171',
    }
}
console.log("City via dot notation: ", account.address.city)

const {city, zip} = account.address
console.log("Destructured City: ", city)
console.log("Destructured Zip: ", zip)

//Activity 7
const cartItems2 = [
    {name: 'Notebook', price:3, quantity:2},
    {name: "Pen", price:1.5, quantity:4},
    {name: "Backpack", price:25, quantity:1},
]
const getCartTotal = (cartItems2) => {
    return cartItems2.reduce((total, item)=>
        total + item.price * item.quantity, 0)
}

const total = getCartTotal(cartItems2)

console.log("Cart Items: ", cartItems2)
console.log("Cart Total: ", total)

//Activity 22
function getRankedPlayers(players) {
    return [...players].sort((a, b) => b.score - a.score)
}

const players = [
    {name:"Ameera", score:45},
    {name:"Ahmed", score:89},
    {name:"Hiba", score:78},
]

const ranked = getRankedPlayers(players)
console.log("Original Players: ", players)
console.log("Ranked Leader Board: ", ranked)
console.log("")

//Activity 14
const orders = [
    {id:'A1', total:45},
    {id:'A2', total:78},
    {id:'A3', total:98},
]
const bigOrderIDs = orders
    .filter((order) => order.total > 50)
    .map((order) => order.id)

console.log("Orders over $50: ", bigOrderIDs)

//Activity 12

