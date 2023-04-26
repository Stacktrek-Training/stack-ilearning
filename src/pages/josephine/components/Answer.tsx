import React, { CSSProperties } from "react";

type Props = {
  answerText: string;
  index: number;
  onSelectAnswer: (answerText: string) => void;
  currentAnswer: string;
  correctAnswer: string;
};

const Answer: React.FC<Props> = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const isCorrectAnswer =
    currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";

  const answerStyle: CSSProperties = {
    // add styles here
  };

  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
      style={answerStyle}
    >
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
