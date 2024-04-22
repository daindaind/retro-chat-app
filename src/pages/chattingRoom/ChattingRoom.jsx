import * as S from "./ChattingRoom.style";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Window from "../../uis/window/Window";
import Input from "../../components/Input/Input";
import Button from "../../components/button/Button";
import sendChat from "../../api/chat/sendChat";
import socket from "../../server";
import RandomEmojis from "../../utils/randomEmojis";
import sendGif from "../../api/chat/sendGif";

const ChattingRoom = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [chatList, setChatList] = useState([]);
  const [enterMessage, setEnterMessage] = useState([]);
  const [exitMessage, setExitMessage] = useState([]);
  const [userEmoji, setUserEmoji] = useState(null);
  const [gifChat, setGifChat] = useState();
  const chatRef = useRef(null);

  useEffect(() => {
    socket("room").on("removeRoom", (data) => {
      console.log("방 지워짐: ", data);
      if (data) {
        navigate("/");
      }
    });

    socket("chat").on("exitUser", (data) => {
      console.log("방 나감: ", data);
      setExitMessage((prev) => [...prev, data.chat]);
      if (state.userColor === data.user) {
        navigate("/");
      }
    });

    socket("room").emit("connection", state.id);

    socket("chat").emit("join", state.id);
    socket("chat").on("joinUser", (data) => {
      setEnterMessage((prev) => [...prev, data.chat]);
    });

    socket("chat").emit("chats", state.id);
    socket("chat").on("renderChats", (data) => {
      setChatList(data);
    });

    setUserEmoji(RandomEmojis());
  }, []);

  useEffect(() => {
    chatRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  const leavingChatRoom = () => {
    socket("chat").emit("leave-room", state.id);
  };

  const sendChatMessage = async () => {
    if (!inputValue) {
      alert("내용 좀 입력해주세요");
    } else if (gifChat) {
      return;
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

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    const formdata = new FormData();
    formdata.append("img", selectedFile);

    try {
      const res = await sendGif(state.id, formdata);
      if (res) {
        socket("chat").emit("chats", state.id);
        setGifChat(res.imgUrl);
      }
    } catch (e) {
      console.error(e);
      alert("에러 발생!");
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
        {enterMessage.length > 0 &&
          enterMessage.map((item, index) => <p key={index}>{item}</p>)}
        {exitMessage.length > 0 &&
          exitMessage.map((item, index) => <p key={index}>{item}</p>)}
        <S.ChatContaier>
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
                  {gif && (
                    <S.ImgLayout
                      src={`${import.meta.env.VITE_SERVER_URL}/${gif}`}
                    />
                  )}
                </S.ChatMe>
              );
            })}
          <div ref={chatRef}></div>
        </S.ChatContaier>
      </Window>

      <S.InputLayout>
        <S.InputContainer>
          <Input type="file" onChange={handleFileChange} />
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
