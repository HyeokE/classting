import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { quizListMock } from '../../apis/mock/quizListMock';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { replaceEntity } from '../../utils/replaceEntity';
import Button from '../common/Button';
import { Title } from '../common/textStyle';

import QuizSection from './QuizSection';

const QuizLayout = () => {
  const quiz = quizListMock[0];
  const [choisList, setChoisList] = useState<string[] | undefined>(undefined);
  const mixAnswers = (incorrect_answers: string[], correct_answer: string) => {
    const answers = [...incorrect_answers, correct_answer];
    setChoisList(answers.sort(() => Math.random() - 0.5));
  };
  useEffect(() => {
    mixAnswers(quiz.incorrect_answers, quiz.correct_answer);
  }, []);
  return (
    <LayoutContainer>
      <ContainerInner>
        <QuizLayoutContainer>
          <Title>{replaceEntity(quiz.question)}</Title>
          <QuizSection
            choisList={choisList}
            correct_answer={quiz.correct_answer}
          />
          <Button>다음 문제</Button>
        </QuizLayoutContainer>
      </ContainerInner>
    </LayoutContainer>
  );
};

const QuizLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default QuizLayout;
