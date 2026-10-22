//Demonstrate map()

const celsiusToFah = (temps) => {
    return temps.map((c) => Math.round((c*9)/5+32))
}

const celTemp = [0, 20, 37, 100]

console.log(celsiusToFah(celTemp))