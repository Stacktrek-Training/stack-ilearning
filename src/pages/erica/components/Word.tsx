import React from "react";

interface WordProps {
  selectedWord: string;
  correctLetters: string[];
}

const Word: React.FC<WordProps> = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
