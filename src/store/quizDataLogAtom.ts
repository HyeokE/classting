import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { Quiz, QuizLog } from '../types/quiz';

export const quizResultLogAtom = atomWithStorage<QuizLog[][]>(
  'quizResultLog',
  [],
);
export const addQuizResultLogAtom = atom(null, (get, set, log: QuizLog[]) => {
  set(quizResultLogAtom, (prev) => {
    return [...prev, log];
  });
});

export const quizLogAtom = atom<QuizLog[]>([]);

export const addQuizLogAtom = atom(
  null,
  (
    get,
    set,
    props: {
      quiz: Quiz;
      selectedAnswer: string;
    },
  ) => {
    const { quiz, selectedAnswer } = props;
    const log = get(quizLogAtom);
    if (log.find((item) => item.question === quiz.question)) {
      return;
    }
    set(quizLogAtom, (prev) => {
      return [
        ...prev,
        {
          ...quiz,
          selectedAnswer: selectedAnswer,
        },
      ];
    });
  },
);
