import React from 'react';

import styled from 'styled-components';

import { useRouter } from '../../Routing';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import Button from '../common/Button';
import { Title } from '../common/textStyle';

const HomeLayout = () => {
  const { push } = useRouter();
  return (
    <LayoutContainer>
      <ContainerInner>
        <HomeLayoutContainer>
          <Title>클래스팅 프론트엔드 과제전형</Title>
          <Button onClick={() => push('/quiz')}>퀴즈 풀기</Button>
        </HomeLayoutContainer>
      </ContainerInner>
    </LayoutContainer>
  );
};

export const HomeLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default HomeLayout;
