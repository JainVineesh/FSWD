//Demonstrate Filter and Map Cahining

const orders = [
    {id:'A1', total:42},
    {id:'A2', total:51},
    {id:'A3', total:88},
]

const bigOrderIDs = orders
    .filter((order)=>order.total>50)
    .map((order)=>order.id)

console.log("Orders over OMR 50: ", bigOrderIDs)