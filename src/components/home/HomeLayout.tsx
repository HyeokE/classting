import React from 'react';

import styled from 'styled-components';

import Button from '../common/Button';
import List from '../common/List';
import ListRow from '../common/ListRow';
import { Paragraph, Title } from '../common/textStyle';

type HomeLayoutProps = {
  startQuizHandler: () => void;
  goReviewHandler: () => void;
};
const HomeLayout = ({ startQuizHandler, goReviewHandler }: HomeLayoutProps) => {
  return (
    <HomeLayoutContainer>
      <Title>클래스팅 프론트엔드 과제</Title>
      <HomeLayoutBody>
        <Paragraph>학생들이 시도할만한 꼼수를 차단해보았습니다.</Paragraph>
        <List>
          <ListRow contents={'url 입력으로 바로 가기'} />
          <ListRow contents={'다음으로 버튼 연타로 페이지 이동'} />
          <ListRow contents={'문제 새로고침으로 정답 재입력'} />
        </List>
      </HomeLayoutBody>
      <HomeLayoutFooter>
        <Button onClick={goReviewHandler}>오답노트</Button>
        <Button onClick={startQuizHandler}>퀴즈 풀기</Button>
      </HomeLayoutFooter>
    </HomeLayoutContainer>
  );
};

export const HomeLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const HomeLayoutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const HomeLayoutFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export default HomeLayout;
