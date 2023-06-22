import "./index.css";
import { useEffect, useState } from "react";

const GREETING = "Color Code Exercise";
const DESCRIPTION = "FRESHEN UP! :) this is only a warm up for color codes.";

function App() {
  useEffect(() => {
    document.title = "Color Code Exercise"; // title
  }, []);

  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const getRandomColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const color = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");

    return `#${color}`;
  };

  function setButtons() {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => Math.random() - 0.5
      )
    );
  }

  useEffect(() => {
    setButtons();
  }, []);

  function handleClick(answer: string) {
    if (answer === color) {
      setIsCorrect("Correct!");
      setScore((prevScore) => prevScore + 1);
      setButtons();
    } else {
      setIsCorrect("Wrong!");
    }
  }

  return (
    <div className="container">
      <div className="score">SCORE: {score}</div>{" "}
      <h1 className="greeting">{GREETING}</h1>
      <h2 className="description">{DESCRIPTION}</h2>
      <div className="colorContainer" style={{ background: color }}></div>
      <div className="btnContainer">
        {answers.map((answer, id) => (
          <button key={id} onClick={() => handleClick(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <span
        className={
          isCorrect ? (isCorrect === "Correct!" ? "correct" : "wrong") : ""
        }
      >
        {isCorrect}
      </span>
    </div>
  );
}

export default App;
