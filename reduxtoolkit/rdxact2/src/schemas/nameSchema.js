import * as yup from 'yup'

const nameSchema = yup.string()
    .min(2, "Name must be atleast 2 characters")
    .required("Name is required")

export default nameSchema