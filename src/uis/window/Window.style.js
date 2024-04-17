import styled from "styled-components";
import { THEME } from "../../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px;

  gap: 20px;

  background-color: ${THEME.COLOR.RETRO_GRAY};
`;

const StatusBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 3px;
  background: rgb(9, 0, 158);
  background: linear-gradient(
    90deg,
    rgba(9, 0, 158, 1) 0%,
    rgba(41, 41, 208, 1) 21%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;

  margin-left: auto;
  margin-right: 5px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${THEME.COLOR.RETRO_GRAY};

  border-bottom: 2px solid black;

  padding: 0px;

  font-size: 14px;
  color: black;
  font-family: Galmuri14;
`;

export { Container, StatusBar, ContentsContainer, BtnContainer, Btn };
