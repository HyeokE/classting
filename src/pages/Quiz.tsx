import React, { Suspense, useEffect, useState } from 'react';

import { useAtom } from 'jotai';

import QuizLayout from '../components/quiz/QuizLayout';
import { useRouter } from '../Routing';
import { asyncGetQuizList } from '../store/quizDataAtom';

const Quiz = () => {
  const [quizList, setQuiz] = useAtom(asyncGetQuizList);
  const [page, setPage] = useState(0);
  const { push } = useRouter();

  const pageHandler = () => {
    if (!quizList) {
      return;
    }
    if (page < quizList.length - 1) {
      setPage(page + 1);
    } else {
      push('/result');
    }
  };
  useEffect(() => {
    setQuiz();
  }, []);
  return (
    <Suspense>
      {quizList && (
        <QuizLayout quizList={quizList} page={page} pageHandler={pageHandler} />
      )}
    </Suspense>
  );
};

export default Quiz;
