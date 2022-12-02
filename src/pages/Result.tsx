import React from 'react';

import { useAtom } from 'jotai';

import ResultLayout from '../components/quizResult/ResultLayout';
import { useRouter } from '../Routing';
import { quizLogAtom, resetQuizLogAtom } from '../store/quizDataLogAtom';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const Result = () => {
  const [, resetQuizLog] = useAtom(resetQuizLogAtom);

  const [quizLog] = useAtom(quizLogAtom);

  const { push } = useRouter();

  // const quizLogs = JSON.parse(localStorage.getItem('quizResultsLogAtom')!);
  // const quizLog = quizLogs.pop();

  const goHomeHandler = () => {
    resetQuizLog();
    push('/');
  };

  return (
    <LayoutContainer>
      <ContainerInner>
        {quizLog && (
          <ResultLayout quizLog={quizLog} goHomeHandler={goHomeHandler} />
        )}
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Result;
