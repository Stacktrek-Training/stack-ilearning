import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Michael from "./pages/michael/Landingpage";
import Josephine from "./pages/josephine/components/Quiz";
import MichaelMP from "./pages/michael/mini-game/Quiz1";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/Proceed",
    element: <Proceed />,
  },

  {
    path: "/Navbar",
    element: <Navbar />,
  },

  {
    path: "/games/linux-commands",
    element: <LinuxCommand />,
  },

  {
    path: "/games/guess-the-logo",
    element: <GuessTheLogo />,
  },

  {
    path: "/SQL",
    element: <SQL />,
  },

  {
    path: "/Proceed",
    element: <Proceed />,
  },

  {
    path: "/Navbar",
    element: <Navbar />,
  },

  {
    path: "/games/linux-commands",
    element: <LinuxCommand />,
  },

  {
    path: "/games/guess-the-logo",
    element: <GuessTheLogo />,
  },

  {
    path: "/SQL",
    element: <SQL />,
  },
  {
    path: "/Mini-Game/MultipleChoice",
    element: <MichaelMP />,
  },
  {
    path: "/Josephine",
    element: <Josephine />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
