//Demonstrate Destructuring

const profile = {
    id:'e612043',
    name:'Vinesh Jain',
    email:'vinesh.jain@utas.edu.om',
    bio:'Full Stack Developer based in Nizwa, Oman',
    followers:1204,
}

const {name, email } = profile

console.log("Name: ", name)
console.log("Email: ", email)