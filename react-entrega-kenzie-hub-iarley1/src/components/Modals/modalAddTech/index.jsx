import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/TechContext";
import { Input } from "../../Input";
import { addTechSchema } from "./addTechSchema";
import { StyledModal } from "./styles";

export function AddModal ({ closeModal }) {
  const { addTech } = useContext(TechContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(addTechSchema)
  });

  function submit(data) {
    addTech(data);
  }

  return (
    <StyledModal>
      <div className="modal-box">
        <header>
          <div className="header-div">
            <h3>Cadastrar Tecnologia</h3>
            <button onClick={closeModal} type="button">X</button>
          </div>
        </header>
        <form noValidate onSubmit={handleSubmit(submit)}>
          <Input label="Nome" placeholder="Nome da tecnologia" loginRegister={register("title")} />
          {errors.title && <p className="alert-title">{errors.title.message}</p>}

          <label>Selecionar status</label>
          <select {...register("status")}>
            <option value="">Selecione status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && <p className="alert-status">{errors.status.message}</p>}

          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyledModal>
  );
}
