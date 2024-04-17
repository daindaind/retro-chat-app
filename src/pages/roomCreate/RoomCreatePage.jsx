import * as S from "./RoomCreatePage.style";
import Window from "../../uis/window/Window";
import Input from "../../components/Input/Input";
import Button from "../../components/button/Button";
import { useState } from "react";
import createChattingRoom from "../../api/room/createChattingRoom";
import { useNavigate } from "react-router-dom";

const RoomCreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [password, setPassword] = useState();
  const [max, setMax] = useState();

  const addRoom = async () => {
    try {
      const res = await createChattingRoom({ title, password, max });
      if (res) {
        navigate("/");
      }
    } catch (e) {
      console.error(e);
      alert("이런! 에러가 발생했습니다.");
    }
  };

  return (
    <S.Container>
      <Window>
        <S.InputContainer>
          <S.Title>방 제목</S.Title>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="방 제목을 입력하세요."
          />
          <S.Title>인원수</S.Title>
          <Input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            placeholder="최대 몇 명이 들어갈 수 있는지 입력하세요."
          />
          <S.Title>비밀번호</S.Title>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="방 비밀번호를 입력하세요."
          />
          <S.Description>
            *비밀번호를 설정하지 않으면 공개방이 됩니다.
          </S.Description>
        </S.InputContainer>

        <S.BtnContainer>
          <Button
            width="100px"
            height="30px"
            content="방 생성하기"
            onClick={addRoom}
          />
        </S.BtnContainer>
      </Window>
    </S.Container>
  );
};

export default RoomCreatePage;
