import { atom } from 'jotai';

import { getQuizList } from '../apis/getQuizList';
import { Question } from '../types/quiz';

import { quizResultsLogAtom } from './quizDataLogAtom';

export const asyncGetQuizAtom = atom<Promise<Question[]>>(async (get) => {
  // 퀴즈 전체 로그에 의존성을 가집니다.
  get(quizResultsLogAtom);
  const res = await getQuizList();
  return res.data.results;
});
