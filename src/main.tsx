import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Michael from "./pages/michael/introduction";
import Josephine from "./pages/josephine/index";
import Minigame from "./pages/mini-game/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/Michael",
    element: <Michael />,
  },
  {
    path: "/games/linux-command",
    element: <Josephine />,
  },
  {
    path: "/games/guess-the-logo",
    element: <Minigame />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
