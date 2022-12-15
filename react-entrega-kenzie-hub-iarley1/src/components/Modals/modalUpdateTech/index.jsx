import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/TechContext";
import { Input } from "../../Input";
import { StyledUpdateModal } from "./styles";
import { updateTechSchema } from "./updateTechSchema";

export function UpdateModal ({ closeUpdateModal,  }) {
    const { techData, deleteTech, updateTech } = useContext(TechContext)
    const [check, setcheck] = useState(true)
    const { register, handleSubmit, formState: { errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(updateTechSchema),
      });

    function submit(data) {
      updateTech(techData.id, data)
    }  

    return (
    <StyledUpdateModal>
      <div className="modal-box">
        <header>
          <div className="header-div">
            <h3>Tecnologia Detalhes</h3>
            <button onClick={closeUpdateModal} type="button">X</button>
          </div>
        </header>
        <form noValidate onSubmit={handleSubmit(submit)}>
          <Input disabled={true} label="Nome" placeholder="Nome da tecnologia" value={techData.title}/>

          <label>Selecionar status</label>
          <select onChangeCapture={(event) => event.target.value === techData.status ? setcheck(true) : setcheck(false) } defaultValue={techData.status} {...register("status")}>
            <option value="">Selecione status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && <p className="alert-status">{errors.status.message}</p>}

          <div className="buttons">
            <button disabled={check} className="button-submit" type="submit">Salvar alteraçẽs</button>
            <button onClick={() => deleteTech(techData.id)} type="button"className="delete-button">Excluir</button>
          </div>
        </form>
        
      </div>
    </StyledUpdateModal>
    )
}