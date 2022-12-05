import React, { Suspense, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAtom } from 'jotai';

import Notice from '../components/common/Notice';
import QuizLayout from '../components/quiz/QuizLayout';
import { useRouter } from '../Routing';
import { quizDataAtom } from '../store/quizDataAtom';
import {
  addEndDateAndQuizLogAtom,
  addQuizLogAtom,
} from '../store/quizDataLogAtom';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const Quiz = () => {
  return (
    <LayoutContainer>
      <Suspense fallback={<Notice>퀴즈를 불러오는 중이에요</Notice>}>
        <ContainerInner>
          <SuspenseQuiz />
        </ContainerInner>
      </Suspense>
    </LayoutContainer>
  );
};

const SuspenseQuiz = () => {
  const [quiz] = useAtom(quizDataAtom);
  const [{ quizLog }, setLog] = useAtom(addQuizLogAtom);
  const [, addEndDateAndQuiz] = useAtom(addEndDateAndQuizLogAtom);
  const { push } = useRouter();
  const { id } = useParams<{ id: string }>();

  const page = Number(id!);
  const question = quiz[page];

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
  const pageHandler = useCallback(() => {
    if (!question) {
      return;
    }

    if (page < quiz.length - 1) {
      if (Number(page) + 1 <= quizLog.length) {
        push(`/quiz/${Number(page) + 1}`);
      }
    }
    if (quiz.length - 1 <= page) {
      endQuizHandler();
    }
  }, [page, quizLog]);

  useEffect(() => {
    if (Number(page) > quizLog.length) {
      push(`/quiz/${quizLog.length}`);
    }
  }, []);

  return (
    <>
      {question && (
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
