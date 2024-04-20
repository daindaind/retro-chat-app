import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import ChattngList from "./pages/chattingList/ChattngList";
import RoomCreatePage from "./pages/roomCreate/RoomCreatePage";
import ChattingRoom from "./pages/chattingRoom/ChattingRoom";

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
  return <RouterProvider router={router} />;
}

export default App;
