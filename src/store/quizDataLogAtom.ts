import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { QuizLog } from '../types/quiz';

export const quizLogAtom = atomWithStorage<QuizLog[][]>('quizLog', []);
const addQuizLogAtom = atom(null, (get, set, log: QuizLog[]) => {
  set(quizLogAtom, (prev) => {
    return [...prev, log];
  });
});
