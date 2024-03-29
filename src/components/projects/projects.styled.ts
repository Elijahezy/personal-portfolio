import styled from 'styled-components';
import Link from "next/link";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const GridItem = styled(Link)`
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: ${({theme}) => theme.color.text};
`;

export const PictureContainer = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: 150px;
  border-radius: 8px;
`;

export const Picture = styled.img`
  width: 100%;
  height: 150px;
  transition: 300ms all ease-in-out;
  object-fit: contain;

  &:hover {
    transform: scale(1.1);
  }
`;