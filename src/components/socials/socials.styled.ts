import styled from 'styled-components';
import Link from "next/link";

export const SocialLink = styled(Link)`
  background-color: transparent;
  padding: 8px 15px;
  transition: background-color 0.1s ease-in;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  width: min-content;
  align-items: center;
  gap: 5px;

  color: ${({theme}) => theme.color.text};
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 107, 129, 0.71);
  }
`