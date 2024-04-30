import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;

  padding: 30px;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.$color ? "blue" : "")};
`;

export { Container, SelectContainer, PageButton };
