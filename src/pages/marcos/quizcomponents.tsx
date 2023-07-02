import React, { useState, useEffect } from "react";
import "./App.css";
import { initialQuestions } from "./data";
import logo from "./logo.png";
import correctSound from "./correct.mp3";
import wrongSound from "./wrong.mp3";
import ideaSound from "./idea.mp3";
import fiftySound from "./idea.mp3";

const QuizGame: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(20);
  const [showHint, setShowHint] = useState(false);
  const [showFiftyFifty, setShowFiftyFifty] = useState(false);
  const [isFiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const [isHintUsed, setHintUsed] = useState(false);
  const [questions, setQuestions] = useState([...initialQuestions]);

  const correctAudio = new Audio(correctSound);
  const wrongAudio = new Audio(wrongSound);
  const ideaAudio = new Audio(ideaSound);
  const fiftyAudio = new Audio(fiftySound);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (timeRemaining > 0 && !showResult) {
      timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0 && !showResult) {
      handleAnswer(""); //  Automatically submit answer when time runs out
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timeRemaining, showResult]);

  const handleAnswer = (option: string) => {
    const question = questions[currentQuestion];

    if (option === question.answer) {
      setScore((prevScore) => prevScore + 1);
      correctAudio.play(); // Play the correct sound
    } else {
      wrongAudio.play(); // Play the wrong sound
    }

    if (currentQuestion + 1 === questions.length) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimeRemaining(20); // Reset timer for the next question
    }

    setSelectedOption("");
    setShowHint(false);
    setShowFiftyFifty(false);
  };

  const handleHint = () => {
    setShowHint(true);
    setHintUsed(true);
    ideaAudio.play();
  };

  const handleFiftyFifty = () => {
    fiftyAudio.play();
    if (!showFiftyFifty && !showResult && !isFiftyFiftyUsed) {
      const question = questions[currentQuestion];
      const correctAnswer = question.answer;

      // Randomly select two incorrect options to remove
      const incorrectOptions = question.options.filter(
        (option) => option !== correctAnswer
      );
      const shuffledIncorrectOptions = shuffleArray(incorrectOptions);
      const removedOptions = shuffledIncorrectOptions.slice(0, 2);

      const updatedOptions = question.options.filter(
        (option) =>
          option === correctAnswer || removedOptions.indexOf(option) === -1
      );

      question.options = updatedOptions;

      setShowFiftyFifty(true);
      setFiftyFiftyUsed(true);

      const updatedQuestions = [...questions]; // Create a copy of the questions array
      updatedQuestions[currentQuestion] = question; // Update the current question in the array

      setQuestions(updatedQuestions);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption("");
    setTimeRemaining(20);
    setShowHint(false);
    setShowFiftyFifty(false);
    setFiftyFiftyUsed(false);
    setHintUsed(false);

    const restoredQuestions = initialQuestions.map((question) => {
      return {
        ...question,
        options: shuffleArray([...question.options]), // Shuffle the options
      };
    });

    setQuestions(restoredQuestions);
  };
  // Utility function to shuffle an array
  const shuffleArray = <T extends any>(array: T[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const currentQuestionObj = questions[currentQuestion];

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="quiz-container">
        <h1 className="heading">HTML</h1>
        <div className="sidebar">
          <button onClick={handleHint} disabled={isHintUsed || showResult}>
            Hint
          </button>
          <button
            onClick={handleFiftyFifty}
            disabled={showFiftyFifty || showResult || isFiftyFiftyUsed}
          >
            50/50
          </button>
        </div>

        {showResult ? (
          <div>
            <h2 className="result-text">Quiz Result</h2>
            <p className="result-score">
              Your Score: {score}/{questions.length}
            </p>
            <div className="result-buttons">
              <button onClick={handleRestart}>Restart Quiz</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="timer">Time Remaining: {timeRemaining}s</div>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{currentQuestionObj.question}</p>
            {showHint && <p className="hint">{currentQuestionObj.hint}</p>}
            <ul className="option-box">
              {currentQuestionObj.options.map((option) => (
                <li key={option}>
                  <button
                    className={`option-button ${
                      selectedOption === option
                        ? option === currentQuestionObj.answer
                          ? "correct"
                          : "incorrect"
                        : ""
                    }`}
                    onClick={() => setSelectedOption(option)}
                    disabled={selectedOption !== "" || timeRemaining === 0}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>

            {selectedOption && (
              <p className="selected-answer">
                Your Selection: {selectedOption}
                {selectedOption === currentQuestionObj.answer ? (
                  <span className="correct-answer"> &nbsp; Correct!</span>
                ) : (
                  <span className="incorrect-answer">
                    &nbsp; Incorrect! Correct Answer:{" "}
                    {currentQuestionObj.answer}
                  </span>
                )}
              </p>
            )}
            <button
              className="submit-button"
              onClick={() => handleAnswer(selectedOption)}
              disabled={selectedOption === "" || timeRemaining === 0}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
