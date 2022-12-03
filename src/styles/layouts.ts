import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 10px;
  box-sizing: border-box;
`;
