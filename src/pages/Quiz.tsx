import React, { Suspense, useEffect, useState } from 'react';

import { useAtom } from 'jotai';

import QuizLayout from '../components/quiz/QuizLayout';
import { useRouter } from '../Routing';
import { asyncGetQuizList } from '../store/quizDataAtom';
import { addQuizLogAtom } from '../store/quizDataLogAtom';

const Quiz = () => {
  const [page, setPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(
    undefined,
  );
  const [quizList] = useAtom(asyncGetQuizList);
  const [, setLog] = useAtom(addQuizLogAtom);
  const { push } = useRouter();
  const quiz = quizList ? quizList[page] : undefined;

  const selectAnswerHandler = (answer: string) => {
    setSelectedAnswer(answer);
    quiz &&
      setLog({
        quiz: quiz,
        selectedAnswer: answer,
      });
  };
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
    setSelectedAnswer(undefined);
  }, [page]);

  return (
    <Suspense fallback={<div> 퀴즈 불러오는 중...</div>}>
      {quizList && quiz && (
        <QuizLayout
          quiz={quiz}
          page={page}
          pageHandler={pageHandler}
          selectedAnswer={selectedAnswer}
          selectAnswerHandler={selectAnswerHandler}
        />
      )}
    </Suspense>
  );
};

export default Quiz;
