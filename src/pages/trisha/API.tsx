import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
  useEffect(() => {
    document.title = "TRUE or FALSE"; // title
  }, []);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
<<<<<<< HEAD

=======
 
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
  const questions = [
    {
      text: ".p is the correct extension file name of Python.",
      options: [
        { id: 0, text: "TRUE", isCorrect: false },
        { id: 1, text: "FALSE", isCorrect: true },
      ],
<<<<<<< HEAD
      Trivia:
        "Python programs can be written in any text editor. To save these programs we need to save in files with file extension ‘.py’.",
=======
      Trivia: "Python programs can be written in any text editor. To save these programs we need to save in files with file extension ‘.py’."
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
    },
    {
      text: "Rasmus Lerdorf who developed Python Programming Language",
      options: [
        { id: 0, text: "TRUE", isCorrect: false },
        { id: 1, text: "FALSE", isCorrect: true },
      ],
<<<<<<< HEAD
      Trivia:
        "Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands.",
=======
      Trivia: "Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands.",
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
    },
    {
      text: "Steve Jobs is the father of C language.",
      options: [
        { id: 0, text: "TRUE", isCorrect: false },
        { id: 1, text: "FALSE", isCorrect: true },
      ],
<<<<<<< HEAD
      Trivia:
        "Dennis Ritchie is the father of C Programming Language. C programming language was developed in 1972 at American Telephone & Telegraph Bell Laboratories of USA.",
=======
      Trivia: "Dennis Ritchie is the father of C Programming Language. C programming language was developed in 1972 at American Telephone & Telegraph Bell Laboratories of USA.",
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
    },
    {
      text: "The C programming language the variable names cannot start with a digit.",
      options: [
        { id: 0, text: "TRUE", isCorrect: true },
        { id: 1, text: "FALSE", isCorrect: false },
      ],
<<<<<<< HEAD
      Trivia:
        "According to the syntax for C variable name, it cannot start with a digit.",
=======
      Trivia: "According to the syntax for C variable name, it cannot start with a digit."
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
    },
    {
      text: "JavaScript is a scripting language used to make the website interactive",
      options: [
        { id: 0, text: "TRUE", isCorrect: true },
        { id: 1, text: "FALSE", isCorrect: false },
      ],
<<<<<<< HEAD
      Trivia:
        "JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side.",
    },
    {
      text: "Function is the term used for a block of code that is executed repeatedly until a certain condition is met.",
      options: [
        { id: 0, text: "TRUE", isCorrect: false },
        { id: 1, text: "FALSE", isCorrect: true },
      ],
      Trivia:
        "A loop is a block of code that is executed repeatedly until a certain condition is met. There are different types of loops in programming languages, such as for loop, while loop, and do-while loop.",
=======
      Trivia: "JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side.",
    },
    {
       text: "Function is the term used for a block of code that is executed repeatedly until a certain condition is met.",
       options: [
        { id: 0, text: "TRUE", isCorrect: false },
        { id: 1, text: "FALSE", isCorrect: true },
      ],
      Trivia: "A loop is a block of code that is executed repeatedly until a certain condition is met. There are different types of loops in programming languages, such as for loop, while loop, and do-while loop."
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
    },
    {
      text: "Tree is used for storing a collection of elements in a non-linear fashion",
      options: [
        { id: 0, text: "TRUE", isCorrect: false },
        { id: 1, text: "FALSE", isCorrect: true },
      ],
<<<<<<< HEAD
      Trivia:
        "A tree is a non-linear data structure used for storing a collection of elements. It is composed of nodes, where each node contains a value and a pointer to its child nodes.",
=======
      Trivia: "A tree is a non-linear data structure used for storing a collection of elements. It is composed of nodes, where each node contains a value and a pointer to its child nodes."
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
    },
    {
      text: "Python is a programming language.",
      options: [
        { id: 0, text: "TRUE", isCorrect: true },
        { id: 1, text: "FALSE", isCorrect: false },
<<<<<<< HEAD
      ],
      Trivia:
        "Python is a high-level, interpreted programming language used for a wide range of purposes including web development, data analysis, and artificial intelligence.",
    },
    {
=======
     ],
    Trivia: "Python is a high-level, interpreted programming language used for a wide range of purposes including web development, data analysis, and artificial intelligence.",
  },
  {
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
      text: "MySQL is a programming language.",
      options: [
        { id: 0, text: "TRUE", isCorrect: false },
        { id: 1, text: "FALSE", isCorrect: true },
<<<<<<< HEAD
      ],
      Trivia:
        "MySQL is a relational database management system, not a programming language.",
    },
    {
=======
     ],
    Trivia: "MySQL is a relational database management system, not a programming language.",
  },
  {
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
      text: "To execute a set of instructions a specified number of times is the purpose of a loop in programming.",
      options: [
        { id: 0, text: "TRUE", isCorrect: true },
        { id: 1, text: "FALSE", isCorrect: false },
<<<<<<< HEAD
      ],
      Trivia:
        "The primary purpose of a loop is to execute a set of instructions a specified number of times, making it a powerful tool for automating repetitive tasks.",
    },
  ];
=======
     ],
    Trivia: "The primary purpose of a loop is to execute a set of instructions a specified number of times, making it a powerful tool for automating repetitive tasks."
  },

]
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
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
          <h1>KNOWLEDGE CHECK</h1>
          <h2>
            {score} / {questions.length} points
          </h2>
          <h3>Good Job! Click 'RETRY' to start again.</h3>
          <button className="btnrestart" onClick={() => restartGame()}>
            RETRY
          </button>
        </div>
      ) : (
        <div className="question-card">
          {/* Current Question  */}
          <h1>TRUE or FALSE</h1>
<<<<<<< HEAD
          <h2>NOTE: Read the Trivia for more hint!</h2>
=======
          <h2>
           NOTE: Read the Trivia for more hint! 
          </h2>
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
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
<<<<<<< HEAD
          {/* Display trivia if available */}
          {questions[currentQuestion].Trivia && (
=======
           {/* Display trivia if available */}
           {questions[currentQuestion].Trivia && (
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
            <div className="trivia">
              Trivia: {questions[currentQuestion].Trivia}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App; 
>>>>>>> 68f4f716ce5f9ec0107a6880e068b0fe7095a9b9
