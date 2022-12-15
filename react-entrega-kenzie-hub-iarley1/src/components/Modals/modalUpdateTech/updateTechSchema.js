import * as yup from "yup"

export const updateTechSchema = yup.object().shape({
    status: yup.string().required("Escolha uma opção")
})