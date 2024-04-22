import { io } from "socket.io-client";

const socket = (nameSpace) => {
  return io(`http://localhost:8005/${nameSpace}`, {
    withCredentials: true,
  });
}; // 해당 주소로 연결할 수 있는 소켓 생성
export default socket;
