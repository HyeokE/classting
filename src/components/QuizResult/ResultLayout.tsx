import React from 'react';

import styled from 'styled-components';

import { QuizLogWithDate } from '../../types/quiz';

type ResultLayoutProps = {
  quizLog: QuizLogWithDate;
};
const ResultLayout = ({ quizLog }: ResultLayoutProps) => {
  return <ResultLayoutContainer>result</ResultLayoutContainer>;
};
const ResultLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export default ResultLayout;
