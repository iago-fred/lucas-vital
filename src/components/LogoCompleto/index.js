import styled from "styled-components"
import Logomarca from "../Logomarca"
import variaveis from "../../variaveis"
import { useState } from "react"

const minResolut = 550;
const ContainerMarca = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: logo 3s ease-out;

    span{
    width: 55px;

    @media(max-width: ${minResolut}px){
        width: ${55/1.5}px;
    }
    }

    h1{
        color: ${variaveis.branco};
        font-size: 3em;
        margin: 0;
        font-weight: 100;
        
    @media(max-width: ${minResolut}px){
        font-size: ${3/1.5}em;
    }
    }

    p{
        color: ${variaveis.dourado};
        font-size: 1.5em;
        margin: 0;
        font-weight: 600;
        
    @media(max-width: ${minResolut}px){
        font-size: ${1.5/1.5}em;
    }
    }

    div{
        display: flex;
        align-items: center;
        gap: 5px;
    }
        
    @media(max-width: ${minResolut}px){
        gap: ${5/1.5}px;
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
        
    @media(max-width: ${minResolut}px){
        width: ${70/1.5}px;
        height: ${2/1.5}px;
    }
`

function LogoCompleto(){
    const [tela, setTela] = useState(window.innerWidth)

    window.addEventListener("resize", () => setTela(window.innerWidth))

    return(
        <ContainerMarca >
            <div>
                <span/>
                <Logomarca size={(tela <= minResolut)?`${15/1.5}em`:`15em`}/>
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