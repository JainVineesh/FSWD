import * as yup from 'yup'

const jobApplicationSchema = yup.object({
    fullName: yup.string()
        .required("Name is required")
        .min(3, "Name should be atleast 3 characters"),
    email: yup.string()
        .email("Email should be in valid format")
        .required("Email is required"),
    coverLetter: yup.string()
        .required("Cover letter is required")
        .min(50, "Cover letter must have at least 50 characters")
        .max(500, "Cover letter may have at most 500 characters")
})

export default jobApplicationSchema