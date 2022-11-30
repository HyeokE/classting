import React from 'react';

import styled, { useTheme } from 'styled-components';

import { QuizLogWithDate } from '../../types/quiz';
import DoughnutChart from '../common/DoughnutChart';

type ResultLayoutProps = {
  quizLog: QuizLogWithDate;
};
const ResultLayout = ({ quizLog }: ResultLayoutProps) => {
  const theme = useTheme();
  const getCorrectAnswer = (quizLog: QuizLogWithDate) => {
    const correctAnswer = quizLog.quizLog.filter(
      (quiz) => quiz.correct_answer === quiz.selectedAnswer,
    );
    return correctAnswer.length;
  };
  const correctAnswerCount = getCorrectAnswer(quizLog);
  const incorrectAnswerCount = quizLog.quizLog.length - correctAnswerCount;

  const data = {
    labels: ['정답', '오답'],
    datasets: [
      {
        data: [correctAnswerCount, incorrectAnswerCount],
        backgroundColor: [theme.colors.classting, theme.colors.red300],
        borderColor: [theme.colors.classting, theme.colors.red400],
        borderWidth: 1,
      },
    ],
  };
  return (
    <ResultLayoutContainer>
      <DoughnutChart data={data} width={300} height={300} />
    </ResultLayoutContainer>
  );
};
const ResultLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export default ResultLayout;
