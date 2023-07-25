import React, { useState } from "react";

const TrueFalseGame: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "The Earth is flat.",
      answer: false,
    },
    {
      question: "React is a JavaScript library.",
      answer: true,
    },
    // Add more questions here
  ];

  const handleAnswer = (userAnswer: boolean) => {
    const currentQuestion = questions[questionIndex];

    if (userAnswer === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (questionIndex + 1 === questions.length) {
      // All questions have been answered, game over.
      alert(`Game Over! Your final score is ${score}`);
    } else {
      // Move to the next question.
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="true-false-game">
      <h1>True or False Game</h1>
      {questionIndex < questions.length && (
        <div className="question-container">
          <p>{questions[questionIndex].question}</p>
          <div className="button-container">
            <button onClick={() => handleAnswer(true)}>True</button>
            <button onClick={() => handleAnswer(false)}>False</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrueFalseGame;
