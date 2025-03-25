import styled from "styled-components";
import variaveis from "../../../variaveis";
import Logomarca from "../../Logomarca";
import NavBar from "../../NavBar";

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
`

console.log(variaveis.azul)

function Header () {
    return (
        <SectioHeader>
            <Logomarca size="3em" margin="84px"/>
            <NavBar/>
        </SectioHeader>
    )
}

export default Header