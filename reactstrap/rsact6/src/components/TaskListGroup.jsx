import {useState} from 'react'
import { Container, ListGroup, ListGroupItem, Badge } from 'reactstrap'

const INITIAL_TASKS = [
  { id: 1, name: "Prepare sprint demo", done: false },
  { id: 2, name: "Merge feature branch", done: true },
  { id: 3, name: "Write unit tests", done: false },
];

const TaskListGroup = () => {
    const [tasks, setTasks] = useState(INITIAL_TASKS)

    const toggleDone = (id) => {
        setTasks(
            tasks.map((task)=>task.id===id?{...task, done:!task.done}:task)
        )
    }

  return (
    <Container className='mt-4'>
        <h2>Sprint Tasks</h2>
        <ListGroup>
            {tasks.map((task) => (
                <ListGroupItem key={task.id} 
                    tag="button" 
                    action active={task.done} 
                    onClick={()=>toggleDone(task.id)} 
                    className='d-flex justify-content-between align-items-center'>
                    {task.name}
                    <Badge color={task.done?"success":"secondary"} pill>
                        {task.done?"Done":"Pending"}
                    </Badge>
                </ListGroupItem>
            ))}
        </ListGroup>
    </Container>
  )
}

export default TaskListGroup
