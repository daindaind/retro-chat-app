import { Outlet } from "react-router-dom";
import { styled, ThemeProvider } from "styled-components";
import Navbar from "../components/navbar/Navbar";
import { THEME } from "../../theme";

const AppLayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  background-color: ${THEME.COLOR.RETRO_DARK_BLUE};
`;

const AppLayout = () => {
  return (
    <ThemeProvider theme={THEME}>
      <AppLayoutContainer>
        <Navbar />
        <Outlet />
      </AppLayoutContainer>
    </ThemeProvider>
  );
};

export default AppLayout;
