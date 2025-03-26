import styled from "styled-components";
import Header from "./components/Secoes/Header";
import variaveis from "./variaveis";
import SecaoPrincipal from "./components/Secoes/SecaoPrincipal";
import Atuacao from "./components/Secoes/Atuacao";
import QuemSomos from "./components/Secoes/QuemSomos";
import FaleConosco from "./components/Secoes/FaleConosco";
import Footer from "./components/Secoes/Footer";
import { useRef, useState } from 'react';

const Pagina = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: ${variaveis.branco};
  padding: 80px 0 0 0;
`;

function scrollToElement (e) {
  console.log(e)
}

function App() {
  
  const [secaoPrincipalRef, setSecaoPrincipalRef] = useState(useRef(null));
  const [atuacaoRef, setAtuacaoRef] = useState(useRef(null));
  const [quemSomosRef, setQuemSomosRef] = useState(useRef(null));
  const [faleConoscoRef, setFaleConoscoRef] = useState(useRef(null));

  const listaDeSecoes = [
    secaoPrincipalRef, atuacaoRef, quemSomosRef, faleConoscoRef
  ]
  
  return (
    <Pagina>
      <Header refs={listaDeSecoes}/>
      <SecaoPrincipal setRef={setSecaoPrincipalRef}/>
      <Atuacao setRef={setAtuacaoRef}/>
      <QuemSomos setRef={setQuemSomosRef}/>
      <FaleConosco setRef={setFaleConoscoRef}/>
      <Footer refs={listaDeSecoes}/>
    </Pagina>
  );
}

export default App;