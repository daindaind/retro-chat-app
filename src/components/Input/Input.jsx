import * as S from "./Input.style";

const Input = ({ width, value, onChange, placeholder, type, onKeyPress }) => {
  return (
    <S.InputLayout
      $width={width}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
