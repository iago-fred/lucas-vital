import styled from "styled-components"
import variaveis from "../../../variaveis"
import Logomarca from "../../Logomarca"

const SectionFooter = styled.div`
    background-color: ${variaveis.azul};
    display: flex;
    margin: 0;
    padding: 32px 54px;
    font-size: .8em;
    justify-content: space-evenly; 
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    h4 {
        font-family: "Montserrat", sans-serif;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: ${variaveis.cinza};
        transition: all 0.3s;

        &:hover{
            text-decoration: underline;
            color: ${variaveis.branco};
        }
    }
`

const Dev = styled.div`
        background-color: ${variaveis.azul};
        display: flex;
        margin: 0;
        justify-content: center;
        font-size: .7em;
        color: ${variaveis.cinza}
`

function Footer () {
    
    return (
        <footer>
            <SectionFooter>
                <Logomarca/>
                <div>
                    <h4>Sumário</h4>
                    {variaveis.secoes.map(secao => 
                        <a href={`#secao${(variaveis.secoes.indexOf(secao)) + 1}`}>{secao}</a>
                    )}
                </div>
                <div>
                    <h4>Links</h4>
                    {variaveis.links.map(link => 
                        <a href={link[2]}>{link[0]}</a>
                    )}
                </div>
            </SectionFooter>
            <Dev>
                <p>Desenvolvido por Iago Frederick A. Cardoso</p>
            </Dev>
        </footer>
    )
}

export default Footer