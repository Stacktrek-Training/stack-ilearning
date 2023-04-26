import React from "react";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </React.StrictMode>
  );
};

export default App;
