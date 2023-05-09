<<<<<<< HEAD
import { Question } from "./components/Questions";
=======
import { Question } from "./contexts/quiz";
>>>>>>> 2ce9ddd50c99476483aa9a2a7331116a96f43c72

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
