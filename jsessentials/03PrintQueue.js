//Demonstrate shift() and unshift()

const processNextJob = (queue) => {
    return queue.shift()
}

const addRushJob = (queue, job) => {
    queue.unshift(job)
    return queue
}

const printQueue = ['Report.pdf', 'Invoice.pdf','Poster.pdf']

console.log('Processed: ', processNextJob(printQueue))
console.log('Queue Now: ', printQueue)
console.log('After rush job: ', addRushJob(printQueue, 'Urgent-Memo.pdf'))
