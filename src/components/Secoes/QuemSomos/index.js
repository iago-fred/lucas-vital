import styled from "styled-components"
import TitulosSecoes from "../../TitulosSecoes"
import variaveis from "../../../variaveis"

const Fundo = styled.section`
    background-image: linear-gradient(180deg, ${variaveis.azul} 10%, ${variaveis.azulEscuro});
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
`

const Imag = styled.div`
        background-image: url("../../assets/foto.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 10px 0px;
        height: 700px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 1em;
        text-align: left;

        div{
            width: 45%;
            margin: 0 100px;
            color: ${variaveis.cinza};
        }

        span{
            font-weight: 700;
            color: ${variaveis.branco};
        }
        
    `

function QuemSomos ({setRef}) {
    return (
        <Fundo ref={setRef}>
            <TitulosSecoes
                titulo="Quem Somos"
                subtitulo="Somos um escritório de advocacia comprometido com a excelência jurídica, oferecendo serviços personalizados com ética e profissionalismo. <br/><span>Conheça mais sobre nós a seguir:</span>"
                position="right"
                fundo="azul"
            />
            <Imag>
                <div>
                    <h2>Sobre nós</h2>
                    <p>Fundado pelo advogado <span>Lucas R. Vital</span>, com o propósito de oferecer uma advocacia moderna, estratégica e humanizada, <span>nosso escritório se destaca pela excelência técnica e pelo compromisso genuíno com os interesses de nossos clientes</span>. Com uma equipe formada por profissionais especializados, combinamos conhecimento jurídico aprofundado com uma visão prática e inovadora das demandas do Direito contemporâneo.</p>
                    <h2>Nossa filosofia</h2>
                    <p>Buscamos exercer a advocacia com eficiência e objetividade, combinando conhecimento jurídico sólido com uma abordagem prática e direta. <br/><span>Valorizamos a clareza na comunicação e a transparência nos processos</span>. Nosso objetivo é oferecer soluções jurídicas adequadas a cada caso, sempre pautadas pela <span>ética profissional e pelo compromisso com os interesses de nossos clientes</span>.</p>
                    <h2>Compromisso com o cliente</h2>
                    <p>Mais do que prestar serviços jurídicos, construímos relações de longo prazo baseadas na <span>confiança mútua</span>. Nossa equipe está sempre disponível para orientar, esclarecer dúvidas e buscar as melhores alternativas para cada situação.</p>
                </div>
            </Imag>
        </Fundo>
    )
}

export default QuemSomos