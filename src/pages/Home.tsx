import React, { Suspense } from 'react';

import { useAtom } from 'jotai';

import Notice from '../components/common/Notice';
import HomeLayout from '../components/home/HomeLayout';
import { useRouter } from '../Routing';
import { asyncGetQuizAtom } from '../store/quizDataAtom';
import { quizLogAtom } from '../store/quizDataLogAtom';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const Home = () => {
  return (
    <LayoutContainer>
      <Suspense fallback={<Notice>로딩 중</Notice>}>
        <ContainerInner>
          <SuspenseHome />
        </ContainerInner>
      </Suspense>
    </LayoutContainer>
  );
};

const SuspenseHome = () => {
  const { push } = useRouter();
  const [, setStartQuizLog] = useAtom(quizLogAtom);
  const [, setQuizData] = useAtom(asyncGetQuizAtom);

  const startQuizHandler = async () => {
    setQuizData();
    setStartQuizLog((prev) => {
      return {
        ...prev,
        startDate: new Date().toISOString(),
      };
    });
    push('/quiz/0');
  };
  const goReviewHandler = () => {
    push('/review');
  };
  return (
    <HomeLayout
      startQuizHandler={startQuizHandler}
      goReviewHandler={goReviewHandler}
    />
  );
};

export default Home;
