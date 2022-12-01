import { atom } from 'jotai';
import { atomWithStorage, RESET } from 'jotai/utils';

import { getQuizList } from '../apis/getQuizList';
import { Question } from '../types/quiz';

export const quizListAtom = atomWithStorage<Question[] | undefined>(
  'quizListAtom',
  undefined,
);
export const resetQuizListAtom = atom(null, (get, set) => {
  set(quizListAtom, RESET);
});
export const asyncGetQuizAtom = atom(async (get) => await get(quizListAtom));

export const asyncGetQuizUsingApi = atom(null, async (get, set) => {
  const response = await getQuizList();
  const data = response.data.results;
  await set(quizListAtom, data);
});
