import * as yup from "yup"

export const registerSchema = yup.object().shape({
    name: yup.string().required("Este campo é obrigatio"),
    email: yup.string().required("Este campo é obrigatio").email("O email digitado é ivalido"),
    bio: yup.string().required("Este campo é obrigatio"),
    password: yup.string().required("Este campo é obrigatio").min(8, "A senha precisa ter no minimo 8 caracteres")
    .matches(/(?=.*[0-9])/, 'É necessário pelo menos um numero')
    .matches(/(?=.*[A-Za-z])/, "É necessário pelo menos uma letra")
    .matches(/(?=.*[$*&@#.])/, "É necessario pelo menos um caractere especial"),
    contact: yup.string().required("Este campo é obrigatio"),
    confirmPassword: yup.string().required("Este campo é obrigatorio").oneOf([yup.ref("password"), null], "As senhas não correspondem"),
    course_module: yup.string().required("Escolha uma opção")
})