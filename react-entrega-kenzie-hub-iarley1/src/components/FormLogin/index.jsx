
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState, useContext } from "react";
import { loginSchema } from "../../pages/loginPage/loginSchema.js";
import { Link, useNavigate } from "react-router-dom";
import { StyleLoginForm } from "./styles";
import { UserContext } from "../../contexts/UserContext";

export function FormLogin() {
  const { register, handleSubmit, formState: { errors },} = useForm({
    resolver: yupResolver(loginSchema),
  });
  
  const { loginUser, loading } = useContext(UserContext)

  function submit(data) {
    loginUser(data);
  }

  return (
    <StyleLoginForm noValidate onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>

        <Input label="Email" placeholder="Digite seu email" type="email" loginRegister={register("email")}/>
        {errors.email && <p>{errors.email.message}</p>}

        <Input label="Senha" placeholder="Digite sua senha" type="password" loginRegister={register("password")}/>
        {errors.password && <p>{errors.password.message}</p>}

        <Button type="submit" text={loading ? <div className="spinner"></div> : "Entrar"} loading={loading}/>

        <span>Ainda não possui uma conta?</span>
        
        <Link to="/register">Cadastre-se</Link>
    </StyleLoginForm>
  );
}
