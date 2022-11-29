import { atom } from 'jotai';

import { getQuizList } from '../apis/getQuizList';

export const recruitmentAtom = atom(undefined);

export const asyncGetRecruitmentStatusAtom = atom(null, async (get, set) => {
  const response = await getQuizList();
  const data = response.data.data;
  await set(recruitmentAtom, data);
});
