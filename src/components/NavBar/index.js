import styled from "styled-components"
import variaveis from "../../variaveis"


const Lista = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 4em;
    text-align: center;
    align-items: center;
    margin: 0 84px;
`

const Link = styled.a`
    color: ${variaveis.cinza};
    transition: all 0.3s;
    font-weight: 500;
    text-decoration: underline transparent 2px;

    &:hover{
        text-decoration: underline ${variaveis.dourado} 2px;
        color: ${variaveis.branco};
        cursor: pointer;
    }
`

function NavBar ({refs}) {
    return (
        <nav>
            <Lista>
                {variaveis.secoes.map(secao => 
                <li>
                    <Link
                        key={secao}
                        onClick={() => refs[variaveis.secoes.indexOf(secao)].scrollIntoView({behavior: "smooth"})}
                    >{secao}</Link>
                </li>)}
            </Lista>
        </nav>
    )
}

export default NavBar