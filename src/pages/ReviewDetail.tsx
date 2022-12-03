import React from 'react';
import { useParams } from 'react-router-dom';

import ReviewDetailLayout from '../components/reviewDetail/ReviewDetailLayout';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const ReviewDetail = () => {
  const quizLogs = JSON.parse(localStorage.getItem('quizResultsLogAtom')!);
  const { id } = useParams();
  const quizLog = id ? quizLogs[id] : undefined;

  return (
    <LayoutContainer>
      <ContainerInner>
        {quizLog && <ReviewDetailLayout quizLog={quizLog} />}
      </ContainerInner>
    </LayoutContainer>
  );
};

export default ReviewDetail;
