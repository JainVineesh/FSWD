import {useState} from 'react'
import { Container, Form, FormGroup, Label, Input, FormFeedback, Button, Table } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import paymentSchema from '../schemas/paymentSchema'

const PaymentForm = () => {
    const [payments, setPayments] = useState([])

    const {register, handleSubmit, reset, watch, formState:{errors},} = useForm({resolver: yupResolver(paymentSchema)})

    const paymentMethod = watch("paymentMethod")

    const onSubmit = (data) => {
        setPayments([...payments, data])
        reset()
    }

    const {ref:paymentMethodRef, ...paymentMethodField} = register("paymentMethod")
    const {ref:cardNumberRef, ...cardNumberField} = register("cardNumber")
    const {ref:bankAccountNumberRef, ...bankAccountNumberField} = register("bankAccountNumber")
    const {ref:paypalEmailRef, ...paypalEmailField} = register("paypalEmail")

    return (
    <Container>
      <h2>Payment Details</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
            <Label for="paymentMethod">Payment Method</Label>
            <Input id="paymentMethod"
                type="select" 
                invalid={!!errors.paymentMethod}
                innerRef={paymentMethodRef} {...paymentMethodField}
                >
                <option value="">Select a payment method</option>
                <option value="card">Credit Card</option>
                <option value="bank">Bank Transfer</option>
                <option value="paypal">PayPal</option>
            </Input>
            <FormFeedback>{errors.paymentMethod?.message}</FormFeedback>
        </FormGroup>
        {/* If payment method is card */}
        {paymentMethod==="card" && (
        <FormGroup>
            <Label for="cardNumber">Card Number</Label>
            <Input id="cardNumber"
                type="text"
                invalid={!!errors.cardNumber}
                innerRef={cardNumberRef} {...cardNumberField}
            />
            <FormFeedback>{errors.cardNumber?.message}</FormFeedback>
        </FormGroup>
        )}
        {/* If payment method is bank */}
        {paymentMethod==="bank" && (
        <FormGroup>
            <Label for="bank">Bank Account Number</Label>
            <Input id="bank"
                type="text"
                invalid={!!errors.bankAccountNumber}
                innerRef={bankAccountNumberRef} {...bankAccountNumberField}
            />
            <FormFeedback>{errors.bankAccountNumber?.message}</FormFeedback>
        </FormGroup>
        )}
        {/* If payment method is paypal */}
        {paymentMethod==="paypal" && (
        <FormGroup>
            <Label for="paypalEmail">PayPal Email</Label>
            <Input id="paypalEmail"
                type="text"
                invalid={!!errors.paypalEmail}
                innerRef={paypalEmailRef} {...paypalEmailField}
            />
            <FormFeedback>{errors.paypalEmail?.message}</FormFeedback>
        </FormGroup>
        )}

        <Button color="primary" type="submit">Save Payment Method</Button>
      </Form>
      <Table className='mt-4'>
        <thead>
            <tr>
                <th>Method</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            {/* Write necessary code here */}
            {payments.map((pmt,index)=>(
                <tr key={index}>
                    <td>{pmt.paymentMethod}</td>
                    <td>{pmt.cardNumber || pmt.bankAccountNumber || pmt.paypalEmail}</td>
                </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default PaymentForm
