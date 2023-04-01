import styled from 'styled-components'

export const Container = styled.div`
  height: 350px;
  width: 30%;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 50px 0 0 0;
  }

`;

