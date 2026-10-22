import { useDispatch, useSelector } from "react-redux"
import { Container, Card, CardBody, CardTitle, Button } from "reactstrap"
import { increment, decrement, reset } from "../redux/scoreSlice"

const StudentScore = () => {
    const score = useSelector((state)=>state.score.score)
    
    const dispatch = useDispatch()

  return (
    <Container className="mt-4">
        <Card>
            <CardBody>
                <CardTitle tag="h2">Student Score</CardTitle>
                <h3>{score}</h3>
                <Button color="primary" className="me-4 w-25" onClick={()=>dispatch(increment())}>Increase</Button>
                <Button color="secondary" className="w-25" onClick={()=>dispatch(decrement())}>Decrease</Button>
                <Button color="warning" className="w-25" onClick={()=>dispatch(reset())}>Reset</Button>
            </CardBody>
        </Card>
    </Container>
  )
}

export default StudentScore
