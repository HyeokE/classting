import React from 'react';

import { useAtom } from 'jotai';

import ResultLayout from '../components/QuizResult/ResultLayout';
import { quizResultLogAtom } from '../store/quizDataLogAtom';

const Result = () => {
  const [quizLog] = useAtom(quizResultLogAtom);
  const lastQuizLog = quizLog[quizLog.length - 1];
  return <ResultLayout quizLog={lastQuizLog} />;
};

export default Result;
