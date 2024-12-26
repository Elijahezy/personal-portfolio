import styled from "styled-components";
import Link from "next/link";

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


export const BreadCrumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
    padding: 10px;
`;

export const ProjectsPageLink = styled(Link)`
  color: ${({theme}) => theme.color.activeLink};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline 1.5px solid ${({theme}) => theme.color.activeLink};
    text-underline-offset: 6px;
  }
`;

export const Separator = styled.span`
  margin: 0 8px;
`;

export const ProjectName = styled.span`
  font-weight: 600;
`;

export const Tag = styled.span`
  background-color: ${({theme}) => theme.color.primaryLight};
  color: ${({theme}) => theme.color.pink};
  padding: 2px 3px;
  font-weight: 700;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 14px;
`;

export const KeyProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.backgroundSecondary};
    border-radius: 10px;
    margin-top: 20px;
`;

export const KeyProjectsList = styled.ul`
        list-style-type: none;
        padding: 0;
        margin-left: 50px;
`;

export const KeyProjectItem = styled.li`
    margin: 10px 0;
    
`;