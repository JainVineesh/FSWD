const markCompleteImpure = (task) => {
    task.completed = true
    return task;
}

const markCompletePure = (task) => {
    return {...task, completed:true}
}

const originalTask = {id:1, title:"Write report", completed:false}

const updatedTask = markCompletePure(originalTask)

console.log("Original task (unchanged): ", originalTask)
console.log("Updated Task (new object): ", updatedTask)