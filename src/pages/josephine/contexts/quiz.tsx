import React, { createContext, useReducer, ReactNode } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

export type Question = {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};

interface State {
  questions: Question[];
  currentQuestionIndex: number;
  currentAnswer: string;
  answers: string[];
  showResults: boolean;
  correctAnswersCount: number;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  questions,
  currentQuestionIndex: 0,
  currentAnswer: "",
  answers: shuffleAnswers(questions[0]),
  showResults: false,
  correctAnswersCount: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

export const QuizContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => null,
]);

export const QuizProvider = ({ children }: Props) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
