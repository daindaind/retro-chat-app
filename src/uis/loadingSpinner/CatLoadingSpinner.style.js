import styled, { keyframes } from "styled-components";

// 로딩 스피너의 회전 애니메이션
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

// 깃허브 고양이의 스타일드 컴포넌트
const GithubCat = styled.div`
  position: relative;
  width: 60px;
  height: 80px;
`;

const Pixel = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  position: absolute;
`;

const LeftEar = styled(Pixel)`
  top: 10px;
  left: 0;
`;

const RightEar = styled(Pixel)`
  top: 10px;
  right: 0;
`;

const LeftEye = styled(Pixel)`
  top: 20px;
  left: 20px;
`;

const RightEye = styled(Pixel)`
  top: 20px;
  right: 20px;
`;

const Nose = styled(Pixel)`
  top: 30px;
  left: 30px;
`;

const Body = styled(Pixel)`
  top: 40px;
  left: 20px;
`;

const Tail = styled(Pixel)`
  top: 50px;
  left: 0;
`;

// 고양이 로딩 스피너의 스타일드 컴포넌트
const CatSpinner = styled.div`
  width: 100%;
  height: 100%;
  animation: ${spin} 1s linear infinite;
`;

export {
  Container,
  GithubCat,
  LeftEar,
  LeftEye,
  RightEar,
  RightEye,
  Nose,
  Body,
  Tail,
  CatSpinner,
};
