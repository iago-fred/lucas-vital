import styled from "styled-components"
import TitulosSecoes from "../../TitulosSecoes"
import variaveis from "../../../variaveis"
import { useState } from "react"

const Fundo = styled.section`
    background-image: linear-gradient(180deg, ${variaveis.azul} 10%, ${variaveis.azulEscuro});
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
    height: 1200px;
    margin: 0;
`

const Imag = styled.img`
        height: 800px;
        display: flex;
        position: absolute;
        bottom: -20px;
        right: 53vw;

        @media (max-width: 1300px){
            opacity: .2;
            left: 50%;
            transform: translate(-50%, 0%);
        }
    `
const Infos = styled.div`
            color: ${variaveis.cinza};
            display: flex;
            flex-direction: column;
            align-items: start;
            position: absolute;
            top: 300px;
            width: 45vw;
            right: 80px;

        @media (max-width: 1300px){
            width: 90%;
            right: 50%;
            transform: translate(50%, 0%);
        }

        @media (max-width: 810px){
            align-items: center;
        }
        

        span{
            font-weight: 700;
            color: ${variaveis.branco};
        }
    `

    const ContainerTexto = styled.div`
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        text-align: justify;
        justify-content: space-evenly;

        @media (max-width: 810px){
            font-size: .85em;
            line-height: 1.2em;
        }
    `
    
    const Premiacao = styled.img`
        width: 250px;
        margin: 24px 0 12px 0;

        @media (max-width: 810px) {
            width: 100px;
        }
    `

    const ContainerPremiacao = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.5em;

        p{
            margin: 0;
        }
        
    `


function QuemSomos({ setRef}) {
    const [tela, setTela] = useState(window.innerWidth)
    
    window.addEventListener("resize", () => setTela(window.innerWidth))
    
    const imagemPremiacao = tela >= 810? "../../assets/ancec-rectang.png":"../../assets/ancec-square.png"

    return (
        <Fundo ref={setRef}>
            <TitulosSecoes
                titulo="Quem Somos"
                subtitulo="Somos um escritório de advocacia comprometido com a excelência jurídica, oferecendo serviços personalizados com ética e profissionalismo. <br/><span>Conheça mais sobre nós a seguir:</span>"
                position="right"
                fundo="azul"
            />
            <Imag src="../../assets/foto.png"/>
            <Infos>
                <ContainerTexto>
                    <h2>Sobre nós</h2>
                    <p>Fundado em 2018 pelo advogado <span>Lucas R. Vital</span>, com o propósito de oferecer uma advocacia moderna, estratégica e humanizada, <span>nosso escritório se destaca pela excelência técnica e pelo compromisso genuíno com os interesses de nossos clientes</span>. Com uma equipe formada por profissionais especializados, combinamos conhecimento jurídico aprofundado com uma visão prática e inovadora das demandas do Direito contemporâneo.</p>
                    <h2>Nossa filosofia</h2>
                    <p>Buscamos exercer a advocacia com eficiência e objetividade, combinando conhecimento jurídico sólido com uma abordagem prática e direta. <br /><span>Valorizamos a clareza na comunicação e a transparência nos processos</span>. Nosso objetivo é oferecer soluções jurídicas adequadas a cada caso, sempre pautadas pela <span>ética profissional e pelo compromisso com os interesses de nossos clientes</span>.</p>
                    <h2>Compromisso com o cliente</h2>
                    <p>Mais do que prestar serviços jurídicos, construímos relações de longo prazo baseadas na <span>confiança mútua</span>. Nossa equipe está sempre disponível para orientar, esclarecer dúvidas e buscar as melhores alternativas para cada situação.</p>
                </ContainerTexto>
                <ContainerPremiacao>
                    <Premiacao src={imagemPremiacao} alt="Selo da premiação ancec pelo desempenho na área de atuação no ano de 2024"/>
                    <p>Categoria Ouro ANCEC</p>
                    <p><span>Referência Nacional na advocacia</span></p>
                </ContainerPremiacao>
            </Infos>
        </Fundo>
    )
}

export default QuemSomos