import React from 'react';

import styled, { css } from 'styled-components';

const StyledButton = styled.button<{ visible: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  background: ${({ theme }) => theme.colors.classting900};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  border: 0;
  border-radius: 20px;
  padding: 10px 30px;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.classting700};
  }
  ${({ visible }) =>
    !visible &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  visible?: boolean;
}
const Button = ({ children, visible = true, ...rest }: ButtonProps) => {
  return (
    <StyledButton {...rest} visible={visible}>
      {children}
    </StyledButton>
  );
};

export default Button;
