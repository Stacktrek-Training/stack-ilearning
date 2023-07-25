import React, { useState, useEffect } from 'react';
import '../components/App.css';

// Sample true or false questions with random dares
const questions = [
  {
    question: 'JavaScript is a statically typed language.',
    answer: false,
  },
  {
    question: 'The "for" loop is the only type of loop in JavaScript',
    answer: false,
  },
  {
    question: 'Python is an object-oriented programming language.',
    answer: true,
  },
  {
    question: 'CSS is used to add interactivity and behavior to a website.',
    answer: false,
  },
  {
    question: 'React is a front-end JavaScript library for building user interfaces.',
    answer: true,
  },
  {
    question: ' PHP is a server-side programming language.',
    answer: true,
  },
  {
    question: 'In Python, you can use the "else" clause in a try-except block.',
    answer: true,
  },
  {
    question: 'HTML is a programming language used for creating the structure of web pages.',
    answer: false,
  },
  {
    question: 'Java is a compiled language.',
    answer: true,
  },
  {
    question: 'Git is a version control system primarily used for managing code repositories.',
    answer: true,
  },

];

const dares = [
  'Do your best chicken dance for 10 seconds!',
  'Sing your favorite song loudly!',
  'Tell a joke to the group!',
  'Do five jumping jacks!',
  'Spin in a circle three times!',
  'Give a compliment to the person on your right!',
  'Speak in a silly accent for the next three questions.',
  'Perform your best impression of a famous movie character for 30 seconds.',
  'Do an interpretive dance of your favorite emoji.',
  'Wear your clothes backward for the rest of the game.',
];

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [showScore, setShowScore] = useState(false);
  const [randomDare, setRandomDare] = useState<string>('');

  useEffect(() => {
    getRandomDare();
  }, []);

  const getRandomDare = () => {
    const randomIndex = Math.floor(Math.random() * dares.length);
    setRandomDare(dares[randomIndex]);
  };

  const handleAnswer = (answer: boolean) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      getRandomDare(); // Get a new random dare for the next question
    } else {
      setShowScore(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowScore(false);
    getRandomDare(); // Get a random dare when starting the game again
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>Score: {userAnswers.filter((answer, index) => answer === questions[index].answer).length}/{questions.length}</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="answer-section">
            <button onClick={() => handleAnswer(true)}>True</button>
            <button onClick={() => handleAnswer(false)}>False</button>
          </div>
          <div className="dare-section">
            <h3>Dare:</h3>
            <p>{randomDare}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
