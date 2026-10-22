import { useState } from 'react'
import {Container, ListGroup, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const INITIAL_TASKS = [
  { id: 1, name: "Write project proposal" },
  { id: 2, name: "Review pull requests" },
  { id: 3, name: "Update deployment docs" },
];

const TaskListWithDelete = () => {
  //Write code here
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [modalOpen, setModalOpen] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState(null)

  const toggle = () => setModalOpen(!modalOpen)
  
  const handleDeleteClick = (task) => {
    //Write code here
    setTaskToDelete(task)
    setModalOpen(true)
  }

  const handleConfirmDelete = () => {
    //Write code here
    setTasks(tasks.filter((t)=>t.id!==taskToDelete.id))
    setModalOpen(false)
    setTaskToDelete(null)
  }

  return (
    //Write code here
    <Container className='mt-4'>
      <h2>My Task List</h2>
      <ListGroup>
        {tasks.map((task)=>(
          <ListGroupItem key={task.id} className='d-flex justify-content-between align-items-center'>
            {task.name}
            <Button color='danger' size='sm' onClick={()=>handleDeleteClick(task)} >Delete</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Modal isOpen={modalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirm Delete</ModalHeader>
        <ModalBody>Are you sure to delete "{taskToDelete?.name}? This cannot be undone.</ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggle}>Cancel</Button>
          <Button color='danger' onClick={handleConfirmDelete}>Delete</Button>
        </ModalFooter>
      </Modal>
    </Container>
  )
}

export default TaskListWithDelete