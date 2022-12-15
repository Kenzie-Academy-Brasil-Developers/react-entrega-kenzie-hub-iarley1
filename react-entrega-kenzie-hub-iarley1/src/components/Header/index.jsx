import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { StyledHeader } from "./styles";

export function Header ({effect, text, type}) {
   

    return (
        <StyledHeader>
            <div>
                <h1>Kenzie Hub</h1>
                <Button effect={effect} text={text} type={type}/>
            </div>
        </StyledHeader>
    )
}