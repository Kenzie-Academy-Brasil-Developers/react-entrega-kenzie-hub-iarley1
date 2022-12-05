import { useForm } from "react-hook-form"
import { registerSchema } from "../../pages/registerPage/registerSchema.js"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../Input";
import { useNavigate } from "react-router-dom"
import { api } from "../../api/api.js"
import { toast } from "react-toastify"
import { useState } from "react"
import { StyleFormDiv } from "./styles.js";
import { Button } from "../Button";

export function FormRegister() {

  const {register, handleSubmit, formState: { errors }, reset} = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema)
  });

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function registerUser (data) {
    try {
      setLoading(true)
      const res = await api.post('/users', data)
      toast.success("Conta criada com sucesso", {autoClose: 1000, theme: "dark"})
      setTimeout(() => {navigate("/")}, 2000)
    }catch (error){
      toast.error(error.response.data.message, {autoClose: 1000, theme: "dark"})
    }finally{
      setLoading(false)
    }
  }

  function submit(data) {
    registerUser(data)
    reset()
  }

  return (
    <StyleFormDiv>
      <form noValidate onSubmit={handleSubmit(submit)}>
      <Input label="Nome" placeholder="Digite aqui seu nome" loginRegister={register("name")}/>
      {errors.name && <p>{errors.name.message}</p>}

      <Input type="email" label="Email" placeholder={"Digite aqui seu email"} loginRegister={register("email")}/>
      {errors.email && <p>{errors.email.message}</p>}

      <Input type="password" label="Senha" placeholder={"Digite aqui sua senha"} loginRegister={register("password")}/>
      {errors.password && <p>{errors.password.message}</p>}

      {/* <Input label="Confirmar Senha" placeholder={"Repita sua senha"} register={register("password")}/> */}

      <Input type="text" label="Bio" placeholder={"Fale sobre você"} loginRegister={register("bio")}/>
      {errors.bio && <p>{errors.bio.message}</p>}

      <Input type="text" label="Contato" placeholder={"Opção de contato"} loginRegister={register("contact")}/>
      {errors.contact && <p>{errors.contact.message}</p>}

      <select {...register("course_module")}>
        <option value="">Selecione o modulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
      </select>
      {errors.course_module && <p>{errors.course_module.message}</p>}

      <Button type="submit" text={loading ? <div className="spinner"></div> : "Cadastrar"} loading={loading} />
     </form>
    </StyleFormDiv>
    
  );
}
