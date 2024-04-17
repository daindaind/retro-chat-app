import styled from "styled-components";
import { THEME } from "../../../theme";

const InputLayout = styled.input`
  padding: 5px;

  border: none;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 2px solid black;

  font-size: 14px;
  background-color: ${THEME.COLOR.RETRO_GRAY};

  font-family: Galmuri14;

  &:focus {
    outline: none;
  }
`;

export { InputLayout };
