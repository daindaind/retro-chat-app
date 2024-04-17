import * as S from "./Button.style";

const Button = ({ width, height, onClick, content, contentSize }) => {
  return (
    <S.Btn
      $width={width}
      $height={height}
      $contentSize={contentSize}
      onClick={onClick}
    >
      {content}
    </S.Btn>
  );
};

export default Button;
