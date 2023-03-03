import styled from 'styled-components';
import Link from "next/link";

export const GridContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin: 20px 0 0 0;


`;

export const GridItem = styled(Link)`
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: ${({theme}) => theme.color.text};
  overflow: hidden;

`;

export const Picture = styled.img`
  width: 100%;
  object-fit: contain;
  overflow: hidden;
  transition: 300ms all ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;