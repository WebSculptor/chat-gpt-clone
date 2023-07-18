import ChatApp from "chat";
import { App, Auth } from "layouts";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = "/",
  LOGIN = "/login",
  CHAT = "/chat";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <App />,
  },
  {
    path: LOGIN,
    element: <Auth />,
  },
  {
    path: CHAT,
    element: <ChatApp />,
  },
]);
