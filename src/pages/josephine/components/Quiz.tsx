import { useContext } from "react";
import Question from "./Questions";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              <br></br>
              You've got {quizState.correctAnswersCount}/
              {quizState.questions.length}.
            </div>
            <div className="ranking">
              {quizState.correctAnswersCount >= 9 && "Excellent"}
              {quizState.correctAnswersCount >= 7 &&
                quizState.correctAnswersCount <= 8 &&
                "Good"}
              {quizState.correctAnswersCount >= 4 &&
                quizState.correctAnswersCount <= 6 &&
                "Fair"}
              {quizState.correctAnswersCount >= 1 &&
                quizState.correctAnswersCount <= 3 &&
                "Poor"}
              {quizState.correctAnswersCount === 0 && "Very Poor"}
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <h1 className="text-2xl font-bold underline">Basic Linux Command</h1>
          <br></br>
          <div className="score1">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Next question
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
