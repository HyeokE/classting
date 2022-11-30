import React from 'react';

import { useAtom } from 'jotai';

import HomeLayout from '../components/home/HomeLayout';
import { useRouter } from '../Routing';
import { asyncGetQuizList } from '../store/quizDataAtom';
import { quizLogAtom } from '../store/quizDataLogAtom';

const Home = () => {
  const { push } = useRouter();
  const [, getQuizList] = useAtom(asyncGetQuizList);
  const [, setStartQuizLog] = useAtom(quizLogAtom);

  const startQuizHandler = () => {
    getQuizList();
    setStartQuizLog((prev) => {
      return {
        ...prev,
        startDate: new Date(),
      };
    });
    push('/quiz/0');
  };
  return <HomeLayout startQuizHandler={startQuizHandler} />;
};

export default Home;
