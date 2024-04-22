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

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  h3 {
    color: black;
    font-size: 16px;
  }
`;

const ChatMe = styled.div`
  margin-left: ${(props) => (props.$isMe ? "auto" : "0")};

  p {
    color: black;
    font-size: 14px;
  }
`;

const UserNameContainer = styled.div`
  display: flex;
  color: ${(props) => (props.$user ? props.$user : "black")};
  font-size: 13px;
`;

const UserNameText = styled.h5`
  margin-left: ${(props) => (props.$isMe ? "auto" : "0")};
`;

const ChatOther = styled(ChatMe)`
  margin-left: 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  justify-content: center;
  align-items: center;

  min-width: 250px;
`;

const InputLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  flex-wrap: wrap;

  width: 100%;
`;

const ImgLayout = styled.img`
  width: 200px;
  height: 200px;
`;

export {
  Container,
  ChatMe,
  ChatOther,
  ChatContaier,
  InputContainer,
  RoomLeaveLayout,
  UserNameContainer,
  UserNameText,
  InputLayout,
  ImgLayout,
};
