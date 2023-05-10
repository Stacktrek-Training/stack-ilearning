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

    // Set up the timer to update the time left every second
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or timeLeft reaches 0
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsGameOver(true);
    }
  }, [timeLeft]);

  const handleGuessChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPlayerGuess(event.target.value);
  };

  const handleGuessSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

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
          // Reset guesses and shuffle logos
          setGuesses([]);
          logos.sort(() => Math.random() - 0.5);
          setCurrentLogo(logos[0]);
        }
      }
    } else {
      // Show error message and prompt user to try again
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Your guess is incorrect. Please try again.",
      });
    }

    // Clear the input field
    setPlayerGuess("");
  };

  const renderGameOver = (): JSX.Element => {
    return (
      <div className="game-over">
        <h2>Congratulations!</h2>
        <p>Your final score is: {score}</p>
        <button
          onClick={resetGame}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Play Again
        </button>
      </div>
    );
  };

  const resetGame = (): void => {
    setIsGameOver(false);
    setScore(0);
    setCurrentLogo(logos[0]);
    logos.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="app">
      {isGameOver ? (
        renderGameOver()
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-8">Guess the Logo</h1>
          <img src={currentLogo.image} alt="Logo" className="logo-img" />
          <form onSubmit={handleGuessSubmit}>
            <input
              type="text"
              placeholder="Enter your guess"
              value={playerGuess}
              onChange={handleGuessChange}
              className="border-2 border-gray-400 rounded-md py-2 px-4 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Submit
            </button>
          </form>
          <p className="score">Your current score is: {score}</p>
        </>
      )}
    </div>
  );
}

export default App;
