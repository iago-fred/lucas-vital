import styled from "styled-components";
import variaveis from "../../../variaveis";
import Logomarca from "../../Logomarca";
import NavBar from "../../NavBar";
import { useState } from "react";

const SectioHeader = styled.header`
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    z-index: 1000;
    background-color: ${variaveis.azulEscuro};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1300px){
        height: 50px;
    }
`

console.log(variaveis.azul)

function Header ({refs}) {

    const [tela, setTela] = useState(window.innerWidth)

    window.addEventListener("resize", () => setTela(window.innerWidth))
    return (
        <SectioHeader>
            <Logomarca size={window.innerWidth<=1300?"2em":"3em"} margin={window.innerWidth<=1300?"32px":"84px"}/>
            <NavBar refs={refs}/>
        </SectioHeader>
    )
}

export default Header