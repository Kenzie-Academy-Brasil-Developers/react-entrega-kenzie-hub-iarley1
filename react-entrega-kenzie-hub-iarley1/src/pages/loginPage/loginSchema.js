import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().required("Este campo é obrigatio").email("O email digitado é ivalido"),
    password: yup.string().required("Este campo é obrigatio")
})