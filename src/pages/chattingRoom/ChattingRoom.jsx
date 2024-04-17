import * as S from "./ChattingRoom.style";
import Window from "../../uis/window/Window";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/button/Button";
import leaveRoom from "../../api/room/leaveRoom";
import sendChat from "../../api/chat/sendChat";
import { useEffect, useState } from "react";

const ChattingRoom = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [chat, setChat] = useState();
  const [chatList, setChatList] = useState();

  const leavingChatRoom = async () => {
    try {
      const res = await leaveRoom(state.id);
      if (res) {
        navigate("/");
      }
    } catch (e) {
      console.error(e);
      alert("이런! 오류가 발생했어요.");
    }
  };

  const sendChatMessage = async () => {
    try {
      const res = await sendChat(chat);
      if (res) {
        console.log(res);
      }
    } catch (e) {
      console.error(e);
      alert("이런! 오류가 발생했어요.");
    }
  };

  useEffect(() => {
    setChatList(state.chats);
  }, [state]);

  return (
    <S.Container>
      <h1>{state.title}</h1>

      <S.RoomLeaveLayout>
        <Button width="50px" content="나가기" onClick={leavingChatRoom} />
      </S.RoomLeaveLayout>
      <Window>
        <S.ChatContaier>
          <h3>~님이 입장하셨습니다.</h3>

          {chatList &&
            chatList.map(({ user, chat, gif, _id: id }) => (
              <S.ChatMe key={id}>
                <h5>👽 {user}</h5>
                <p>{chat}</p>
              </S.ChatMe>
            ))}
        </S.ChatContaier>
      </Window>
      <S.InputContainer>
        <Input type="file" />
        <Input
          value={chat}
          onChange={(e) => {
            setChat(e.target.value);
          }}
          placeholder="말 걸어보세요"
        />
        <Button
          width="60px"
          height="30px"
          content="보내기"
          onClick={sendChatMessage}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default ChattingRoom;
