import React from 'react';

import ReviewLayout from '../components/review/ReviewLayout';
import { useRouter } from '../Routing';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const Review = () => {
  const quizLogs = JSON.parse(localStorage.getItem('quizResultsLogAtom')!);
  const { push } = useRouter();
  const goHomeHandler = () => {
    push('/');
  };

  return (
    <LayoutContainer>
      <ContainerInner>
        <ReviewLayout quizLogs={quizLogs} goHomeHandler={goHomeHandler} />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Review;
