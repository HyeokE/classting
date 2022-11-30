import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { useAtom } from 'jotai';

import QuizLayout from '../components/quiz/QuizLayout';
import { useRouter } from '../Routing';
import { asyncGetQuizList } from '../store/quizDataAtom';
import { addQuizLogAtom, addQuizResultLogAtom } from '../store/quizDataLogAtom';

const Quiz = () => {
  const [quiz] = useAtom(asyncGetQuizList);
  const [{ quizLog }, setLog] = useAtom(addQuizLogAtom);
  const [, addEndTimeQuizLog] = useAtom(addQuizResultLogAtom);
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
  const pageHandler = () => {
    if (!question) {
      return;
    }
    if (page < 9) {
      if (quizLog.length === page + 1) {
        push(`/quiz/${Number(page) + 1}`);
      }
    } else {
      push('/result');
      addEndTimeQuizLog();
    }
  };

  return (
    <Suspense fallback={<div> 퀴즈 불러오는 중...</div>}>
      {question && quiz && (
        <QuizLayout
          question={question}
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
