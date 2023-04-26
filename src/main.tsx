import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Michael from "./pages/michael/introduction";
import MichaelQuiz1 from "./pages/michael/Quiz1"

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
    path: "/MichaelQuiz1",
    element: <MichaelQuiz1 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
