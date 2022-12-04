import { QuizLogWithDate } from '../types/quiz';

export const correctAnswerCounter = (quizLog: QuizLogWithDate) => {
  const correctAnswer = quizLog.quizLog.filter(
    (quiz) => quiz.correct_answer === quiz.selectedAnswer,
  );
  return correctAnswer.length;
};
