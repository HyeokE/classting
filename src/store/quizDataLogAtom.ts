import { atom } from 'jotai';
import { atomWithStorage, RESET } from 'jotai/utils';

import { Question, QuizLogList, QuizLogWithDate } from '../types/quiz';

// 퀴즈 로그 리스트 저장소
export const quizResultsLogAtom = atomWithStorage<QuizLogList>(
  'quizResultsLogAtom',
  [],
);

// 퀴즈 로그 저장
export const addEndDateAndQuizLogAtom = atom(null, (get, set) => {
  const currentLog = get(quizLogAtom);
  const resultsLog = get(quizResultsLogAtom);

  const result = { ...currentLog, endDate: new Date().toISOString() };

  set(quizLogAtom, { ...result });
  if (resultsLog === null || resultsLog.length === 0) {
    set(quizResultsLogAtom, [result]);
  } else {
    set(quizResultsLogAtom, (prev) => {
      return [...prev, result];
    });
  }
});

// 퀴즈 로그 실시간 데이터 저장소
export const quizLogAtom = atomWithStorage<QuizLogWithDate>('quizLogAtom', {
  startDate: undefined,
  endDate: undefined,
  quizLog: [],
});
// 실시간 퀴즈 로그 초기화
export const resetQuizLogAtom = atom(null, (get, set) => {
  set(quizLogAtom, RESET);
});

// 퀴즈 로그 실시간 데이터 기록
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
