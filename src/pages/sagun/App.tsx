import React, { useState, useEffect } from "react";
import "./App.css";

const BinaryChallenge: React.FC = () => {
  const [decimal, setDecimal] = useState<number>(0);
  const [binaryInput, setBinaryInput] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(10);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Function to generate a random decimal number between 1 and 100
  const generateRandomDecimal = () => {
    const randomDecimal = Math.floor(Math.random() * 100) + 1;
    setDecimal(randomDecimal);
  };

  // Function to check if the binary input is correct
  const checkBinaryInput = () => {
    const decimalToBinary = decimal.toString(2);
    if (binaryInput === decimalToBinary) {
      setScore((prevScore) => prevScore + 1);
    }
    generateRandomDecimal();
    setBinaryInput("");
  };

  // Function to handle time ticking
  const handleTimerTick = () => {
    if (timeRemaining > 0) {
      setTimeRemaining((prevTime) => prevTime - 1);
    } else {
      setGameOver(true);
    }
  };

  // Effect to update the timer every second
  useEffect(() => {
    const timer = setInterval(handleTimerTick, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  // Effect to restart the game when the component mounts
  useEffect(() => {
    generateRandomDecimal();
    setTimeRemaining(120);
    setScore(0);
    setGameOver(false);
  }, []);

  return (
    <div className="binary-challenge">
      {gameOver ? (
        <h2>Game Over</h2>
      ) : (
        <>
          <h1>DECIMAL TO BINARY GAME</h1>
          <h2>Decimal to Binary: {decimal}</h2>
          <input
            type="text"
            value={binaryInput}
            onChange={(e) => setBinaryInput(e.target.value)}
          />
          <button onClick={checkBinaryInput}>Submit</button>
          <h3>Time Remaining: {timeRemaining}</h3>
          <h3>Score: {score}</h3>
        </>
      )}
    </div>
  );
};

export default BinaryChallenge;
