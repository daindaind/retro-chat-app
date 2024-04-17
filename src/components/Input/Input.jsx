import * as S from "./Input.style";

const Input = ({ width, value, onChange, placeholder, type }) => {
  return (
    <S.InputLayout
      $width={width}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
