import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  /* justify-content: space-between; */
  align-items: center;

  padding: 10px;
  background: rgb(9, 0, 158);
  background: linear-gradient(
    90deg,
    rgba(9, 0, 158, 1) 0%,
    rgba(41, 41, 208, 1) 21%,
    rgba(0, 212, 255, 1) 100%
  );

  h3 {
    color: white;
    font-size: 15px;
    font-weight: 900;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;

  margin-left: auto;
  margin-right: 20px;
`;

export { Container, BtnContainer };
