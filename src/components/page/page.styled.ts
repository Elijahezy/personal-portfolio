import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({theme}) => theme.color.backgroundColor};
  transition: background-color 200ms ease-in-out;
  min-height: 100vh;
`