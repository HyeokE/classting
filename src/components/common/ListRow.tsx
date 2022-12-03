import { ReactNode } from 'react';

import styled from 'styled-components';

interface ListRowProps {
  contents: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
}

const ListRow = ({
  contents,

  onClick,
}: ListRowProps) => {
  return <StyledLi onClick={onClick}>{contents}</StyledLi>;
};

export const StyledLi = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.grey700};
  :before {
    content: '•';
    color: ${({ theme }) => theme.colors.classting900};
    position: absolute;
    left: -20px;
    top: 0;
  }
`;
export default ListRow;
