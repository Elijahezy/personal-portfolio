import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 400px 0 40px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-family: "M PLUS Rounded 1c", sans-serif;
`;

export const Intro = styled.span`
  display: block;
  backdrop-filter: blur(10px);
  padding: 0.75rem;
  line-height: 24px;
  color: ${({ theme }) => theme.color.aboutText};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.aboutBackground};
`;

export const Likes = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  line-height: 22px;
`;

export const LikeLabel = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.color.pink};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.div<{ $reserved: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.aboutBackground};
  opacity: ${({ $reserved }) => ($reserved ? 0.6 : 1)};
  transition: opacity 200ms ease-in-out;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
`;

export const ItemTitle = styled.a`
  color: ${({ theme }) => theme.color.activeLink};
  font-weight: 600;
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover {
    text-decoration: underline 1.5px solid ${({ theme }) => theme.color.activeLink};
    text-underline-offset: 4px;
  }
`;

export const Price = styled.span`
  white-space: nowrap;
  font-size: 14px;
`;

export const Note = styled.span`
  font-size: 14px;
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const NameInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.primaryLight};
  background-color: transparent;
  color: ${({ theme }) => theme.color.text};
  font: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.color.text};
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.primary};
  color: #FFF;
  font: inherit;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const LinkButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: ${({ theme }) => theme.color.activeLink};
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;
`;

export const Status = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
`;
