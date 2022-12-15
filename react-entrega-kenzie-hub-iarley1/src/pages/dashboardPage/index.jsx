import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { CardTech } from "../../components/CardTech";
import { Header } from "../../components/Header";
import { AddModal } from "../../components/Modals/modalAddTech";
import { UpdateModal } from "../../components/Modals/modalUpdateTech";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { StyleDashboard } from "./styles";

export function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { openModal, closeModal, showAddModal, showUpdateModal, openUpdateModal, closeUpdateModal } = useContext(TechContext);

  function logout() {
    localStorage.clear();

    navigate("/");
  }

  return (
    <StyleDashboard>
      <Header effect={logout} text="Sair" type="button" />
      <div className="user-profiles">
        <div>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </div>
      <div className="info">
        <div className="info-box">
          <div className="info-header">
            <h3>Tecnologias</h3>
            <Button text="+" effect={openModal} />
          </div>
          {user.techs.length !== 0 ? (
            <ul>
              {user.techs.map((tech, index) => (
                <CardTech key={index} tech={tech} openModal={openUpdateModal} />
              ))}
            </ul>
          ) : (
            <span>Nenhuma tecnologia foi encontrada</span>
          )}
        </div>
      </div>
      {showAddModal && <AddModal closeModal={closeModal} />}{showUpdateModal && <UpdateModal closeUpdateModal={closeUpdateModal}/>}
    </StyleDashboard>
      
       
  );
}
