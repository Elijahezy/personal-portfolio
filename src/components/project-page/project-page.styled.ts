import styled from 'styled-components';
import Link from "next/link";

export const BreadCrumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
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
export const Picture = styled.img`
  width: 100%;
  object-fit: contain;
  overflow: hidden;
  margin: 30px 0 0 0;
`;

