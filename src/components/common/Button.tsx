import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.classting900};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 20px;
  padding: 10px 30px;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.classting700};
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
