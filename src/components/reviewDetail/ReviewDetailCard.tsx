import React, { useCallback } from 'react';

import styled from 'styled-components';

import { QuizLog } from '../../types/quiz';
import { replaceEntity } from '../../utils/replaceEntity';
import { SubTitle } from '../common/textStyle';

import ReviewQuizSection from './ReviewQuizSection';

type ReviewDetailCardProps = {
  quizLog: QuizLog;
};
const ReviewDetailCard = ({ quizLog }: ReviewDetailCardProps) => {
  const mixAnswers = useCallback(
    (incorrect_answers: string[], correct_answer: string) => {
      const answers = [...incorrect_answers, correct_answer];
      return answers.sort(() => Math.random() - 0.5);
    },
    [],
  );
  return (
    <ReviewDetailCardContainer>
      <SubTitle>{replaceEntity(quizLog.question)}</SubTitle>
      <ReviewQuizSection
        selectedAnswer={quizLog.selectedAnswer}
        choisList={mixAnswers(
          quizLog.incorrect_answers,
          quizLog.correct_answer,
        )}
        correct_answer={quizLog.correct_answer}
      />
    </ReviewDetailCardContainer>
  );
};

const ReviewDetailCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ReviewDetailCard;
