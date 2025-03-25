import styled from "styled-components"
import variaveis from "../../../variaveis"
import TitulosSecoes from "../../TitulosSecoes"
import CardContatos from "../../CardContatos"

const Fundo = styled.section`
    background-color: ${variaveis.cinza};
    display: flex;
    margin: 0;
    flex-direction: column;
`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    padding: 36px;
    align-items: top;
    justify-content: center;
    margin-bottom: 110px;
`

function FaleConosco () {
    return (
        <Fundo>
            <TitulosSecoes
                titulo="Fale conosco"
                subtitulo="Precisa de orientação jurídica ou deseja agendar uma consulta?<br/>Nossa equipe está disponível para esclarecer dúvidas e oferecer soluções personalizadas para seu caso.<br/><span>Para entrar em contato, estes são nossos canais:</span>"
                position="left"
                fundo="cinza"
            />
            <CardsContainer>
                {variaveis.links.map(elemento =>
                    <CardContatos 
                        titulo={elemento[0]}
                        texto={elemento[1]}
                        link={elemento[2]}
                        img={`../../../assets/${elemento[3]}`}
                    />
                )}
            </CardsContainer>
        </Fundo>
    )
}

export default FaleConosco