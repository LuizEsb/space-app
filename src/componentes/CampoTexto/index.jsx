import { useContext, useEffect } from "react";
import styled from "styled-components";
import { FotosContext } from "../../context/FotosContext";
import iconeLupa from "../../assets/search.png"

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const InputEstilizado = styled.input`
  width: 566px;
  padding: 0.75em 1em;
  background-color: transparent;
  border: 2px solid #c98cf1;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 20px;
  font-weight: 400;
  font-size: 20px;
  color: #d9d9d9;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

export default function CampoTexto(props) {
  const { valorBusca, setValorBusca } = useContext(FotosContext);

  const handleChange = (event) => {
    const valor = event.target.value
    try {
      setValorBusca(valor);
    } catch (error) {
      console.error("Erro ao alterar valor da busca: ", error);
    }
  };

  return (
    <ContainerEstilizado>
      <InputEstilizado
        value={valorBusca}
        onChange={handleChange}
        placeholder="O que você procura?"
        {...props}
      />
      <IconeLupa src={iconeLupa} />
    </ContainerEstilizado>
  );
}
