import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Michael from "./pages/michael/introduction";
import Josephine from "./pages/josephine/components/Quiz";
import MichaelMP from "./pages/michael/Multiplechoice";


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
    path: "/MichaelMP",
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
