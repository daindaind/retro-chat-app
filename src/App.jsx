import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AppLayout,
  ChattingRoom,
  ChattngList,
  RoomCreatePage,
  PostPage,
} from "./pages";

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
      {
        path: "/post",
        element: <PostPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
