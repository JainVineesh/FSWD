import * as yup from 'yup'

const paymentSchema = yup.object({
    paymentMethod:yup.string().oneOf(["card", "bank","paypal"]).required("Choose a payment method"),
    
    cardNumber:yup.string().when("paymentMethod", {is:"card", then:(schema)=>schema.matches(/^d{16}$/,"Card Number must be 16 digits").required("Card number is required"),otherwise:(schema)=>schema.notRequired()}),
    
    bankAccountNumber:yup.string().when("paymentMethod", {is:"bank", then:(schema)=>schema.matches(/^d{8,12}$/,"Account number must be 8-12 digits").required("Account number is required"), otherwise:(schema)=>schema.notRequired()}),
    
    paypalEmail:yup.string().when("paymentMethod", {is:"paypal", then:(schema)=>schema.email("Enter a valid email").required("PayPal Email is required"), otherwise:(schema)=>schema.notRequired()}),
})

export default paymentSchema