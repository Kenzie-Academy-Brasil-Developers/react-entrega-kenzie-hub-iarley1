import { Link } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";

export function RegisterPage () {
    return (
        <>
          <FormRegister />
          <Link to="/">Pagina de login</Link>
        </>
        
    )
}