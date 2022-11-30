import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { useAtom } from 'jotai';

import QuizLayout from '../components/quiz/QuizLayout';
import { useRouter } from '../Routing';
import { asyncGetQuizList } from '../store/quizDataAtom';
import { addQuizLogAtom } from '../store/quizDataLogAtom';

const Quiz = () => {
  const [quizList] = useAtom(asyncGetQuizList);
  const [log, setLog] = useAtom(addQuizLogAtom);
  const { push } = useRouter();
  const { id } = useParams<{ id: string }>();
  const page = Number(id!);
  const quiz = quizList ? quizList[page] : undefined;

  const selectAnswerHandler = (answer: string) => {
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
    if (page <= log.length - 1) {
      push(`/quiz/${Number(page) + 1}`);
    }
    if (page === quizList.length - 1) {
      push('/result');
    }
  };

  return (
    <Suspense fallback={<div> 퀴즈 불러오는 중...</div>}>
      {quizList && quiz && (
        <QuizLayout
          quiz={quiz}
          page={page}
          pageHandler={pageHandler}
          selectedAnswer={log[page] ? log[page].selectedAnswer : undefined}
          selectAnswerHandler={selectAnswerHandler}
        />
      )}
    </Suspense>
  );
};

export default Quiz;
