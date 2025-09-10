import styled from "styled-components";
import Tags from "../Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import { useContext, useEffect } from "react";
import { FotosContext } from "../../context/FotosContext";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ListaFotos = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = () => {
  const {
    fotos = [],
    valorBusca,
    buscarFotos,
  } = useContext(FotosContext);

  useEffect(() => {
    buscarFotos();
  }, [valorBusca]);

  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ListaFotos>
            {fotos.map((foto) => (
              <Imagem key={foto.id} foto={foto} />
            ))}
          </ListaFotos>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
