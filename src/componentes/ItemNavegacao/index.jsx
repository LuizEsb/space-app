import styled from "styled-components";

const ItemEstilizado = styled.li`
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer-events;
  color: ${props => props.$ativo ? "#7B78E5" : "#D9D9D9"};
  font-family: ${props => props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
`;

export default function ItemNavegacao({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) {
  return (
    <ItemEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="icone item" />
      {children}
    </ItemEstilizado>
  );
}
