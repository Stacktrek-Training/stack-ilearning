import React, { useEffect, useState } from "react";
import "./Card.css";
import SingleCard from "./component/SingleCard";

import cSharp from "./img/cSharp.png";
import Java1 from "./img/Java-1.png";
import Java2 from "./img/Java-2.png";
import JS1 from "./img/JS-1.png";
import JS2 from "./img/JS-2.png";
import Python1 from "./img/Python-1.png";
import Python2 from "./img/Python-2.png";
import Php1 from "./img/Php-1.png";
import SQL1 from "./img/SQL-1.png";
import SQL2 from "./img/SQL-2.png";

const cardClassName = "card-images";

const cardImages = [
  { id: 1, src: cSharp, matched: false, className: cardClassName },
  { id: 2, src: Java1, matched: false, className: cardClassName },
  { id: 3, src: JS1, matched: false, className: cardClassName },
  { id: 4, src: Python1, matched: false, className: cardClassName },
  { id: 5, src: Php1, matched: false, className: cardClassName },
  { id: 6, src: SQL1, matched: false, className: cardClassName },
];

const cardImages2 = [
  { id: 111, src: cSharp, matched: false, className: cardClassName },
  { id: 222, src: Java2, matched: false, className: cardClassName },
  { id: 333, src: JS2, matched: false, className: cardClassName },
  { id: 444, src: Python2, matched: false, className: cardClassName },
  { id: 555, src: Php1, matched: false, className: cardClassName },
  { id: 666, src: SQL2, matched: false, className: cardClassName },
];

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages2]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setTime(0);
  };

  type Card = {
    id: number;
    src: string;
    matched: boolean;
  };

  // handle a choice
  const handleChoice = (card: Card) => {
    if (!choiceOne) {
      setChoiceOne(card);
    } else if (!choiceTwo && choiceOne.id !== card.id) {
      setChoiceTwo(card);
    }
  };

  useEffect(() => {
    const matchingPairs: { [key: number]: number } = {
      1: 111,
      2: 222,
      3: 333,
      4: 444,
      5: 555,
      6: 666,
      // Add more matching pairs as needed
    };

    //handles card matching
    const handleCardMatching = () => {
      if (choiceOne && choiceTwo) {
        setDisabled(true);
        if (
          choiceOne.id === choiceTwo.id ||
          matchingPairs[choiceOne.id] === choiceTwo.id ||
          matchingPairs[choiceTwo.id] === choiceOne.id
        ) {
          setCards((prevCards) =>
            prevCards.map((card) => {
              if (card.id === choiceOne.id || card.id === choiceTwo.id) {
                return { ...card, matched: true };
              } else {
                return card;
              }
            })
          );
          resetTurn();
        } else {
          setTimeout(() => {
            resetTurn();
            setChoiceOne(null);
            setChoiceTwo(null);
          }, 1000);
        }
      }
    };

    handleCardMatching();
    const calculatedScore = totalScore(time, turns);
    setScore(calculatedScore);
  }, [choiceOne, choiceTwo, time, turns]);

  // add timer
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    if (cards.every((card) => card.matched)) {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [cards]);

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //game start
  useEffect(() => {
    shuffleCards();
  }, []);

  //calculating scores

  const totalScore = (time: number, turns: number): number => {
    const baseScore = 1000;
    const timePenalty = 2;
    const turnPenalty = 3;

    const timePenaltyTotal = time * timePenalty;
    const turnPenaltyTotal = turns * turnPenalty;

    const score = Math.max(baseScore - timePenaltyTotal - turnPenaltyTotal, 0);

    return score;
  };

  return (
    <div>
      <div>
        <div className="matching-card-body">
          <div className="matching-card-header">MATCHING CARDS</div>
          <div id="main">
            <div className="matching-card-cards">
              <div className="card-grid">
                {/* adding the shuffled cards */}
                {cards.map((card) => (
                  <SingleCard
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                    flipped={
                      card === choiceOne || card === choiceTwo || card.matched
                    }
                    disabled={disabled}
                  />
                ))}
              </div>
            </div>
            <div className="matching-card-input">
              <button className="NewGame" onClick={shuffleCards}>
                New Game
              </button>
              <p>Turns: {turns}</p>
              <p>Time: {time}</p> <br /> <br />
              <p>Score: {score}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
