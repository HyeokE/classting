import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { getQuizList } from '../apis/getQuizList';
import { Quiz } from '../types/quiz';

export const quizListAtom = atomWithStorage<Quiz[] | undefined>(
  'quizListAtom',
  undefined,
);

export const asyncGetQuizList = atom(
  (get) => get(quizListAtom),
  async (get, set) => {
    const response = await getQuizList();
    const data = response.data.results;
    await set(quizListAtom, data);
  },
);
