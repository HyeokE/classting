import React from 'react';

import styled, { useTheme } from 'styled-components';

import { QuizLogWithDate } from '../../types/quiz';
import { correctAnswerCounter } from '../../utils/correctAnswerCounter';
import { timeDurationCalculator } from '../../utils/timeDurationCalculator';
import Button from '../common/Button';
import DoughnutChart from '../common/DoughnutChart';
import { Paragraph, Title } from '../common/textStyle';

type ResultLayoutProps = {
  quizLog: QuizLogWithDate;
  goHomeHandler: () => void;
  goReviewHandler: () => void;
};
const ResultLayout = ({
  quizLog,
  goHomeHandler,
  goReviewHandler,
}: ResultLayoutProps) => {
  const theme = useTheme();

  const correctAnswerCount = correctAnswerCounter(quizLog);
  const incorrectAnswerCount = quizLog.quizLog.length - correctAnswerCount;

  const { hours, minutes, seconds } = timeDurationCalculator(
    quizLog.startDate!,
    quizLog.endDate!,
  );

  const data = {
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
    <>
      {quizLog.startDate && quizLog.endDate && (
        <ResultLayoutContainer>
          <HeaderWrapper>
            <Title>퀴즈 결과</Title>
            <Paragraph>맞춘 문제 {correctAnswerCount}</Paragraph>
            <Paragraph>틀린 문제 {incorrectAnswerCount}</Paragraph>
            <Paragraph>
              {hours > 0 && `${hours}시간 `}
              {minutes > 0 && `${minutes}분 `}
              {seconds > 0 && `${seconds}초 `} 걸렸어요!
            </Paragraph>
          </HeaderWrapper>
          <DoughnutChart data={data} width={300} height={300} />
          <BottomWrapper>
            <Button onClick={goReviewHandler}>오답노트 하기</Button>
            <Button onClick={goHomeHandler}>홈으로 가기</Button>
          </BottomWrapper>
        </ResultLayoutContainer>
      )}
    </>
  );
};
const ResultLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 10px;
  flex-direction: row;
`;
export default ResultLayout;
