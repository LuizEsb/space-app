import styled from "styled-components";
import tags from "./tags.json";

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0 2em 0 0;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 3em 0 1em 0;
`

const Tags = () => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((tag) => (
        <Tag key={tag.id}>{tag.titulo}</Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;
