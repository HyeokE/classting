import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { getQuizList } from '../apis/getQuizList';
import { Question } from '../types/quiz';

import { quizResultsLogAtom } from './quizDataLogAtom';

export const quizDataAtom = atomWithStorage<Question[]>('quizData', []);
export const asyncQuizDataAtom = atom(
  async (get) => {
    get(quizResultsLogAtom);
    const res = await getQuizList();
    return res.results;
  },
  (get, set) => {
    const quizData = get(asyncQuizDataAtom);
    set(quizDataAtom, quizData);
  },
);
