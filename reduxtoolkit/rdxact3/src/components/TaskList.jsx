import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { Container, Form, FormGroup, FormFeedback, Button, ListGroup, ListGroupItem, Label, Input } from "reactstrap"
import { yupResolver } from "@hookform/resolvers/yup"
import taskSchema from "../schemas/taskSchema"
import { addTask, removeTask } from "../redux/taskSlice"


const TaskList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector((state)=>state.task.tasks)
    const {register, handleSubmit, reset, formState:{errors}} = 
        useForm({resolver:yupResolver(taskSchema)})
    const onSubmit = (data) => {
        dispatch(addTask(data.task))
        reset()
    }
    const {ref:taskRef, ...taskField} =  register("task")
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
            <Label for="task">New Task</Label>
            <Input id="task" type="text"
                invalid={!!errors.task}
                innerRef={taskRef} {...taskField}/>
            <FormFeedback>{errors.task?.message}</FormFeedback>
        </FormGroup>
        <Button color="primary" type="submit">Add Task</Button>
      </Form>
      <ListGroup className="mt-3">
        {tasks.map((task)=>(
            <ListGroupItem key={task.id} className="d-flex justify-content-between align-items-center">
                {task.task}
                <Button color="danger" size="sm" onClick={()=>dispatch(removeTask(task.id))}>Remove</Button>
            </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  )
}

export default TaskList
