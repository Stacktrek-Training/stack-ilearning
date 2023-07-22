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
import TRUEorFALSE from "./pages/trisha/API";
import QuizComponent from "./pages/marcos/quizcomponents";
import GuessWord from "./pages/eljohn/Guess";
import Main from "./pages/sagun/App";
import Hangman from "./pages/erica/App";

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
  {
    path: "/games/TRUEorFALSE",
    element: <TRUEorFALSE />,
  },
  {
    path: "/games/quizcomponent",
    element: <QuizComponent />,
  },
  {
    path: "/games/GuessTheWord",
    element: <GuessWord />,
  },
  {
    path: "/games/BinaryChallege",
    element: <Main />,
  },
  {
    path: "/games/Hangman",
    element: <Hangman />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
