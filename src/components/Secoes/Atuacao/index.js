import styled from "styled-components";
import TitulosSecoes from "../../TitulosSecoes";
import variaveis from "../../../variaveis";
import CardAtuacao from "../../CardAtuacao";
import Slider from '../../Slider';
import { useState } from "react";

const Fundo = styled.section`
  background-color: ${variaveis.cinza};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
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

function Atuacao({ setRef }) {
  const [tela, setTela] = useState(window.innerWidth)

  window.addEventListener("resize", () => setTela(window.innerWidth))

  return (
    <Fundo ref={setRef}>
      <TitulosSecoes
        position={"left"}
        titulo={"Áreas de atuação"}
        subtitulo={"O Direito é um campo vasto e diversificado, dividido em diversas áreas de atuação, cada uma com suas particularidades e especialidades. Nosso escritório atua nas principais delas, oferecendo soluções jurídicas eficientes e personalizadas. <br/><span>Conheça abaixo nossas especialidades:</span>"}
      />

      {tela >= 810 ?
        <CardsContainer>
          {variaveis.atuacoes.map(e =>
            <CardAtuacao titulo={e}
              key={e + "-card-atuacoes"}
            />
          )}
        </CardsContainer> :
        <Slider/>
      }
    </Fundo>

  )
}

export default Atuacao;