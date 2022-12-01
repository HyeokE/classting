import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { useAtom } from 'jotai';

import QuizLayout from '../components/quiz/QuizLayout';
import { useRouter } from '../Routing';
import { asyncGetQuizAtom } from '../store/quizDataAtom';
import {
  addEndDateAndQuizLogAtom,
  addQuizLogAtom,
} from '../store/quizDataLogAtom';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const Quiz = () => {
  return (
    <LayoutContainer>
      <Suspense fallback={<div>퀴즈 불러오는 중...</div>}>
        <ContainerInner>
          <SuspenseQuiz />
        </ContainerInner>
      </Suspense>
    </LayoutContainer>
  );
};

const SuspenseQuiz = () => {
  const [quiz] = useAtom(asyncGetQuizAtom);
  const [{ quizLog }, setLog] = useAtom(addQuizLogAtom);
  const [, addEndDateAndQuiz] = useAtom(addEndDateAndQuizLogAtom);
  const { push } = useRouter();
  const { id } = useParams<{ id: string }>();
  const page = Number(id!);

  const question = quiz ? quiz[page] : undefined;
  const selectedAnswer = quizLog[page]
    ? quizLog[page].selectedAnswer
    : undefined;

  const selectAnswerHandler = (answer: string) => {
    question &&
      setLog({
        question: question,
        selectedAnswer: answer,
      });
  };
  const endQuizHandler = () => {
    addEndDateAndQuiz();
    push('/result');
  };
  const pageHandler = () => {
    if (!question) {
      return;
    }
    if (page < 9) {
      if (quizLog.length === page + 1) {
        push(`/quiz/${Number(page) + 1}`);
      }
    } else {
      endQuizHandler();
    }
  };
  return (
    <>
      {question && quiz && (
        <QuizLayout
          question={question}
          page={page}
          pageHandler={pageHandler}
          selectedAnswer={selectedAnswer}
          selectAnswerHandler={selectAnswerHandler}
        />
      )}
    </>
  );
};

export default Quiz;
