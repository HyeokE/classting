import React from 'react';

import styled from 'styled-components';

import { QuizLogWithDate } from '../../types/quiz';
import { dateFilter } from '../../utils/dateFilter';
import { timeDurationCalculator } from '../../utils/timeDurationCalculator';
import Button from '../common/Button';
import { Paragraph, Title } from '../common/textStyle';

import ReviewDetailCard from './ReviewDetailCard';

type ReviewDetailLayoutProps = {
  quizLog: QuizLogWithDate;
  goHomeHandler: () => void;
  goReviewHandler: () => void;
};
const ReviewDetailLayout = ({
  quizLog,
  goReviewHandler,
  goHomeHandler,
}: ReviewDetailLayoutProps) => {
  const { hours, minutes, seconds } = timeDurationCalculator(
    quizLog.startDate!,
    quizLog.endDate!,
  );
  // 맞춘 문제 리스트
  const correctQuizList = quizLog.quizLog.filter(
    (quiz) => quiz.correct_answer === quiz.selectedAnswer,
  );
  // 틀린 문제 리스트
  const incorrectQuizList = quizLog.quizLog.filter(
    (quiz) => quiz.correct_answer !== quiz.selectedAnswer,
  );

  return (
    <ReviewDetailLayoutContainer>
      <ReviewLayoutHeader>
        <Title>
          {quizLog.startDate && dateFilter(quizLog.startDate, 'YYYY.MM.DD ')}
          퀴즈 오답
        </Title>
        <Paragraph>
          소요시간 : {hours > 0 && `${hours}시간 `}
          {minutes > 0 && `${minutes}분 `}
          {seconds > 0 && `${seconds}초 `}
        </Paragraph>
      </ReviewLayoutHeader>
      <ReviewLayoutBody>
        {incorrectQuizList.map((quiz, index) => (
          <ReviewDetailCard quizLog={quiz} key={quiz.correct_answer} />
        ))}
      </ReviewLayoutBody>
      <ReviewLayoutFooter>
        <Button onClick={goReviewHandler}>목록으로 가기</Button>
        <Button onClick={goHomeHandler}>홈으로 가기</Button>
      </ReviewLayoutFooter>
    </ReviewDetailLayoutContainer>
  );
};
const ReviewDetailLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;
const ReviewLayoutHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const ReviewLayoutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const ReviewLayoutFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`;
export default ReviewDetailLayout;
