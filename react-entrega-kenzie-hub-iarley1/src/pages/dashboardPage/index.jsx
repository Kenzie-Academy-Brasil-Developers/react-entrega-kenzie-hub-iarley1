import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { StyleDashboard } from "./styles";

export function DashboardPage () {
    const navigate = useNavigate();
    const { user } = useContext(UserContext)

      function logout () {
        localStorage.clear()

        navigate("/")
      }
    
      return (
        <StyleDashboard>
          <Header effect={logout} text="Sair" type="button"/>
          <div className="user-profiles">
             <div>
                <h2>Olá, {user.name}</h2>
                <p>{user.course_module}</p>
             </div>
          </div>
          <div className="info">
             <div>
                <h3>Que pena! Estamos em desenvolvimento :(</h3>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
             </div>
          </div>
        </StyleDashboard>
      )
}