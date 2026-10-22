//Demonstrate Methods & this keyword

const rectangle = {
    width: 8,
    height: 5,
    area() {
        return this.width * this.height
    },
}
console.log("Area of Rectangle: ", rectangle.area())