import React from 'react';

import styled from 'styled-components';

import { replaceEntity } from '../../utils/replaceEntity';
import QuizChois, { ChoisType } from '../quiz/QuizChois';

interface QuizSectionProps {
  choisList: string[] | undefined;
  correct_answer: string;
  selectedAnswer: string | undefined;
}

const ReviewQuizSection = ({
  choisList,
  correct_answer,
  selectedAnswer,
}: QuizSectionProps) => {
  const isCorrect = (answer: string): ChoisType => {
    if (answer === correct_answer) {
      return 'correct';
    }
    if (answer === selectedAnswer) {
      if (answer !== correct_answer) {
        return 'incorrect';
      }
    }
    return 'unselected';
  };
  return (
    <StyledChoisWrapper>
      {choisList &&
        choisList.map((answer, index) => (
          <QuizChois key={index} type={isCorrect(answer)}>
            {replaceEntity(answer)}
          </QuizChois>
        ))}
    </StyledChoisWrapper>
  );
};

const StyledChoisWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-sizing: border-box;
`;

export default ReviewQuizSection;
