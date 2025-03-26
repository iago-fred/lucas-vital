import styled from "styled-components";
import variaveis from "../../variaveis";

function TitulosSecoes (props) {
    const LinhaDoTexto = styled.div`
    display: flex;
    flex-direction: ${props.position == "left"? "row": "row-reverse"};
    align-items: center;
    height: 110px;
    width: 100%;
    margin: 110px 0;
    transform-origin: ${props.position};
    transition: all 1s ease;

        div{
            display: flex;
            flex-direction: ${props.position == "left"? "row-reverse": "row"};
            background-color: ${props.fundo == "azul"? variaveis.cinza : variaveis.azulEscuro};
            padding: 0 16px;
            align-items: center;
            height: 100%;
            width: 450px;
        }

        h1 {
            color: ${props.fundo == "azul"? variaveis.azul : variaveis.branco};
            font-size: 2em;
            margin: 0;
            text-align: center;
            font-weight: 700;
        }

        p{
            margin: 1em 1em;
            width: 520px;
            text-align: ${props.position};
            font-weight: 500;
            color: ${props.fundo == "azul"? variaveis.cinza : variaveis.azul};
        }

        span{
            color: ${props.fundo == "azul"? variaveis.branco : variaveis.azulEscuro};
            font-weight: 600;
        }
    `
    return(
        <LinhaDoTexto>
            <div>
                <h1>{props.titulo}</h1>
            </div>
            <p dangerouslySetInnerHTML={{__html: props.subtitulo}}/>
        </LinhaDoTexto>
    )
}

export default TitulosSecoes;