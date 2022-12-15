import * as yup from "yup"

export const addTechSchema = yup.object().shape({
    title: yup.string().required("Este campo é obrigatorio"),
    status: yup.string().required("Escolha uma opção")
})