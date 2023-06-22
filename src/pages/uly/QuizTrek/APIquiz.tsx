import React, { useEffect, useState } from "react";
import "./Design.css";

function App() {
  useEffect(() => {
    document.title = "API & WEB Services Quiz"; // title
  }, []);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "To send parameter(s) in a GET request you use ____.",
      options: [
        { id: 0, text: "Request Body", isCorrect: false },
        { id: 1, text: "Query String", isCorrect: true },
        { id: 2, text: "Header", isCorrect: false },
        { id: 3, text: "Body", isCorrect: false },
      ],
    },
    {
      text: "Acronym of API?",
      options: [
        { id: 0, text: "Application Programming Interface.", isCorrect: true },
        { id: 1, text: " Application Programming Interact", isCorrect: false },
        { id: 2, text: " Application Program Interface.", isCorrect: false },
        { id: 3, text: " Application Prototype Interface.", isCorrect: false },
      ],
    },
    {
      text: "SOAP is a more lightweight protocol than SOAP",
      options: [
        { id: 0, text: "Maybe", isCorrect: false },
        { id: 1, text: "False", isCorrect: false },
        { id: 2, text: "True", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "What does the acronym REST stands for?",
      options: [
        { id: 0, text: "Representational State Transfer", isCorrect: true },
        { id: 1, text: "Restful Services Transfer", isCorrect: false },
        { id: 2, text: "Remote Secure Transfer", isCorrect: false },
        { id: 3, text: "Remote Services Transfer", isCorrect: false },
      ],
    },
    {
      text: "Request method used to create a new resource on a server using an API?",
      options: [
        { id: 0, text: "PUT", isCorrect: false },
        { id: 1, text: "DELETE", isCorrect: false },
        { id: 2, text: "GET", isCorrect: false },
        { id: 3, text: "POST", isCorrect: true },
      ],
    },
  ];

  /* A possible answer was clicked */
  const optionClicked = (isCorrect: boolean) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="QUIZ">
      {showResults ? (
        <div className="result">
          <h1>RESULTS</h1>
          <h2>
            {score} / {questions.length}
          </h2>
          <h3>{(score / questions.length) * 100}% over 100%</h3>
          <button className="btnrestart" onClick={() => restartGame()}>
            TRY AGAIN
          </button>
        </div>
      ) : (
        <div className="question-card">
          {/* Current Question  */}
          <h1>API & WEB SERVICES QUIZ</h1>
          <h2>
            QUESTION: {currentQuestion + 1} / {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
