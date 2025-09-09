import styled from "styled-components";

import icoExpandir from "/icones/expandir.png";
import { useContext } from "react";
import { FotosContext } from "../../../context/FotosContext";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0.75em 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
      font-size: 1.5em;
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 5px 0;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;

  & > div {
    display: flex;
  }
`;

const Imagem = ({ foto, expandida = false }) => {
  const { aoAlternarFavorito, setFotoSelecionada } = useContext(FotosContext);
  const icoFavorito = foto.favorita
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";
  return (
    <Figure $expandida={expandida}>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Footer>
          <h4>{foto.fonte}</h4>
          <div>
            <BotaoIcone>
              <img
                src={icoFavorito}
                alt="icone favorito"
                onClick={() => aoAlternarFavorito(foto)
                }
              />
            </BotaoIcone>
            {!expandida && <BotaoIcone>
              <img
                src={icoExpandir}
                alt="icone expandir"
                onClick={() => setFotoSelecionada(foto)}
              />
            </BotaoIcone>}
          </div>
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Imagem;
