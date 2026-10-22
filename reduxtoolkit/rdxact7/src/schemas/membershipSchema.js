import * as yup from 'yup'

const membershipSchema = yup.object({
    memberName:yup.string().required("Member name is required"),
    monthlyFee:yup.number().typeError("Monthly fee must be a number").positive("Monthly fee must be greater than 0").required("Monthly fee is required"),
    numberofMonths:yup.number().typeError("Number of months must be a number").integer("Number of months must be a whole number").min(1, "At least 1 month is required").max(24, "Cannot exceed 24 months").required("Number of months is required"),
})

export default membershipSchema