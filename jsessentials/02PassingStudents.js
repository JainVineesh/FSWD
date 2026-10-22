//Demonstrate filter()

const getPassingStudents = (students) => {
    return students.filter((s)=>s.marks>=60)
}
const students = [
    {name:"Hiba", marks:82},
    {name:"Hamood", marks:75},
    {name:"Hamed", marks:55},
]
console.log(getPassingStudents(students))