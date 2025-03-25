import styled from "styled-components";
import Header from "./components/Secoes/Header";
import variaveis from "./variaveis";
import SecaoPrincipal from "./components/Secoes/SecaoPrincipal";
import Atuacao from "./components/Secoes/Atuacao";
import QuemSomos from "./components/Secoes/QuemSomos";
import FaleConosco from "./components/Secoes/FaleConosco";
import Footer from "./components/Secoes/Footer";

const Pagina = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: ${variaveis.branco};
  padding: 80px 0 0 0;
`;

function App() {
  return (
    <Pagina>
      <Header/>
      <SecaoPrincipal id="secao1"/>
      <Atuacao id="secao2"/>
      <QuemSomos id="secao3"/>
      <FaleConosco id="secao4"/>
      <Footer/>
    </Pagina>
  );
}

export default App;