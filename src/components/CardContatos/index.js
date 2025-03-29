import styled from "styled-components"
import variaveis from "../../variaveis"

const Card = styled.a`
    background-color: ${variaveis.branco};
    width: 350px;
    border-radius: 24px;
    transition: all 0.4s ease;
    cursor: pointer;

    @media (max-width: 810px) {
        background-color: transparent;
        width: auto;
    }

    &:hover{
        transform: scale(1.05);
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    }
`
const ParteAzul = styled.div`
    background-color: ${variaveis.azulEscuro};
    position: relative;
    border-radius: 24px 24px 0 0;
    height: 60px;

    @media (max-width: 810px) {
        background-color: transparent;
        position: static;
        height: auto;
    }
`

const Icone = styled.div`
    background-color: ${variaveis.branco};
    position: absolute;
    border-radius: 50%;
    padding: 10px;
    top: 27px;
    right: 50%;
    transform: translate(50%, 0);

    @media (max-width: 810px) {
        border: 3px solid ${variaveis.azul};
        position: static;
        transform: translate(0, 0);
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 54px;
        
        @media (max-width: 810px) {
            width: 32px;
        }
    }
`
const ParteBranca = styled.div`
    padding: 2em;
    text-align: center;
    color: ${variaveis.azul};

    @media (max-width: 810px) {
            display: none;
        }

    h2 {
        color: ${variaveis.azulEscuro};
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
    }
    
    p{
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1em;
        font-size: 18px;
        font-weight: 500;
        font-family: "Montserrat", sans-serif;
    }
`

function CardContatos (props) {
    return (
        <Card href={props.link}>
            <ParteAzul>
                <Icone>
                    <img src={props.img}/>
                </Icone>
            </ParteAzul>
            <ParteBranca>
                <h2>{props.titulo}</h2>
                <p>{props.texto}</p>
            </ParteBranca>
        </Card>
    )
}

export default CardContatos