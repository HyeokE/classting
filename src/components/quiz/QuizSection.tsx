import React from 'react';

import styled from 'styled-components';

import { replaceEntity } from '../../utils/replaceEntity';

import QuizChois, { ChoisType } from './QuizChois';

interface QuizSectionProps {
  choisList: string[] | undefined;
  correct_answer: string;
  selectedAnswer: string | undefined;
  setSelectedAnswer: (answer: string) => void;
}

const QuizSection = ({
  choisList,
  correct_answer,
  selectedAnswer,
  setSelectedAnswer,
}: QuizSectionProps) => {
  const checkAnswer = (
    selectedAnswer: string | undefined,
    answer: string,
  ): ChoisType => {
    // 답을 선택했을 경우
    if (selectedAnswer) {
      if (!(selectedAnswer === answer)) {
        return 'disabled';
      }
      if (selectedAnswer === correct_answer) {
        return 'correct';
      }
      if (selectedAnswer !== correct_answer) {
        return 'incorrect';
      } else {
        return 'disabled';
      }
      //답을 선택하지 않았을 경우
    } else {
      return 'unselected';
    }
  };

  return (
    <StyledChoisWrapper>
      {choisList &&
        choisList.map((answer, index) => (
          <QuizChois
            key={index}
            type={checkAnswer(selectedAnswer, answer)}
            onClick={() => setSelectedAnswer(answer)}
          >
            {replaceEntity(answer)}
          </QuizChois>
        ))}
    </StyledChoisWrapper>
  );
};

const StyledChoisWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-sizing: border-box;
`;

export default QuizSection;
