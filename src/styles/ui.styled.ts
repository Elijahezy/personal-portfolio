import styled from "styled-components";

interface UniversalProps {
    m?: string,
    p?: string,
    flexDirection?: string,
    gap?: string,
    justifyContent?: string,
    alignContent?: string,
    alignItems?: string,
    justifyItems?: string,
    overflow?: string,
    fontWeight?: string,
}

export const TitleH3 = styled.h3<UniversalProps>`
  text-decoration: underline 4px solid ${({theme}) => theme.color.primary};
  text-underline-offset: 6px;
  margin: ${props => props.m};
  padding: ${props => props.p};
  font-family: 'M PLUS Rounded 1c', sans-serif;
`;

export const TitleH5 = styled.h5<UniversalProps>`
  margin: ${props => props.m};
  padding: ${props => props.p};
`;

export const Text = styled.p<UniversalProps>`
  margin: ${props => props.m};
  padding: ${props => props.p};
  font-weight: ${props => props.fontWeight};
`;

export const Container = styled.article<UniversalProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  color: ${({theme}) => theme.color.text};
  margin: ${props => props.m || '0 33%'};
  padding: ${props => props.p};
  overflow: ${props => props.overflow};
  background-color: transparent;


  @media screen and (max-width: 1200px) {
    margin: 0 20%;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 15%;
  }

  @media screen and (max-width: 768px) {
    margin: 0 5%;
  }
`;

export const FlexContainer = styled.div<UniversalProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  justify-items: ${props => props.justifyItems};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
  gap: ${props => props.gap};
  margin: ${props => props.m};
  padding: ${props => props.p};
`;

