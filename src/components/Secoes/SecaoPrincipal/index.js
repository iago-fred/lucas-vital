import variaveis from "../../../variaveis"
import styled from "styled-components";
import LogoCompleto from "../../LogoCompleto";

const Fundo = styled.section`
    background-image: linear-gradient(180deg, ${variaveis.azul} 10%, ${variaveis.azulEscuro});
    height: 45em;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fundo 4s ease-out;
    background-position: bottom;

    @keyframes fundo{
        100%{
            background-size: 100% 100%;
        }
        0%{
            background-size: 100% 2000%;
        }
    }
    
`

function SecaoPrincipal({setRef, ref}){
    return(
        <Fundo ref={setRef}>
            <LogoCompleto />
        </Fundo>
    )
}

export default SecaoPrincipal;