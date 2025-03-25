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

    &:hover{
        text-decoration: underline;
        color: ${variaveis.branco};
    }
`

function NavBar () {
    return (
        <nav>
            <Lista>
                {variaveis.secoes.map(secao => 
                <li>
                    <Link key={secao} href="#">{secao}</Link>
                </li>)}
            </Lista>
        </nav>
    )
}

export default NavBar