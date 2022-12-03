import React from 'react';

import styled from 'styled-components';

const QuizLoading = () => {
  return (
    <QuizLoadingContainer>
      <Notice>퀴즈 불러오는 중...</Notice>
    </QuizLoadingContainer>
  );
};

const QuizLoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Notice = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.classting};
`;

export default QuizLoading;
