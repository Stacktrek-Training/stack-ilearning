<<<<<<< HEAD
import { Question } from "./components/Questions";
=======

import { Question } from "./components/Questions";

import { Question } from "./contexts/quiz";

>>>>>>> 76fe7dbe981c85de78422fa51dfc9b8066bf58c2

interface ShuffledAnswer {
  sort: number;
  value: string;
}

export const shuffleAnswers = (question: Question): string[] => {
  if (!question) {
    return [];
  }

  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((a: string) => ({ sort: Math.random(), value: a }))
    .sort((a: ShuffledAnswer, b: ShuffledAnswer) => a.sort - b.sort)
    .map((a: ShuffledAnswer) => a.value);
};
