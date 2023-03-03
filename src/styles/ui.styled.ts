import styled from "styled-components";

interface UniversalProps {
    m?: string,
    p?: string,
}

export const TitleH3 = styled.h3`
  text-decoration: underline 4px solid ${({theme}) => theme.color.primary};
  text-underline-offset: 6px;
`;

export const TitleH5 = styled.h5<UniversalProps>`
  margin: ${props => props.m};
  padding: ${props => props.p};
`;

export const Text = styled.p<UniversalProps>`
  margin: ${props => props.m};
  padding: ${props => props.p};
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 33%;
  margin: 0 auto;
  color: ${({theme}) => theme.color.text};

  @media screen and (max-width: 1024px) {
    padding: 0 20%;
  }
`;
