import styled from "styled-components";
import { THEME } from "../../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;

  gap: 5px;
`;

const ChatContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-left: 2px solid black;
  border-right: 2px solid black;

  background-color: ${THEME.COLOR.RETRO_GRAY};
`;

const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;

  border: 1px solid black;
  color: black;
`;

const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const BtnContainer = styled.div`
  margin-left: auto;
`;

export {
  Container,
  ChatContentContainer,
  ChatContent,
  ChatListContainer,
  BtnContainer,
};
