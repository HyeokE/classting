import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: 600;
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: 600;
`;
