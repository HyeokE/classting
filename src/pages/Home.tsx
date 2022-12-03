import React from 'react';

import { useAtom } from 'jotai';

import HomeLayout from '../components/home/HomeLayout';
import { useRouter } from '../Routing';
import { quizLogAtom } from '../store/quizDataLogAtom';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const Home = () => {
  const { push } = useRouter();
  const [, setStartQuizLog] = useAtom(quizLogAtom);

  const startQuizHandler = () => {
    setStartQuizLog((prev) => {
      return {
        ...prev,
        startDate: new Date().toISOString(),
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
