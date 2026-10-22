//Demonstrate Higher-order functions (that takes another function as a parameter)

const repeat = (fn, times) => {
    for(let i=1;i<=times;i++){
        fn(i)
    }
}

repeat((n) => console.log(`Watering the plant - day ${n}`), 3)