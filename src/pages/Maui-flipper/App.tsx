import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import SingleCard from './components/SingleCard';

interface Ball {
  src: string;
  matched: boolean;
  id: number;
}

const Pokemon: Ball[] = [
  { src: "/assets/bulbasaur.jpg", matched: false, id: Math.random() },
  { src: "/assets/Charmander.jpg", matched: false, id: Math.random() },
  { src: "/assets/mewtwo.jpg", matched: false, id: Math.random() },
  { src: "/assets/pidgeot.jpg", matched: false, id: Math.random() },
  { src: "/assets/Pikachu.jpg", matched: false, id: Math.random() },
  { src: "/assets/Squirtle.png", matched: false, id: Math.random() },
];

function App() {
  const [ball, setBall] = useState<Ball[]>([]);
  const [turns, setTurns] = useState(0);
  const [pokeOne, setPokeOne] = useState<Ball | null>(null);
  const [pokeTwo, setPokeTwo] = useState<Ball | null>(null);
  const [disabled, setDisabled] = useState(false);

  // Code for shuffling cards
  const shufflePoke = () => {
    const shufflePoke: Ball[] = [...Pokemon, ...Pokemon]
      .sort(() => Math.random() - 0.5)
      .map((balls) => ({ ...balls, id: Math.random() }));

    setPokeOne(null);
    setPokeTwo(null);
    setBall(shufflePoke);
    setTurns(0);
  };

  //Handle choice
  const handleChoice = (balls: Ball) => {
    pokeOne ? setPokeTwo(balls) : setPokeOne(balls);
  };

  //compare two pokemons
  useEffect(() => {
    if (pokeOne && pokeTwo) {
      setDisabled(true);

      if (pokeOne.src === pokeTwo.src) {
        setBall((prevBall) => {
          return prevBall.map((balls) => {
            if (balls.src === pokeOne.src) {
              return { ...balls, matched: true };
            } else {
              return balls;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [pokeOne, pokeTwo]);

  // Handle choices and increase turns
  const resetTurn = () => {
    setPokeOne(null);
    setPokeTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  // Start new game automatically
  useEffect(() => {
    shufflePoke();
  }, []);

  return (
    <div className="App">
      <img className="Logo" src="/assets/Stack.jpg" alt="StackTrek Logo" />
      <div className="bg">
        <h1>StackTrek Match</h1>
        <button onClick={shufflePoke}>Play</button>
        <div className="balls-grid">
          {ball.map((balls) => (
            <SingleCard
              key={balls.id}
              balls={balls}
              handleChoice={handleChoice}
              flipped={balls === pokeOne || balls === pokeTwo || balls.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p>Turns: {turns}</p>
      </div>
    </div>
  );
}

export default App;
