import styled from "styled-components"
import variaveis from "../../variaveis"

const Card = styled.div`
    background-color: ${variaveis.branco};
    width: 350px;
    border-radius: 24px;
    cursor: default;
`

const ParteAzul = styled.div`
    background-color: ${variaveis.azulEscuro};
    position: relative;
    border-radius: 24px 24px 0 0;
    height: 60px;
`

const Icone = styled.div`
    background-color: ${variaveis.branco};
    position: absolute;
    border-radius: 50%;
    padding: 10px;
    top: 27px;
    display: flex; 
    text-align: center;
    justify-content: center;
    right: 50%;
    transform: translate(50%, 0);

    img {
        width: 54px;

        @media (max-width: 810px){
            width: 40px;
        }
    }
`

const ParteBranca = styled.div`
    padding: 2em;
    text-align: center;
    color: ${variaveis.azul};

    h2 {
        color: ${variaveis.azulEscuro};
        font-weight: 700;

        @media (max-width: 810px){
            font-size: 1.4em;
        }
    }
    
    ol{
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 1em;
        font-size: 18px;
        font-weight: 400;
        
        @media (max-width: 810px){
            font-size: 1em;
        }
    }
`

function CardAtuacao (props) {
    const palavrasDoTitulo = props.titulo.split(" ")
    const controleLista = palavrasDoTitulo[palavrasDoTitulo.length -1].toString().toLowerCase()
    const srcImg = `../../../assets/${controleLista}-icone.svg`

    return(
        <Card>
            <ParteAzul>
                <Icone>
                    <img src={srcImg}/>
                </Icone>
            </ParteAzul>
            <ParteBranca>
                <h2>{props.titulo}</h2>
                <ol>
                    {variaveis[controleLista].map(e =>
                        <li key={`${e}-lista-atuacoes-${props.titulo}`}>{e}.</li>
                    )}
                </ol>
            </ParteBranca>
        </Card>
    )
}

export default CardAtuacao