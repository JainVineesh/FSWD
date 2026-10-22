//Demonstrate push()

const addTask = (tasks, newTask) => {
    tasks.push(newTask)
    return tasks
}
const tasks = ['Buy Groceries', 'Walk the Dog'];
console.log(addTask(tasks, "Finish Homework"))
