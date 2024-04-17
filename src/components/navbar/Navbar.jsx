import { Link } from "react-router-dom";
import Button from "../button/Button";
import * as S from "./Navbar.style";

const Navbar = () => {
  return (
    <S.Container>
      <Link to="/">
        <h3>레트로 챗팅</h3>
      </Link>
      <S.BtnContainer>
        <Button content="X" />
        <Button content="_" />
        <Button content="ㅁ" />
      </S.BtnContainer>
    </S.Container>
  );
};

export default Navbar;
