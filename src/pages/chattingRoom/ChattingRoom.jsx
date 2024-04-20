import * as S from "./ChattingRoom.style";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Window from "../../uis/window/Window";
import Input from "../../components/Input/Input";
import Button from "../../components/button/Button";
import sendChat from "../../api/chat/sendChat";
import socket from "../../server";
import enterRoom from "../../api/room/enterRoom";

const ChattingRoom = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [chatList, setChatList] = useState([]);
  const [enterMessage, setEnterMessage] = useState("");
  const [userColor, setUserColor] = useState("");
  // const [img, setImg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await enterRoom(state.id, state.password);
      if (res) {
        socket("chat").emit("chats", state.id);
        socket("chat").on("renderChats", (data) => {
          setChatList(data);
        });
        setUserColor(res.user);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    socket("chat").emit("join", state.id);
    console.log("chat");
    socket("chat").on("join", (data) => {
      setEnterMessage(data.chat);
      console.log(data);
    });
    socket("chat").emit("chats", state.id);
  }, []);

  const leavingChatRoom = () => {
    socket("chat").emit("exit", () => {
      // console.log(data);
    });

    navigate("/");
  };

  const sendChatMessage = async () => {
    try {
      const res = await sendChat(state.id, inputValue);
      if (res) {
        socket("chat").emit("chats", state.id);
      }
    } catch (e) {
      console.error(e);
      alert("이런! 오류가 발생했어요.");
    } finally {
      setInputValue("");
    }
  };

  return (
    <S.Container>
      <h1>{state.title}</h1>

      <S.RoomLeaveLayout>
        <Button width="50px" content="나가기" onClick={leavingChatRoom} />
      </S.RoomLeaveLayout>
      <Window>
        <S.ChatContaier>
          <h3>{enterMessage}</h3>

          {chatList.length >= 1 &&
            chatList.map(({ user, chat, gif, _id: id }) => {
              return (
                <S.ChatMe key={id} $isMe={userColor === user ? true : false}>
                  <h5>👽 {user}</h5>
                  <p>{chat}</p>
                </S.ChatMe>
              );
            })}
        </S.ChatContaier>
      </Window>

      <S.InputContainer>
        <Input type="file" />

        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
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
