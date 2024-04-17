import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;

  h1 {
    color: white;
    font-size: 20px;
  }
`;

const RoomLeaveLayout = styled.div`
  margin-left: auto;
`;

const ChatContaier = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 500px;

  overflow: scroll;

  h3 {
    color: black;
    font-size: 16px;
  }
`;

const ChatMe = styled.div`
  margin-left: auto;

  h5 {
    color: ${(props) => (props.$color ? props.$color : "black")};
    font-size: 13px;
  }

  p {
    color: black;
    font-size: 14px;
  }
`;

const ChatOther = styled(ChatMe)`
  margin-left: 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  justify-content: center;
  align-items: center;
`;

export {
  Container,
  ChatMe,
  ChatOther,
  ChatContaier,
  InputContainer,
  RoomLeaveLayout,
};
