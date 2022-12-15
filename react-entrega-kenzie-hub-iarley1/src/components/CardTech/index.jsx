import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export function CardTech ({ tech, openModal }) {
    const { setTechData } = useContext(TechContext)

    return (
        <li onClick={() =>{openModal(); setTechData(tech);}} className="card-tech">
            <div className="tech">
               <h4>{tech.title}</h4>
            </div>
            <div className="status">
               <p>{tech.status}</p>
            </div>
        </li>
    )
}