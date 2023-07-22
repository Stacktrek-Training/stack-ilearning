import React, { useState, useEffect } from "react";

const BinaryChallenge: React.FC = () => {
  const [decimal, setDecimal] = useState<number>(0);
  const [binaryInput, setBinaryInput] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const generateRandomDecimal = () => {
    const randomDecimal = Math.floor(Math.random() * 100) + 1;
    setDecimal(randomDecimal);
  };

  const checkBinaryInput = () => {
    const decimalToBinary = decimal.toString(2);
    if (binaryInput === decimalToBinary) {
      setScore((prevScore) => prevScore + 1);
    }
    generateRandomDecimal();
    setBinaryInput("");
  };

  useEffect(() => {
    generateRandomDecimal();
  }, []);

  return (
    <div className="binary-challenge">
      <div className="game-container">
        <h2>Convert the Decimal Number to Binary:</h2>
        <h2>{decimal}</h2>
        <input
          type="text"
          value={binaryInput}
          onChange={(e) => setBinaryInput(e.target.value)}
        />
        <button onClick={checkBinaryInput}>Submit</button>
        <h3>Score: {score}</h3>
      </div>
    </div>
  );
};

export default BinaryChallenge;
