import React from 'react';

import styled from 'styled-components';

import { QuizLogWithDate } from '../../types/quiz';
import { dateFilter } from '../../utils/dateFilter';

type ReviewLayoutProps = {
  quizLogs: QuizLogWithDate[];
};

const ReviewLayout = ({ quizLogs }: ReviewLayoutProps) => {
  return (
    <ReviewLayoutContainer>
      {quizLogs.map((quiz) => (
        <div key={quiz.startDate}>
          <h1>{dateFilter(quiz.startDate, 'YYYY. MM .DD')}에 풀었던 문제</h1>
        </div>
      ))}
    </ReviewLayoutContainer>
  );
};

const ReviewLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export default ReviewLayout;
