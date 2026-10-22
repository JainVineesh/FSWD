//Demonstrate Nested Access & Destructuring

const account = {
    username: "Vinesh Jain",
    address: {
        city: "Nizwa",
        country: "Oman",
        zip: "112",
    },
}

console.log('City via dot notation: ', account.address.city)

const {city, zip} = account.address

console.log('Destructred city: ', city)
console.log('Destructred zip: ', zip)