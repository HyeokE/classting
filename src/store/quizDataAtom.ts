import { atom } from 'jotai';

import { getQuizList } from '../apis/getQuizList';
import { Quiz } from '../types/quiz';

export const quizListAtom = atom<Quiz[] | undefined>(undefined);

export const asyncGetQuizList = atom(
  (get) => get(quizListAtom),
  async (get, set) => {
    const response = await getQuizList();
    const data = response.data.results;
    await set(quizListAtom, data);
  },
);
