import * as S from "./ChattingRoom.style";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Window from "../../uis/window/Window";
import Input from "../../components/Input/Input";
import Button from "../../components/button/Button";
import sendChat from "../../api/chat/sendChat";
import socket from "../../server";
import RandomEmojis from "../../utils/randomEmojis";

const ChattingRoom = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [chatList, setChatList] = useState([]);
  const [enterMessage, setEnterMessage] = useState("");
  const [userEmoji, setUserEmoji] = useState(null);
  // const [img, setImg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      socket("chat").emit("chats", state.id);
      socket("chat").on("renderChats", (data) => {
        setChatList(data);
      });
    };

    fetchData();
  }, [state.id]);

  useEffect(() => {
    socket("chat").emit("join", state.id);
    socket("chat").on("join", (data) => {
      setEnterMessage(data.chat);
    });
    socket("chat").emit("chats", state.id);

    setUserEmoji(RandomEmojis());
  }, []);

  const leavingChatRoom = () => {
    socket("chat").emit("exit", () => {
      // console.log(data);
    });

    navigate("/");
  };

  const sendChatMessage = async () => {
    if (!inputValue) {
      alert("내용 좀 입력해주세요");
    } else {
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
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendChatMessage();
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
                <S.ChatMe
                  key={id}
                  $isMe={state.userColor === user ? true : false}
                >
                  <S.UserNameContainer $user={user}>
                    <S.UserNameText
                      $isMe={state.userColor === user ? true : false}
                    >
                      {userEmoji} {user}
                    </S.UserNameText>
                  </S.UserNameContainer>
                  <p>{chat}</p>
                </S.ChatMe>
              );
            })}
        </S.ChatContaier>
      </Window>

      <S.InputLayout>
        <S.InputContainer>
          <Input type="file" />
        </S.InputContainer>
        <S.InputContainer>
          <Input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="말 걸어보세요"
            onKeyPress={handleKeyDown}
          />
          <Button
            width="60px"
            height="30px"
            content="보내기"
            onClick={sendChatMessage}
          />
        </S.InputContainer>
      </S.InputLayout>
    </S.Container>
  );
};

export default ChattingRoom;
