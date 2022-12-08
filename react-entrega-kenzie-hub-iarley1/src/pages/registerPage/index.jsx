import { FormRegister } from "../../components/FormRegister";
import { Header } from "../../components/Header";
import { Container } from "../../styles/container";
import { useNavigate } from "react-router-dom";

export function RegisterPage () {
  const navigate = useNavigate()

  function back () {
    navigate(-1)
  }

    return (
        <Container>
          <Header effect={back} text="Voltar" type="button"/>
          <FormRegister />
        </Container>
    )
}