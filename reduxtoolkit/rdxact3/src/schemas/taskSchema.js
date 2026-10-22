import * as yup from 'yup'

const taskSchema = yup.object({
    task: yup.string().required("Enter the task before adding it."),
})

export default taskSchema