//Demonstrate Bracket Notation, Dot Notation

const translations = {
    hello:"Hola",
    goodbye:"Adios",
    thankyou:"Gracias",
}

const translate = (key) => {
    return translations[key]
}

const wordToTranslate = 'goodbye'

console.log(`"${wordToTranslate}" in Spanish is:`, translate(wordToTranslate))