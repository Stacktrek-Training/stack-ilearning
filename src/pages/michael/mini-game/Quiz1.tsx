import React, { useState } from "react";
import "./MichaelMP.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is C#?",
      options: [
        {
          id: 0,
          text: "A secure and robust programming language",
          isCorrect: true,
        },
        {
          id: 1,
          text: "A markup language used for web development",
          isCorrect: false,
        },
        { id: 2, text: "A database management language", isCorrect: false },
        {
          id: 3,
          text: "A scripting language for automation",
          isCorrect: false,
        },
      ],
    },
    {
      text: "What programming paradigm does C# support?",
      options: [
        { id: 0, text: "Imperative", isCorrect: false },
        { id: 1, text: "Object-oriented", isCorrect: true },
        { id: 2, text: "Functional", isCorrect: false },
        { id: 3, text: "Procedural", isCorrect: false },
      ],
    },
    {
      text: "What features in C# help create robust and durable applications?",
      options: [
        {
          id: 0,
          text: "Garbage collection, nullable types, and exception handling",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Lambda expressions, LINQ syntax, and asynchronous operations Revere",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Iterators, generic methods and types, and user-defined types",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Dynamic allocation of objects and in-line storage of lightweight structures",
          isCorrect: false,
        },
      ],
    },
    {
      text: " What does C# support in terms of types?",
      options: [
        {
          id: 0,
          text: " C# has a unified type system where all types inherit from a single root object type",
          isCorrect: true,
        },
        {
          id: 1,
          text: "C# supports only user-defined reference types",
          isCorrect: false,
        },
        { id: 2, text: "C# supports only value types", isCorrect: false },
        { id: 3, text: "C# doesn't support types", isCorrect: false },
      ],
    },
    {
      text: "What does C# emphasize to ensure programs and libraries can evolve over time?",
      options: [
        { id: 0, text: "Versioning", isCorrect: true },
        { id: 1, text: "Compatibility with Java", isCorrect: false },
        { id: 2, text: "Multi-threading", isCorrect: false },
        {
          id: 3,
          text: "Memory management give me the correct answer",
          isCorrect: false,
        },
      ],
    },
  ];

  // Helper Functions

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
    <div className="AppMP">
      {/* 1. Header  */}
      {/* <h1>USA Quiz 🇺🇸</h1> */}

      {/* 2. Current Score  */}
      {/* <h2>Score: {score}</h2> */}

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} question - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="btnrestart" onClick={() => restartGame()}>Retake Quiz!</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
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
