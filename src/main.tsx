import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Proceed from "./components/Upskill";
import LinuxCommand from "./pages/linux-command/index";
import GuessTheLogo from "./pages/guessTheLogo/index";
import Navbar from "./pages/april/components/Navbar";
import SQL from "./components/SQL";
import Landingpage from "./pages/michael/Landingpage";
import CsharpQuiz1 from "./pages/michael/mini-game/Quiz1";
import TypingGame from "./pages/Typing_Game/TheCoder/App";
import AuthenticationPage from "./pages/authentication/Loginpage";
import DragGame from "./pages/rene/Drag";
import APIQuiz from "./pages/uly/QuizTrek/APIquiz";
import DragQuiz from "./pages/Nico/quizGame";
import ColorCodeExercise from "./pages/uly/ColorCode/App";
<<<<<<< HEAD
import QuizComponent from "./pages/marcos/quizcomponents";
=======
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
import TRUEorFALSE from "./pages/trisha/API";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/LoginPage",
    element: <AuthenticationPage />,
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
    path: "/games/chsarpMP",
    element: <Landingpage />,
  },
  {
    path: "/games/CsharpQuiz1",
    element: <CsharpQuiz1 />,
  },
  {
    path: "/games/DragGame",
    element: <DragGame />,
  },
  {
    path: "/games/DragQuiz",
    element: <DragQuiz />,
  },
  {
    path: "/games/TypingGame",
    element: <TypingGame />,
  },
  {
    path: "/games/APIQuiz",
    element: <APIQuiz />,
  },
  {
    path: "/games/ColorCodeExercise",
    element: <ColorCodeExercise />,
  },
<<<<<<< HEAD

  {
    path: "/games/quizcomponent",
    element: <QuizComponent />,
  },

  {
    path: "/games/TRUEorFALSE",
    element: <TRUEorFALSE />,
  },
=======
  {
    path: "/games/TRUEorFALSE",
    element: <TRUEorFALSE />,
  }
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
