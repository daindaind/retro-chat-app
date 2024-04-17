import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h3`
  color: black;
  font-size: 17px;
`;

const Description = styled.p`
  color: black;
  font-size: 14px;
`;

const BtnContainer = styled.div`
  margin-left: auto;
`;

export { Container, InputContainer, Title, Description, BtnContainer };
