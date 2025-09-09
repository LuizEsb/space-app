import styled from "styled-components";

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
  color: #D9D9D9;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

export default function CampoTexto(props) {
  return (
    <ContainerEstilizado>
      <InputEstilizado placeholder="O que você procura?" {...props} />
      <IconeLupa src="src/assets/search.png" />
    </ContainerEstilizado>
  );
}
