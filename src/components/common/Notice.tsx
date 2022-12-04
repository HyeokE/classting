import React from 'react';

import styled from 'styled-components';

type NoticeProps = {
  children: React.ReactNode;
};

const Notice = ({ children }: NoticeProps) => {
  return (
    <QuizLoadingContainer>
      <StyledNotice>{children}</StyledNotice>
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
const StyledNotice = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.classting700};
`;

export default Notice;
