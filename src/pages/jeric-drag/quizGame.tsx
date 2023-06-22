import React, { useState, useEffect, useCallback } from "react";
import "./dragQuiz.css";
import applauseSound from "./assets/applause.mp3";
import logo from "./assets/stacktrek-logo.png";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  userAnswer: string | null;
}

const QuizGame: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      question: "What is the main purpose of Java?",
      options: shuffleArray([
        "Web development",
        "Game development",
        "Mobile app development",
        "All of the above",
      ]),
      answer: "All of the above",
      userAnswer: null,
    },

    {
      id: 2,
      question: "Which company developed Java?",
      options: shuffleArray(["Microsoft", "Apple", "Oracle", "Google"]),
      answer: "Oracle",
      userAnswer: null,
    },

    {
      id: 3,
      question: "What is Java Virtual Machine (JVM)?",
      options: shuffleArray([
        "A hardware component",
        "An operating system",
        "A programming language",
        "A runtime environment",
      ]),
      answer: "A runtime environment",
      userAnswer: null,
    },

    {
      id: 4,
      question: "What is the syntax for declaring a variable in Java?",
      options: shuffleArray(["var", "let", "int", "string"]),
      answer: "int",
      userAnswer: null,
    },

    {
      id: 5,
      question: "What is an object in Java?",
      options: shuffleArray([
        "A function",
        "A data type",
        "A loop",
        "A conditional statement",
      ]),
      answer: "A data type",
      userAnswer: null,
    },

    {
      id: 6,
      question: 'What is the purpose of the "static" keyword in Java?',
      options: shuffleArray([
        "To declare a constant",
        "To create an object",
        "To import a package",
        "To define a method",
      ]),
      answer: "To declare a constant",
      userAnswer: null,
    },

    {
      id: 7,
      question: "What is an exception in Java?",
      options: shuffleArray([
        "A syntax error",
        "A runtime error",
        "A logical error",
        "An infinite loop",
      ]),
      answer: "A runtime error",
      userAnswer: null,
    },

    {
      id: 8,
      question: 'What is the purpose of the "extends" keyword in Java?',
      options: shuffleArray([
        "To implement an interface",
        "To inherit a class",
        "To declare a method",
        "To import a package",
      ]),
      answer: "To inherit a class",
      userAnswer: null,
    },

    {
      id: 9,
      question: "What is the Java Development Kit (JDK)?",
      options: shuffleArray([
        "An integrated development environment",
        "A compiler",
        "A debugger",
        "A code editor",
      ]),
      answer: "A compiler",
      userAnswer: null,
    },

    {
      id: 10,
      question: 'What is the purpose of the "final" keyword in Java?',
      options: shuffleArray([
        "To define a constant",
        "To declare a method",
        "To create an object",
        "To import a package",
      ]),
      answer: "To define a constant",
      userAnswer: null,
    },
    // Question data...
  ]);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [wrongAnswerVisible, setWrongAnswerVisible] = useState<boolean>(false);
  const [playApplause, setPlayApplause] = useState<boolean>(false);

  useEffect(() => {
    if (showResult) {
      setPlayApplause(true);
    }
  }, [showResult]);

  useEffect(() => {
    if (playApplause) {
      const audioElement = new Audio(applauseSound);
      audioElement.play();

      return () => {
        audioElement.pause();
        audioElement.currentTime = 0;
      };
    }
  }, [playApplause]);

  const getCongratulatoryMessage = (score: number): string => {
    if (score === 100) {
      return "Perfect!";
    } else if (score >= 90) {
      return "Good Job!";
    } else if (score >= 80) {
      return "Very Good!";
    } else if (score >= 75) {
      return "Good!";
    } else {
      return "Keep trying!";
    }
  };

  function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  const shuffleQuestions = useCallback(() => {
    const shuffledQuestions = [...questions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [
        shuffledQuestions[j],
        shuffledQuestions[i],
      ];
    }
    setQuestions(shuffledQuestions);
  }, [questions]);

  useEffect(() => {
    shuffleQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    index: number
  ): void => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    questionIndex: number
  ): void => {
    event.preventDefault();
    const optionIndex = event.dataTransfer.getData("index");
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].userAnswer =
      updatedQuestions[questionIndex].options[parseInt(optionIndex)];
    setQuestions(updatedQuestions);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  const checkAnswer = (): boolean => {
    const currentQuestionData = questions[currentQuestion];
    const isCorrectAnswer =
      currentQuestionData.userAnswer === currentQuestionData.answer;

    if (isCorrectAnswer) {
      setScore(score + 10);
    } else {
      setScore(score - 3);
    }

    return isCorrectAnswer;
  };

  const handleNextQuestion = (): void => {
    if (checkAnswer()) {
      if (currentQuestion === questions.length - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      setWrongAnswerVisible(true);
      setTimeout(() => {
        setWrongAnswerVisible(false);
      }, 2000);
    }
  };

  if (showResult) {
    const percentScore = (score / (questions.length * 10)) * 100;
    const congratulatoryMessage = getCongratulatoryMessage(percentScore);
    return (
      <div className="quiz-container">
        <div className="nav">
          <nav className="navbar">
            <img className="logo" src={logo} alt="StackTrek Logo" />
          </nav>
        </div>
        <div className="congMessage">
          Congratulation! You Finished the Quiz!
        </div>
        <div className="result-container">
          <h2>
            Your score: {percentScore.toFixed(2)}% ({score} /{" "}
            {questions.length * 10})
          </h2>
        </div>
        <div className="message">
          <h1>{congratulatoryMessage}</h1>
        </div>
      </div>
    );
  }

  if (currentQuestion >= questions.length) {
    return (
      <div className="quiz-container">
        <h1>Quiz Game</h1>
        <p>Loading...</p>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <nav className="navbar">
        <img className="logo" src={logo} alt="StackTrek Logo" />
      </nav>
      <div className="title">
        <h1>Know Your Java</h1>
      </div>

      <div className="question-title">
        <h2>Question {currentQuestion + 1}</h2>
      </div>
      <div className="question-container">
        <h2>{currentQuestionData.question}</h2>
        <div
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, currentQuestion)}
          className="answer-container"
        >
          {wrongAnswerVisible && (
            <div className="wrong-answer">
              Wrong answer. Try again! -3 points
            </div>
          )}
          {currentQuestionData.userAnswer
            ? currentQuestionData.userAnswer
            : "Drag your answer here"}
        </div>
        <ul>
          {currentQuestionData.options.map((option, index) => (
            <li
              key={index}
              draggable
              onDragStart={(event) => handleDragStart(event, index)}
              className="option-item"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <button className="next-button" onClick={handleNextQuestion}>
        Next Question
      </button>

      <div className="progress-bar">
        Progress: {(currentQuestion / questions.length) * 100}%
      </div>
      {wrongAnswerVisible && (
        <div className="wrong-answer">Wrong answer. Try again! -3 points</div>
      )}
      <div className="score">
        Score: {score} / {questions.length * 10}
      </div>
    </div>
  );
};

export default QuizGame;
