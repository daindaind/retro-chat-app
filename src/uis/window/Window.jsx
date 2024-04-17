import * as S from "./Window.style";

const Window = ({ children }) => {
  return (
    <S.Container>
      <S.StatusBar>
        <S.BtnContainer>
          <S.Btn>X</S.Btn>
          <S.Btn>_</S.Btn>
          <S.Btn>ㅁ</S.Btn>
        </S.BtnContainer>
      </S.StatusBar>
      <S.ContentsContainer>{children}</S.ContentsContainer>
    </S.Container>
  );
};

export default Window;
