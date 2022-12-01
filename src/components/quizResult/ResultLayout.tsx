import React from 'react';

import styled, { useTheme } from 'styled-components';

import { QuizLogWithDate } from '../../types/quiz';
import Button from '../common/Button';
import DoughnutChart from '../common/DoughnutChart';
import { SubTitle, Title } from '../common/textStyle';

type ResultLayoutProps = {
  quizLog: QuizLogWithDate;
  goHomeHandler: () => void;
};
const ResultLayout = ({ quizLog, goHomeHandler }: ResultLayoutProps) => {
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
      <Title>퀴즈 결과</Title>
      <SubTitle>정답: {correctAnswerCount}</SubTitle>
      <SubTitle>오답: {incorrectAnswerCount}</SubTitle>
      <DoughnutChart data={data} width={300} height={300} />
      <Button onClick={goHomeHandler}>홈으로 가기</Button>
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
