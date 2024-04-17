import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import ChattngList from "./pages/chattingList/ChattngList";
import RoomCreatePage from "./pages/roomCreate/RoomCreatePage";
import ChattingRoom from "./pages/chattingRoom/ChattingRoom";
import io from "socket.io-client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <ChattngList />,
      },
      {
        path: "/add",
        element: <RoomCreatePage />,
      },
      {
        path: "/chat/:id",
        element: <ChattingRoom />,
      },
    ],
  },
]);

function App() {
  const socket = io("http://localhost:8005", {
    cors: {
      origin: "*",
    },
  });

  socket.on("test", (socket) => {
    console.log(socket);
  });

  const handleRequestSocket = () => {
    socket.emit("test", {
      data: "test socket on client",
    });
  };

  function handleChange() {
    console.log("change handle");
  }
  return <RouterProvider router={router} />;
}

export default App;
