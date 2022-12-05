import { toast } from "react-toastify";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import { loginSchema } from "../../pages/loginPage/loginSchema.js";
import { useNavigate } from "react-router-dom";

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function loginUser(data) {
    try {
      setLoading(true);
      const res = await api.post("/sessions", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  }

  function submit(data) {
    console.log(data);
    loginUser(data);
  }

  return (
    <>
      <form noValidate onSubmit={handleSubmit(submit)}>
        <Input
          label="Email"
          placeholder="Digite seu email"
          type="email"
          loginRegister={register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          loginRegister={register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Button
          type="submit"
          text={loading ? <div className="spinner"></div> : "Entrar"}
          loading={loading}
        />
      </form>
    </>
  );
}
