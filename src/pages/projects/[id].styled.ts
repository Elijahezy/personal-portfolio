import styled from 'styled-components';
import Link from "next/link";

export const BreadCrumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectsPageLink = styled(Link)`
  color: ${({theme}) => theme.color.primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline 1.5px solid ${({theme}) => theme.color.primary};
    text-underline-offset: 6px;
  }
`;

export const Separator = styled.span`
  margin: 0 8px;

`;

export const ProjectName = styled.span`
  font-weight: 600;
`;

export const Description = styled.p`

`;

export const Tag = styled.span`
  background-color: ${({theme}) => theme.color.primary};
  padding: 2px 3px;
  font-weight: 900;
`;

