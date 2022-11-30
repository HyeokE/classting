import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { Question, QuizLogList, QuizLogWithDate } from '../types/quiz';

// 퀴즈 리스트 로그 데이터 저장
export const quizResultLogAtom = atomWithStorage<QuizLogList>(
  'quizResultLog',
  [],
);
export const addQuizResultLogAtom = atom(null, (get, set) => {
  const currentLog = get(quizLogAtom);
  set(quizResultLogAtom, (prev) => {
    return [...prev, currentLog];
  });
  set(quizLogAtom, {
    startDate: undefined,
    endDate: undefined,
    quizLog: [],
  });
});

// 퀴즈 로그 실시간 데이터 기록
export const quizLogAtom = atomWithStorage<QuizLogWithDate>('quizLogAtom', {
  startDate: undefined,
  endDate: undefined,
  quizLog: [],
});

export const addQuizLogAtom = atom(
  (get) => get(quizLogAtom),
  (
    get,
    set,
    props: {
      question: Question;
      selectedAnswer: string;
    },
  ) => {
    const { question, selectedAnswer } = props;
    const log = get(quizLogAtom);
    if (log.quizLog.find((item) => item.question === question.question)) {
      return;
    }
    set(quizLogAtom, (prev) => {
      return {
        ...prev,
        quizLog: [...prev.quizLog, { ...question, selectedAnswer }],
      };
    });
  },
);
