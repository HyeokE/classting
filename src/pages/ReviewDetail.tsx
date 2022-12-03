import React from 'react';
import { useParams } from 'react-router-dom';

import ReviewDetailLayout from '../components/reviewDetail/ReviewDetailLayout';
import { useRouter } from '../Routing';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const ReviewDetail = () => {
  const quizLogs = JSON.parse(localStorage.getItem('quizResultsLogAtom')!);
  const { id } = useParams();
  const { push } = useRouter();
  const quizLog = id ? quizLogs[id] : undefined;

  const goHomeHandler = () => {
    push('/');
  };
  const goReviewHandler = () => {
    push('/review');
  };

  return (
    <LayoutContainer>
      <ContainerInner>
        {quizLog && (
          <ReviewDetailLayout
            quizLog={quizLog}
            goHomeHandler={goHomeHandler}
            goReviewHandler={goReviewHandler}
          />
        )}
      </ContainerInner>
    </LayoutContainer>
  );
};

export default ReviewDetail;
