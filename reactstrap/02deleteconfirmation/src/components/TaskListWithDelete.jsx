//A short exercise demonstrating ListGroup, ListGroupItem, Modal, ModalHeader,ModalBody, ModalFooter, Button

import { useState} from 'react'
import { Container, ListGroup, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const INITIAL_TASKS = [
    {id:1, name:"Write project proposal"},
    {id:2, name:"Review pull requests"},
    {id:3, name:"Update deployment docs"},
]
const TaskListWithDelete = () => {
    const [tasks, setTasks] = useState(INITIAL_TASKS)
    const [modalOpen, setModalOpen] = useState(false)
    const [taskToDelete, setTaskToDelete] = useState(null)

    const toggle = () => setModalOpen(!modalOpen)

    const handleDeleteClick = (task) => {
        setTaskToDelete(task)
        setModalOpen(true)
    }

    const handleConfirmDelete = () => {
        setTasks(tasks.filter((t)=>t.id !== taskToDelete.id))
        setModalOpen(false)
        setTaskToDelete(null)
    }

  return (
    <Container>
      <h2>My Tasks</h2>
      <ListGroup>
        {tasks.map((task)=>(
            <ListGroupItem key={task.id} className='d-flex justify-content-between align-items-center'>
                {task.name}
                <Button color="danger" size="sm" onClick={()=> handleDeleteClick(task)}>Delete</Button>
            </ListGroupItem>
        ))}
      </ListGroup>

      <Modal isOpen={modalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirm Delete</ModalHeader>
        <ModalBody>
            Are you sure you want to delete "{taskToDelete?.name}"? This cannot be undone.
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            <Button color="danger" onClick={handleConfirmDelete}>Delete</Button>
        </ModalFooter>
      </Modal>
    </Container>
  )
}

export default TaskListWithDelete
