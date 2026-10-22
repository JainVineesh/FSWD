import { useState } from 'react'
import { Container, Form, FormGroup, FormFeedback, Label, Input, Button, Table } from 'reactstrap'

const EventRegistrationForm = () => {
  const [registrations, setRegistrations] = useState([]);
  
  return (
    <Container className='mt-4'>
      <h2>Event Registration Form</h2>
      <Form>
        <FormGroup>
          <Label for="attendeeName">Attendee Name</Label>
          <Input id="attendeeName"
            type="text"
          />
          <FormFeedback>Error</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input id="age"
            type="number"
          />
          <FormFeedback>Error</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="numberOfTickets">Number of Tickets</Label>
          <Input id="numberOfTickets"
            type="number"
          />
          <FormFeedback>Error</FormFeedback>
        </FormGroup>
        <Button color='primary' type="submit">Register</Button>
      </Form>
      <Table className='mt-4'>
        <thead>
          <tr>
            <th>Attendee Name</th><th>Age</th><th>Number of Tickets</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </Container>
  )
}

export default EventRegistrationForm