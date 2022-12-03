import React from 'react';

import styled from 'styled-components';

import { QuizLogWithDate } from '../../types/quiz';
import { correctAnswerCounter } from '../../utils/correctAnswerCounter';
import { dateFilter } from '../../utils/dateFilter';
import { Paragraph } from '../common/textStyle';

type ReviewCardProps = {
  quiz: QuizLogWithDate;
};

const QuizReviewCard = ({ quiz }: ReviewCardProps) => {
  const correctAnswerCount = correctAnswerCounter(quiz);
  const quizCount = quiz.quizLog.length;
  return (
    <ReviewCardContainer>
      <ReviewCardHeader>
        {quiz.startDate &&
          dateFilter(quiz.startDate, 'YYYY. MM. DD - HH시 mm분')}
        에 진행한 퀴즈
      </ReviewCardHeader>
      <ReviewCardBody>
        <Paragraph>
          {quizCount}/{correctAnswerCount}
        </Paragraph>
      </ReviewCardBody>
    </ReviewCardContainer>
  );
};

const ReviewCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 10px;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.grey100};
  }
`;
const ReviewCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: 700;
`;
const ReviewCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default QuizReviewCard;
