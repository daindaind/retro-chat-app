import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import * as S from "./ChattingList.style";
import getChattingList from "../../api/chat/getChattingList";
import Window from "../../uis/window/Window";
import { Link, useNavigate } from "react-router-dom";
import enterRoom from "../../api/room/enterRoom";

const ChattngList = () => {
  const [chatList, setChatList] = useState();
  const navigate = useNavigate();

  const enterChatRoom = async (id, password, title) => {
    let result;
    if (password) {
      result = prompt("비밀번호를 입력하세요.", password);
    }
    try {
      const res = await enterRoom(id, result);
      if (res) {
        const chats = res.chats;
        navigate(`/chat/${id}`, {
          state: { title, id, chats },
        });
      }
    } catch (e) {
      console.error(e);
      alert("이런! 오류 발생");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getChattingList();
      if (res) {
        setChatList(res);
      }
    };
    fetchData();
  }, []);

  console.log(chatList);

  return (
    <S.Container>
      <Link to="/add">
        <Button width="100px" height="30px" content="방만들기" />
      </Link>
      <Window>
        <S.ChatContentContainer>
          <S.ChatContent>
            <p>🏠</p>방 제목
          </S.ChatContent>
          <S.ChatContent>
            <p>🔒</p>종류
          </S.ChatContent>
          <S.ChatContent>
            <p>🫤</p>허용 인원
          </S.ChatContent>
          <S.ChatContent>
            <p>👾</p>방장
          </S.ChatContent>
        </S.ChatContentContainer>

        {chatList &&
          chatList.map(({ _id: id, title, owner, max, password }) => {
            return (
              <S.ChatListContainer key={id}>
                <S.ChatContentContainer>
                  <S.ChatContent>{title}</S.ChatContent>
                  <S.ChatContent>
                    {password ? "비밀방" : "공개방"}
                  </S.ChatContent>
                  <S.ChatContent>{max}</S.ChatContent>
                  <S.ChatContent>{owner}</S.ChatContent>
                </S.ChatContentContainer>
                <S.BtnContainer>
                  <Button
                    width="100px"
                    content="입장"
                    onClick={() => {
                      enterChatRoom(id, password, title);
                    }}
                  />
                </S.BtnContainer>
              </S.ChatListContainer>
            );
          })}
      </Window>
    </S.Container>
  );
};

export default ChattngList;
