import React from 'react';

import styled from 'styled-components';

import { QuizLogWithDate } from '../../types/quiz';
import Button from '../common/Button';
import Notice from '../common/Notice';
import { Paragraph, Title } from '../common/textStyle';

import QuizReviewCard from './QuizReviewCard';

type ReviewLayoutProps = {
  quizLogs: QuizLogWithDate[] | undefined;
  goHomeHandler: () => void;
};

const ReviewLayout = ({ quizLogs, goHomeHandler }: ReviewLayoutProps) => {
  return (
    <ReviewLayoutContainer>
      <ReviewLayoutHeader>
        <Title>오답노트</Title>
        <Paragraph>그동안 진행했던 퀴즈 목록이에요.</Paragraph>
        <Paragraph>오답노트를 통해 다시 한번 복습해보세요!</Paragraph>
      </ReviewLayoutHeader>
      {quizLogs ? (
        <ReviewCardSection>
          {quizLogs.map((quiz) => (
            <QuizReviewCard key={quiz.startDate} quiz={quiz} />
          ))}
        </ReviewCardSection>
      ) : (
        <Notice>퀴즈 기록이 아직 없어요.</Notice>
      )}
      <ReviewLayoutFooter>
        <Button onClick={goHomeHandler}>홈으로 이동하기</Button>
      </ReviewLayoutFooter>
    </ReviewLayoutContainer>
  );
};

const ReviewLayoutContainer = styled.div`
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
const ReviewCardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
const ReviewLayoutFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default ReviewLayout;
