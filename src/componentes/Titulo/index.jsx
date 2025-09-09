import styled from "styled-components";

const Titulo = styled.h2`
  color: #7b78e6;
  font-size: 2em;
  text-align: ${(props) => (props.$alinhamento ? props.$alinhamento : "left")};
`;

export default Titulo;
