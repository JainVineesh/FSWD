import { useDispatch, useSelector } from "react-redux"
import { Container, FormGroup, Label, Input, FormFeedback } from "reactstrap"
import nameSchema from "../schemas/nameSchema"
import { setName } from "../redux/nameSlice"

const LiveNameGreetings = () => {
  const name = useSelector((state)=>state.name.name)
  const dispatch = useDispatch()

  const isValid = nameSchema.isValidSync(name)

  return (
    <Container className="mt-4">
      <h2>Live Name Greetings</h2>
      <FormGroup>
        <Label for="name">Your Name</Label>
        <Input id="name" 
            type="text"
            value = {name}
            invalid={name.length>0 && !isValid}
            onChange={(e)=>dispatch(setName(e.target.value))}
        />
        <FormFeedback>Name must be at least 2 characters.</FormFeedback>
      </FormGroup>
      {isValid && <h3>Hello, {name}</h3>}
    </Container>
  )
}

export default LiveNameGreetings
