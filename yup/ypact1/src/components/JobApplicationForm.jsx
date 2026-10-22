import {useState} from 'react'
import { useForm } from 'react-hook-form'
import {Container, Form, FormGroup, Label, Input, FormFeedback, Button, Table } from 'reactstrap'
import { yupResolver } from '@hookform/resolvers/yup'
import jobApplicationSchema from '../schemas/jobApplicationSchema'

const JobApplicationForm = () => {
  const [applications, setApplications] = useState([])

  const {
    register, handleSubmit, reset, formState: {errors},
  } = useForm({resolver:yupResolver(jobApplicationSchema),
  })

  const onSubmit = (data) => {
    setApplications([...applications, data])
    reset()
  }

  const {ref:fullNameRef, ...fullNameField} = register("fullName")
  const {ref:emailRef, ...emailField} = register("email")
  const {ref:coverLetterRef, ...coverLetterField} = register("coverLetter")

  return (
    <Container className='mt-4'>
      <h2>Job Application</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="fullName">Full Name</Label>
          <Input id="fullName" 
            type="text" 
            invalid={!!errors}
            innerRef={fullNameRef} {...fullNameField}
            />
            <FormFeedback>{errors.fullName?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input id="email" 
            type="text" 
            invalid = {!!errors}
            innerRef={emailRef} {...emailField}
            />
            <FormFeedback>{errors.email?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="coverLetter">Cover Letter</Label>
          <Input id="coverLetter" 
            type="textarea" 
            invalid = {!!errors}
            innerRef={coverLetterRef} {...coverLetterField}
            />
            <FormFeedback>{errors.coverLetter?.message}</FormFeedback>
        </FormGroup>

        <Button color='primary' type="submit">Submit Application</Button>
      </Form>
      <Table className='mt-4'>
        <thead>
          <tr>
            <th>Full Name</th><th>Email</th><th>Cover Letter</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((a, index)=>(
            <tr key={index}>
              <td>{a.fullName}</td>
              <td>{a.email}</td>
              <td>{a.coverLetter}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default JobApplicationForm