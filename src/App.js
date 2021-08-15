import React ,{useState} from "react";
import { ThemeProvider} from 'styled-components'
import {temaClaro, temaEscuro} from './Components/ui/temas';

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle} from './Components/GlobalStyle';
import { BtnTema } from "./Components/ui";
import SwitcherTemas from "./Components/SwitcherTemas";

function App() {
const [tema, setTema] = useState(true);

const toggleTema = () => {
  setTema((theme) => !theme);
};


  return (
    <ThemeProvider theme={tema? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
      <SwitcherTemas theme = {tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
