import React from 'react';

import { useAtom } from 'jotai';

import HomeLayout from '../components/home/HomeLayout';
import { useRouter } from '../Routing';
import { asyncGetQuizUsingApi } from '../store/quizDataAtom';
import { quizLogAtom } from '../store/quizDataLogAtom';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const Home = () => {
  const { push } = useRouter();
  const [, getQuizList] = useAtom(asyncGetQuizUsingApi);
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
  return (
    <LayoutContainer>
      <ContainerInner>
        <HomeLayout startQuizHandler={startQuizHandler} />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Home;
