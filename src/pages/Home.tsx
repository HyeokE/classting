import React, { Suspense } from 'react';

import { useAtom } from 'jotai';

import Notice from '../components/common/Notice';
import HomeLayout from '../components/home/HomeLayout';
import { useRouter } from '../Routing';
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

  const startQuizHandler = async () => {
    push('/quiz/0');
    setStartQuizLog((prev) => {
      return {
        ...prev,
        startDate: new Date().toISOString(),
      };
    });
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
