import styled from "styled-components";
import { THEME } from "../../../theme";

const Btn = styled.button`
  width: ${(props) => (props.$width ? props.$width : "20px")};
  height: ${(props) => (props.$height ? props.$height : "20px")};
  background-color: ${THEME.COLOR.RETRO_GRAY};

  border-bottom: 2px solid black;

  padding: 0px;

  cursor: pointer;

  font-size: ${(props) => (props.$contentSize ? props.$contentSize : "14px")};
  color: black;
  font-family: Galmuri14;
`;

export { Btn };
