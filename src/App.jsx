import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/SideBar";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";

import backgroundBanner from "./assets/banner.png"
import { FotosProvider } from "./context/FotosContext";
import ModalZoom from "./componentes/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 1.5em;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <FotosProvider>
        <AppContainer>
          <Cabecalho />
          <MainContainer>
            <BarraLateral />
            <ConteudoGaleria>
              <Banner backgroundImage={backgroundBanner} />
              <Galeria />
            </ConteudoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom />
      </FotosProvider>
    </FundoGradiente>
  );
};

export default App;
