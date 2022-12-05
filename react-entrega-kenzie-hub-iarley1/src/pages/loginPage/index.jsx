import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";

export function LoginPage () {
    return (
        <>
         <FormLogin />
         <Link to="/register">Cadastre-se</Link>
        </>
    )
}