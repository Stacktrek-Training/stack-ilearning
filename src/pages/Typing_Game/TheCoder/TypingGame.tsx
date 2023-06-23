import React, { useState, useEffect } from "react";
import "./style.css";
import logoImage from "./assets/logo.png";

const phrases = [
  "for (let i = 0; i < 1; i++) {}",
  "if (hour < 18) {greeting = Good day};",
  "const cars = [TOYOTA, Ford, BMW];",
  "let x = 25;",
  "let z = x + y;",
  "console.log('Hello World');",
  "const fruits = [Banana, Orange, Apple, Mango];",
  "while (i < 10) {}",
  "try {}catch(err) {}",
  "function myFunction(p1, p2) {}",
  "print(Hello, World!)",
  "System.out.println(Hello World);",
];

const TypingGame: React.FC = () => {
  const [phraseOrder, setPhraseOrder] = useState<number[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [bestTime, setBestTime] = useState<number | null>(null);

  useEffect(() => {
    if (isGameStarted) {
      setStartTime(Date.now());
      setElapsedTime(0);

      const interval = setInterval(() => {
        setElapsedTime(Date.now() - (startTime || 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isGameStarted, startTime]);

  useEffect(() => {
    if (!isGameStarted && elapsedTime > 0) {
      if (bestTime === null || elapsedTime < bestTime) {
        setBestTime(elapsedTime);
      }
    }
  }, [isGameStarted, elapsedTime, bestTime]);

  useEffect(() => {
    shufflePhrases();
  }, []);

  const shufflePhrases = () => {
    const shuffledOrder = [...Array(phrases.length).keys()].sort(
      () => Math.random() - 0.5
    );
    setPhraseOrder(shuffledOrder);
  };

  const startGame = () => {
    setTypedText("");
    setCurrentPhraseIndex(0);
    setIsGameStarted(true);
    shufflePhrases();
  };

  const checkInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedText = event.target.value;
    const currentPhrase = phrases[phraseOrder[currentPhraseIndex]];

    setTypedText(typedText);

    if (typedText === currentPhrase) {
      setCurrentPhraseIndex((prevIndex) => prevIndex + 1);
      setTypedText("");

      if (currentPhraseIndex >= 10) {
        setIsGameStarted(false);
      }
    }
  };

  const calculateElapsedTime = () => {
    const elapsedSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const calculateBestTime = () => {
    if (bestTime !== null) {
      const bestSeconds = Math.floor(bestTime / 1000);
      const minutes = Math.floor(bestSeconds / 60);
      const seconds = bestSeconds % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
    return "--:--";
  };

  return (
    <div className="container">
      {!isGameStarted ? (
        <div className="title-screen">
          <div className="background-box"></div>
          <div className="phrase-box">
            <h1 className="game-title">
              <span style={{ color: "#005bff" }}>The</span>{" "}
              <span style={{ color: "#f89321" }}>Coder</span>
            </h1>
            <p className="best-time">Best Time: {calculateBestTime()}</p>
            <button className="start-button" onClick={startGame}>
              Start Game
            </button>
          </div>
        </div>
      ) : (
        <div className="phrase-box">
          <div className="white-box">
            <p
              className="phrase-text"
              dangerouslySetInnerHTML={{
                __html: phrases[phraseOrder[currentPhraseIndex]],
              }}
            ></p>
            <input
              type="text"
              value={typedText}
              onChange={checkInput}
              autoFocus
              className="input-field"
              disabled={!isGameStarted}
            />
            {isGameStarted && (
              <p className="timer">Time: {calculateElapsedTime()}</p>
            )}
          </div>
        </div>
      )}
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>
    </div>
  );
};

export default TypingGame;
