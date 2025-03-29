import styled from "styled-components"
import CardAtuacao from "../CardAtuacao"
import variaveis from "../../variaveis"
import { useEffect, useRef, useState } from "react"


function Slider() {

    const [controle, setControle] = useState(0)
    const [dotPosition, setDotPosition] = useState(2)
    const [espacamento, setEspacamento] = useState((window.innerWidth - 350) / 2)
    const carrossel = useRef(null)

    window.addEventListener("resize", () => setEspacamento((window.innerWidth - 350) / 2))

    function handleLeftClick(event) {
        event.preventDefault();
        controle!=0?setControle(controle-1):setControle(0)
        dotPosition > (2)?setDotPosition(dotPosition - 15.5):setDotPosition(dotPosition);
    }

    function handleRightClick(event) {
        event.preventDefault();
        controle!=(variaveis.atuacoes.length - 1)?setControle(controle+1):setControle(variaveis.atuacoes.length - 1)
        dotPosition<=(2 + (15.5 * (variaveis.atuacoes.length - 2)))?setDotPosition(dotPosition + 15.5):setDotPosition(dotPosition);
    }

    const SliderContent = styled.div`
    width: 100%;
    max-width: 100vw;
    align-items: stretch;
    display: flex;
    flex: none;
    overflow: hidden;
    gap: ${espacamento}px;

    &::-webkit-scrollbar{
        display: none;
    }
    `

    const SlideBox = styled.div`
    transform: translateX(-${(350 + espacamento)*controle}px);
    transition: all 3s ease;

    &:first-child{
            margin: 0 0 0 ${espacamento}px;
        }
    &:last-child{
            margin: 0 ${espacamento}px 0 0;
        }
    `

    const BtnsContainer = styled.div`
        display: flex;
        margin-bottom: 20px;
        padding: 54px;
        gap: 30px;
    `

    const tamanhoBtns = 50

    const Esquerda = styled.button`
        border: none;
        cursor: pointer;
        background-color: transparent;
        background-image: url("/assets/arrow-circle-right.svg");
        background-size: contain;
        background-repeat: no-repeat;
        height: ${tamanhoBtns}px;
        width: ${tamanhoBtns}px;
        transform: rotate(180deg);
    `

    const Direita = styled.button`
        border: none;
        cursor: pointer;
        background-color: transparent;
        background-image: url("/assets/arrow-circle-right.svg");
        background-size: contain;
        background-repeat: no-repeat;
        height: ${tamanhoBtns}px;
        width: ${tamanhoBtns}px;
    `
    const DotsContainer = styled.div`
        display: flex;
        gap: 5px;
        position: relative;
        flex-direction: row;
        margin: 5px;
    `

    const Dots = styled.div`
        border: 2px solid ${variaveis.azul};
        height: 7px;
        width: 7px;
        border-radius: 50%;
    `

    const DotPreenchido = styled.div`
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color: ${variaveis.azul};
        position: absolute;
        left: ${dotPosition}px;
        top: 1px;
    `

    return (
        <>
            <SliderContent ref={carrossel}>
                {variaveis.atuacoes.map(e =>
                    <SlideBox key={e + "-card-atuacoes"}>
                        <CardAtuacao titulo={e} />
                    </SlideBox>
                )}
            </SliderContent>
            <DotsContainer>
                {variaveis.atuacoes.map((e) =>
                    <Dots key={e + "-dot"}/>
                )}
                <DotPreenchido />
            </DotsContainer>
            <BtnsContainer>
                <Esquerda onClick={handleLeftClick}></Esquerda>
                <Direita onClick={handleRightClick}></Direita>
            </BtnsContainer>
        </>
    )
}

export default Slider