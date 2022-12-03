import React, { PropsWithChildren } from 'react';

import styled from 'styled-components';

interface ListProps {
  className?: string;
}

const List = ({ className, children }: PropsWithChildren<ListProps>) => {
  return <StyledUl>{children}</StyledUl>;
};

const StyledUl = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  > li:not(:first-of-type) {
    margin-top: 12px;
  }
`;

export default List;
