import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Container, Form, FormGroup, Label, Input, FormFeedback, Button } from "reactstrap"
import membershipSchema from "../schemas/membershipSchema"
import { addMembership } from "../redux/membershipSlice"
 
function MembershipForm() {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset, formState: { errors },} = 
    useForm({ resolver: yupResolver(membershipSchema), })
 
  const onSubmit = (data) => {
    dispatch(addMembership(data))
    reset()
  };
 
  const { ref: memberNameRef, ...memberNameField } = register("memberName")
  const { ref: monthlyFeeRef, ...monthlyFeeField } = register("monthlyFee", { valueAsNumber: true })
  const { ref: numberOfMonthsRef, ...numberOfMonthsField } = register("numberOfMonths", { valueAsNumber: true })
 
  return (
    <Container className="mt-4">
      <h2>Gym Membership Enrollment</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="memberName">Member Name</Label>
          <Input
            id="memberName"
            type="text"
            invalid={!!errors.memberName}
            innerRef={memberNameRef}
            {...memberNameField}
          />
          <FormFeedback>{errors.memberName?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="monthlyFee">Monthly Fee</Label>
          <Input
            id="monthlyFee"
            type="number"
            step="0.01"
            invalid={!!errors.monthlyFee}
            innerRef={monthlyFeeRef}
            {...monthlyFeeField}
          />
          <FormFeedback>{errors.monthlyFee?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="numberOfMonths">Number of Months</Label>
          <Input
            id="numberOfMonths"
            type="number"
            invalid={!!errors.numberOfMonths}
            innerRef={numberOfMonthsRef}
            {...numberOfMonthsField}
          />
          <FormFeedback>{errors.numberOfMonths?.message}</FormFeedback>
        </FormGroup>
        <Button color="primary" type="submit">Add Membership</Button>
      </Form>
    </Container>
  );
}
 
export default MembershipForm;
