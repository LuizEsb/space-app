import { useContext } from "react";
import Titulo from "../../Titulo";
import { FotosContext } from "../../../context/FotosContext";
import styled from "styled-components";
import Imagem from "../Imagem";

const ContainerPop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FotoPop = styled.img`
  border-radius: 20px;
  max-width: 212px;
`;

const Botao = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Populares = () => {
  const { fotos, setFotos } = useContext(FotosContext);
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ContainerPop>
        {fotos.map((foto) => (
          <FotoPop key={foto.id} src={foto.path} />
        ))}
        <Botao>Ver mais</Botao>
      </ContainerPop>
    </section>
  );
};

export default Populares;
