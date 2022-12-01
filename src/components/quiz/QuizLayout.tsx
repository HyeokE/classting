import React, { useCallback, useEffect, useState } from 'react';

import styled from 'styled-components';

import { Question } from '../../types/quiz';
import { replaceEntity } from '../../utils/replaceEntity';
import Button from '../common/Button';
import { Title } from '../common/textStyle';

import QuizSection from './QuizSection';

type QuizLayoutProps = {
  question: Question;
  page: number;
  pageHandler: () => void;
  selectedAnswer: string | undefined;
  selectAnswerHandler: (answer: string) => void;
};
const QuizLayout = ({
  question,
  page,
  pageHandler,
  selectedAnswer,
  selectAnswerHandler,
}: QuizLayoutProps) => {
  const [choisList, setChoisList] = useState<string[] | undefined>(undefined);

  const mixAnswers = useCallback(
    (incorrect_answers: string[], correct_answer: string) => {
      const answers = [...incorrect_answers, correct_answer];
      setChoisList(answers.sort(() => Math.random() - 0.5));
    },
    [],
  );
  useEffect(() => {
    question && mixAnswers(question.incorrect_answers, question.correct_answer);
  }, [question, page]);
  return (
    <QuizLayoutContainer>
      <Title>{replaceEntity(question.question)}</Title>
      <QuizSection
        choisList={choisList}
        correct_answer={question.correct_answer}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={selectAnswerHandler}
      />
      <QuizLayoutBottom>
        <Button onClick={() => pageHandler()} visible={Boolean(selectedAnswer)}>
          다음 문제
        </Button>
      </QuizLayoutBottom>
    </QuizLayoutContainer>
  );
};

const QuizLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
`;
const QuizLayoutBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default QuizLayout;
