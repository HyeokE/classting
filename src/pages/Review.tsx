import React from 'react';

import ReviewLayout from '../components/review/ReviewLayout';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const Review = () => {
  const quizLogs = JSON.parse(localStorage.getItem('quizResultsLogAtom')!);
  return (
    <LayoutContainer>
      <ContainerInner>
        <ReviewLayout quizLogs={quizLogs} />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Review;
