import React, { useState, useEffect } from "react";
import "./App.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// Import logo images
import appleLogo from "./assets/apple.jpg";
import nodeLogo from "./assets/node.jpg";
import microsoftLogo from "./assets/microsoft.jpg";
import amazonLogo from "./assets/amazon.png";
import javaLogo from "./assets/java.png";
import reactLogo from "./assets/react.jpg";
import pythonLogo from "./assets/python.png";

interface Logo {
  id: number;
  image: string;
  name: string;
}

const logos: Logo[] = [
  { id: 1, image: appleLogo, name: "Apple" },
  { id: 2, image: nodeLogo, name: "Nodejs" },
  { id: 3, image: microsoftLogo, name: "Microsoft" },
  { id: 4, image: amazonLogo, name: "Amazon" },
  { id: 5, image: javaLogo, name: "Java" },
  { id: 6, image: reactLogo, name: "Reactjs" },
  { id: 7, image: pythonLogo, name: "Python" },
];

let timer: NodeJS.Timer;

function App(): JSX.Element {
  const [currentLogo, setCurrentLogo] = useState<Logo>(logos[0]);
  const [playerGuess, setPlayerGuess] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [guesses, setGuesses] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);

  useEffect(() => {
    // Create a copy of the logos array and shuffle it
    const shuffledLogos = [...logos].sort(() => Math.random() - 0.5);

    // Set the currentLogo to be the first logo in the shuffled array
    setCurrentLogo(shuffledLogos[0]);

    // Start the timer
    startTimer();

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);
  function startTimer() {
    timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime === 0) {
          setIsGameOver(true);
          clearInterval(timer);
        }
        return newTime;
      });
    }, 1000);
  }

  const handleGuessChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPlayerGuess(event.target.value);
  };

  const handleGuessSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // clear the text box
    setPlayerGuess("");

    // Check if player's guess matches the current logo's name
    if (playerGuess.toLowerCase() === currentLogo.name.toLowerCase()) {
      // Increase score by 1 and show congratulatory message
      setScore(score + 1);
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: "You guessed the logo correctly!",
      });

      // Add current logo ID to guesses and move on to the next logo
      const nextLogoIndex =
        logos.findIndex((logo) => logo.id === currentLogo.id) + 1;
      setGuesses([...guesses, currentLogo.id]);
      if (nextLogoIndex < logos.length) {
        setCurrentLogo(logos[nextLogoIndex]);
      } else {
        // Check if all logos have been guessed
        if (guesses.length === logos.length - 1) {
          setIsGameOver(true);
        } else {
          // Reset player's guess and move on to the next logo
          setPlayerGuess("");
          const shuffledLogos = [...logos]
            .filter((logo) => !guesses.includes(logo.id))
            .sort(() => Math.random() - 0.5);
          setCurrentLogo(shuffledLogos[0]);
        }
      }
    } else {
      // Show error message if player's guess is incorrect
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your guess is incorrect. Please try again!",
      });
    }
  };

  const handlePlayAgainClick = (): void => {
    // Reset game state
    setCurrentLogo(logos[0]);
    setPlayerGuess("");
    setScore(0);
    setGuesses([]);
    setIsGameOver(false);
    setTimeLeft(60);
    startTimer();
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 mt-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Guess The Logo</h1>
            <img
              src={currentLogo.image}
              alt={currentLogo.name}
              className="mx-auto my-6 max-w-50 h-50"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="text-lg font-bold mr-2">{timeLeft}</div>
              <div className="text-gray-600">Seconds Left</div>
            </div>
            <div className="flex items-center">
              <div className="text-gray-600">Score</div>
              <div className="text-lg font-bold ml-2">{score}</div>
            </div>
            <div className="flex items-center">
              <div className="text-gray-600">Guesses remaining:</div>
              <div className="text-lg font-bold ml-2">
                {logos.length - guesses.length}
              </div>
            </div>
          </div>
          <form onSubmit={handleGuessSubmit}>
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Enter your guess"
                value={playerGuess}
                onChange={handleGuessChange}
                disabled={isGameOver}
                className="border-2 border-gray-400 rounded-lg px-4 py-2 flex-grow mr-2"
              />
              <button
                type="submit"
                disabled={isGameOver}
                className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
              >
                Guess
              </button>
            </div>
          </form>
          {isGameOver && (
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <div className="text-lg font-bold mb-2">Time's Up!</div>
              <div className="text-gray-600 mb-4">
                You scored {score} points.
              </div>
              <button
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-orange-600 transition-colors duration-300"
                onClick={handlePlayAgainClick}
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
