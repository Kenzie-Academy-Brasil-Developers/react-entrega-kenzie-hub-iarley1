import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export function Header ({effect, text, type}) {
   

    return (
        <header>
            <div>
                <h1>Kenzie Hub</h1>
                <Button effect={effect} text={text} type={type}/>
            </div>
        </header>
    )
}