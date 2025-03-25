import styled from "styled-components"
import Logomarca from "../Logomarca"
import variaveis from "../../variaveis"

const ContainerMarca = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: logo 3s ease-out;
    

    span{
    width: 55px;
    }

    h1{
        color: ${variaveis.branco};
        font-size: 3em;
        margin: 0;
        font-weight: 100;
    }

    p{
        color: ${variaveis.dourado};
        font-size: 1.5em;
        margin: 0;
        font-weight: 600;
    }

    div{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    @keyframes logo{
    100%{
        opacity: 1;
    }
    0%{
        opacity: 0;
    }

`

const LinhaDourada = styled.div`
    background-color: ${variaveis.dourado};
    width: 70px;
    height: 2px;
`

function LogoCompleto(props){
    return(
        <ContainerMarca >
            <div>
                <span/>
                <Logomarca size="15em"/>
            </div>
            <h1>LUCAS R. VITAL</h1>
            <div>
                <LinhaDourada/>
                <p>ADVOGADOS ASSOCIADOS</p>
                <LinhaDourada/>
            </div>
        </ContainerMarca>
    )
}

export default LogoCompleto