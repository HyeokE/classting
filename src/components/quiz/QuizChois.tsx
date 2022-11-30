import React from 'react';

import styled, { css } from 'styled-components';

export type ChoisType = 'unselected' | 'correct' | 'incorrect' | 'disabled';
interface QuizChoisProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type: ChoisType;
}

const QuizChois = ({ children, type, onClick, ...rest }: QuizChoisProps) => {
  const isOnClickBlock = type !== 'unselected';

  return (
    <StyledChoisWrapper
      type={type}
      {...rest}
      {...(isOnClickBlock ? {} : { onClick })}
    >
      {children}
    </StyledChoisWrapper>
  );
};

const StyledChoisWrapper = styled.div<{ type: ChoisType }>`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.classting900};
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.grey900};
  display: flex;
  align-items: center;
  padding: 14px 20px;
  box-sizing: border-box;
  cursor: pointer;
  ${({ type }) =>
    type === 'correct' &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.classting900};
      border: 1px solid ${({ theme }) => theme.colors.classting900};
    `}
  ${({ type }) =>
    type === 'incorrect' &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.red400};
      border: 1px solid ${({ theme }) => theme.colors.red400};
    `}
    ${({ type }) =>
    type === 'disabled' &&
    css`
      color: ${({ theme }) => theme.colors.grey900};
      background: ${({ theme }) => theme.colors.grey400};
      border: 1px solid ${({ theme }) => theme.colors.grey400};
      cursor: not-allowed;
    `}
`;

export default QuizChois;
