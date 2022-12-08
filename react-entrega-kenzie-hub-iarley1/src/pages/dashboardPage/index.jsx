import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { Header } from "../../components/Header";
import { StyleDashboard } from "./styles";

export function DashboardPage () {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const navigate = useNavigate();

    const [profiles, setProfiles] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getProfiles() {
          try {
            const res = await api.get("profile", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            setProfiles(res.data)
          } catch (error) {
            window.location.replace("/")
          } finally {
            setLoading(true)
          }
        }
        getProfiles();
      }, []);

      function logout () {
        localStorage.clear()

        navigate("/")
      }
    
    if(!token){
        window.location.replace("/")
        return
    }
    if(loading){
        return (
            <StyleDashboard>
              <Header effect={logout} text="Sair" type="button"/>
              <div className="user-profiles">
                 <div>
                    <h2>Olá, {profiles.name}</h2>
                    <p>{profiles.course_module}</p>
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
}