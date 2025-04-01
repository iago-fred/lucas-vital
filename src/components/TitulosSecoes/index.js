import styled from "styled-components";
import variaveis from "../../variaveis";
import { useState } from "react";

function TitulosSecoes (props) {

    const minResolut = 810;
    const LinhaDoTexto = styled.div`
    display: flex;
    flex-direction: ${props.position === "left"? "row": "row-reverse"};
    align-items: center;
    width: 100%;
    margin: 110px 0;

    @media (max-width: ${minResolut}px){
        flex-direction: column;
        align-items: start;
        margin: ${110/1.5}px 0;
    }
        div{
            display: flex;
            flex-direction: ${props.position == "left"? "row-reverse": "row"};
            background-color: ${props.fundo == "azul"? variaveis.cinza : variaveis.azulEscuro};
            padding: 0 16px;
            align-items: center;
            height: 110px;
            width: 450px;

            @media (max-width: ${minResolut}px){
                padding: 0 ${16/1.5}px;
                height: ${110/1.5}px;
                width: ${450/1.5}px;
                flex-direction: row-reverse;
            }
        }

        h1 {
            color: ${props.fundo == "azul"? variaveis.azul : variaveis.branco};
            font-size: 2em;
            margin: 0;
            text-align: center;
            font-weight: 700;
            
            @media (max-width: ${minResolut}px){
                font-size: ${2/1.5}em;
            } 
        }

        p{
            margin: 1em 1em;
            width: 520px;
            text-align: justify;
            font-weight: 500;
            color: ${props.fundo == "azul"? variaveis.cinza : variaveis.azul};

            @media(max-width: ${minResolut}px){
                font-size: .9em;
                text-align: left;
                width: ${450/1.5}px;
            }
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