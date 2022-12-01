import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: 600;
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  color: ${({ theme }) => theme.colors.grey800};
  font-weight: 600;
`;
export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.grey700};
  font-weight: 600;
`;
