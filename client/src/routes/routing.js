import { App, Auth } from "layouts";
import { createBrowserRouter } from "react-router-dom";
import { LOGIN, ROOT } from "./routers";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <App />,
  },
  {
    path: LOGIN,
    element: <Auth />,
  },
]);
