import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import terms from "./components/Data";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import "./Guess.css";
import timerSound from "./assets/timer.mp3";
import tryagainSound from "./assets/TryAgain.wav";
import congratsSound from "./assets/Congrats.mp3";

const Guess = (): JSX.Element => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timers, setTimers] = useState(terms.map(() => 20));
  const [tryAgain, setTryAgain] = useState(false);
  const [username, setUsername] = useState("");
  const timerSoundElement = useRef<HTMLAudioElement>(null);
  const tryAgainSoundElement = useRef<HTMLAudioElement>(null);
  const congratsSoundElement = useRef<HTMLAudioElement>(null);

  const handleLogout = () => {
    setGameStarted(false);
  };

  const shuffleWord = (word: string): string => {
    if (!gameStarted || gameOver) {
      const shuffled = word.split("").sort(() => Math.random() - 0.5);
      return shuffled.join("");
    }
    return word
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  };

  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAnswer(event.target.value);
  };

  const handleNextTerm = (): void => {
    const currentTerm = terms[currentTermIndex];
    if (answer.toLowerCase() === currentTerm.answer.toLowerCase()) {
      setScore((prevScore) => prevScore + 1);
    }
    setAnswer("");

    if (currentTermIndex + 1 === terms.length) {
      setGameOver(true);
    } else {
      setCurrentTermIndex((prevIndex) => prevIndex + 1);
      setTimers((prevTimers) =>
        prevTimers.map((timer, index) =>
          index === currentTermIndex ? 20 : timer
        )
      );
    }
  };

  const handleNextButtonClick = (): void => {
    if (answer.trim() === "") {
      return;
    }
    handleNextTerm();
  };

  const restartGame = (): void => {
    setCurrentTermIndex(0);
    setAnswer("");
    setScore(0);
    setGameOver(false);
    setTryAgain(false);
    setTimers(terms.map(() => 20));
  };

  const currentTerm = terms[currentTermIndex];
  const shuffledTerm = shuffleWord(currentTerm.answer);
  const scoringPercentage = Math.round((score / terms.length) * 100);
  const isPassingScore = score >= terms.length * 0.75;

  const startGame = (): void => {
    setGameStarted(true);
  };

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const countdown = setInterval(() => {
        setTimers((prevTimers) =>
          prevTimers.map((timer, index) => {
            if (index === currentTermIndex && timer === 1) {
              clearInterval(countdown);
              handleNextTerm();
            } else if (index === currentTermIndex && timer === 6) {
              if (
                timerSoundElement.current &&
                timerSoundElement.current.paused
              ) {
                timerSoundElement.current.play();
              }
            }
            return index === currentTermIndex ? timer - 1 : timer;
          })
        );
      }, 1000);

      return () => {
        clearInterval(countdown);
        if (timerSoundElement.current) {
          timerSoundElement.current.pause();
          timerSoundElement.current.currentTime = 0;
        }
      };
    }
  }, [gameStarted, gameOver, currentTermIndex]);

  useEffect(() => {
    if (isPassingScore && gameOver) {
      if (congratsSoundElement.current && congratsSoundElement.current.paused) {
        congratsSoundElement.current.play();
      }
    } else if (!isPassingScore && gameOver) {
      setTryAgain(true);
      if (tryAgainSoundElement.current && tryAgainSoundElement.current.paused) {
        tryAgainSoundElement.current.play();
      }
    }
  }, [score, gameOver, isPassingScore]);

  const scoreProgress = `${Math.round((score / terms.length) * 100)}%`;
  // const scoreDisplay = `${score}/${terms.length}`;
  const scoreProgressClassName = isPassingScore ? "bg-blue-500" : "bg-red-500";
  const scoreDisplayClassName = isPassingScore ? "" : "text-red-500";

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar
        gameStarted={gameStarted}
        handleLogout={handleLogout}
        username={username}
        restartGame={restartGame}
      />
      <div className="bg-gray-800 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center bg-gray-900 rounded-lg shadow-1g mt-x1 square-container">
          <div className="square-content text-center">
            {!gameOver && (
              <p className="text-3xl mb-8 text-white text-center pulsing-text">
                <span className="text-blue-600 font-black text-4xl border-blue-400 pb-2 font-bold mr-3">
                  GUESS THE
                </span>
                <span className="text-orange-600 font-black text-4xl border-orange-500 pb-2 font-bold">
                  WORD
                </span>
              </p>
            )}
            {!gameStarted ? (
              <div className="text-center">
                <Login startGame={startGame} setUsername={setUsername} />
              </div>
            ) : (
              <>
                {!gameOver ? (
                  <div className="flex flex-col items-center mb-4">
                    <p className="text-lg mt-x4 mb-3 text-white text-center font-bold">
                      {currentTerm.question}
                    </p>
                    <div className="border rounded py-1 px-4 mt-3 mb-1">
                      <div className="flex flex-wrap justify-center">
                        {shuffledTerm
                          .split("")
                          .map((letter: string, index: number) => (
                            <p
                              key={index}
                              className="text-4xl text-white letter-spacing-2"
                            >
                              {letter}
                            </p>
                          ))}
                      </div>
                    </div>
                    <div className="flex justify-center mb-2 mt-5">
                      <input
                        type="text"
                        value={answer}
                        onChange={handleAnswerChange}
                        className="border rounded py-2 px-3 text-center text-lg"
                        style={{ width: "200px", height: "50px" }}
                        disabled={gameOver}
                        required
                      />
                    </div>
                    <button
                      onClick={handleNextButtonClick}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-x2"
                    >
                      Submit
                    </button>
                    <p
                      className={`text-stacktrek mt-1 font-bold text-sm ${
                        timers[currentTermIndex] <= 5 &&
                        timers[currentTermIndex] > 0
                          ? "text-red-500"
                          : timers[currentTermIndex] === 5
                          ? "text-red-700"
                          : "text-orange-500"
                      }`}
                    >
                      Time Left: {timers[currentTermIndex]} seconds
                    </p>
                    <div className="flex items-center justify-center mt-5">
                      <div className="w-12 bg-gray-300 rounded-full">
                        <div
                          className={`${scoreProgressClassName} text-xs leading-none py-1 text-center text-white rounded-full`}
                        >
                          {scoreProgress}
                        </div>
                      </div>
                      {/* <p className={`text-white ml-1 font-bold text-xs ${scoreProgressClassName}`}>{scoreDisplay}</p> */}
                    </div>
                    <div className="flex items-center justify-center mt-2">
                      {isPassingScore ? (
                        <p className={`text-sm ml-2 font-bold text-green-500`}>
                          Passing. ✓{" "}
                        </p>
                      ) : (
                        <p
                          className={`text-sm ml-2 font-bold ${scoreDisplayClassName}`}
                        >
                          Not Passing.
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    {tryAgain ? (
                      <>
                        <p className="text-3xl mb-10 text-white text-center animation-bounce">
                          <span className="text-red-500 font-bold text-4xl">
                            You Didn't Pass the Quiz!
                          </span>
                        </p>
                        <p className="text-white text-center text-2xl font-bold mb-10">
                          Final Score: {score}
                        </p>
                        <p className="text-white text-center text-2xl font-bold">
                          Scoring: {scoringPercentage}%
                        </p>
                        <div className="stars-container">
                          {[...Array(score)].map((_, index) => (
                            <div key={index} className="star-animation">
                              X
                            </div>
                          ))}
                        </div>
                        <p className="text-red-500 text-center text-xl font-bold mt-10">
                          Please Try Again!
                        </p>
                        <button
                          onClick={restartGame}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5"
                        >
                          Try Again
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="text-3xl mb-10 text-white text-center animation-bounce ">
                          <span className="text-blue-600 font-bold text-4xl">
                            Congratulations!{" "}
                          </span>
                          <span className="text-orange-600 font-bold text-4xl">
                            You Passed the Quiz!
                          </span>
                        </p>
                        <p className="text-white text-center text-2xl font-bold mb-10">
                          Final Score: {score}
                        </p>
                        <p className="text-white text-center text-2xl font-bold">
                          Scoring: {scoringPercentage}%
                        </p>
                        <div className="x-container">
                          {[...Array(score)].map((_, index) => (
                            <div key={index} className="x-animation">
                              ✓
                            </div>
                          ))}
                        </div>
                        <p className="text-orange-500 text-center text-xl font-bold mt-10">
                          You're awesome!
                        </p>
                        <button
                          onClick={restartGame}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                        >
                          Restart
                        </button>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <audio ref={timerSoundElement} src={timerSound} />
      <audio ref={tryAgainSoundElement} src={tryagainSound} />
      <audio ref={congratsSoundElement} src={congratsSound} />
    </div>
  );
};

export default Guess;
