import React, { useEffect } from 'react';

import { useAtom } from 'jotai';

import ResultLayout from '../components/quizResult/ResultLayout';
import { useRouter } from '../Routing';
import { quizLogAtom, resetQuizLogAtom } from '../store/quizDataLogAtom';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const Result = () => {
  const [, resetQuizLog] = useAtom(resetQuizLogAtom);

  const [quizLog] = useAtom(quizLogAtom);

  const { push } = useRouter();

  const goHomeHandler = () => {
    resetQuizLog();
    push('/');
  };
  const goReviewHandler = () => {
    resetQuizLog();
    push('/review');
  };

  const isNotEndQuiz = quizLog.quizLog.length < 10;

  useEffect(() => {
    if (isNotEndQuiz) {
      push(`/quiz/${quizLog.quizLog.length}`);
    }
  }, []);

  return (
    <LayoutContainer>
      <ContainerInner>
        {quizLog && (
          <ResultLayout
            quizLog={quizLog}
            goHomeHandler={goHomeHandler}
            goReviewHandler={goReviewHandler}
          />
        )}
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Result;
