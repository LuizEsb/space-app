import styled from "styled-components";
import ItemNavegacao from "../ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            ativo={true}
            iconeAtivo="icones/home-ativo.png"
            iconeInativo="icones/home-inativo.png"
          >
            <a>Início</a>
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="icones/mais-vistas-ativo.png"
            iconeInativo="icones/mais-vistas-inativo.png"
          >
            <a>Mais vistas</a>
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="icones/mais-curtidas-ativo.png"
            iconeInativo="icones/mais-curtidas-inativo.png"
          >
            <a>Mais curtidas</a>
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="icones/novas-ativo.png"
            iconeInativo="icones/novas-inativo.png"
          >
            <a>Novas</a>
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="icones/surpreenda-me-ativo.png"
            iconeInativo="icones/surpreenda-me-inativo.png"
          >
            <a>Surpreenda-me</a>
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
