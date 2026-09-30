import styled, { createGlobalStyle } from "styled-components";

// The gifts page is standalone and keeps its own palette, apart from the site theme.
export const GiftsGlobalStyle = createGlobalStyle`
  :root {
    --bg: #F6F1E9;
    --surface: #FFFFFF;
    --text: #2B2622;
    --muted: #776C62;
    --border: #E6DDD1;
    --accent: #B9533B;
    --accent-hover: #A04530;
    --on-accent: #FFFFFF;
    --taken: #4F6B4A;
    --taken-bg: #E7EEE3;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #1C1A18;
      --surface: #26231F;
      --text: #F1ECE4;
      --muted: #A89E93;
      --border: #3A352F;
      --accent: #E0735A;
      --accent-hover: #EA8870;
      --on-accent: #1C1A18;
      --taken: #9CC193;
      --taken-bg: #2C3529;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
  }
`;

export const Page = styled.main`
  max-width: 680px;
  margin: 0 auto;
  padding: 56px 16px 64px;
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.5;

  @media screen and (max-width: 480px) {
    padding-top: 32px;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 6px;
  color: var(--accent);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0 0 16px;
  font-family: var(--font-display), Georgia, serif;
  font-size: 44px;
  font-weight: 600;
  line-height: 1.1;

  @media screen and (max-width: 480px) {
    font-size: 34px;
  }
`;

export const Intro = styled.p`
  margin: 0 0 16px;
  color: var(--muted);
`;

export const Likes = styled.ul`
  margin: 0 0 40px;
  padding: 4px 20px;
  list-style: none;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
`;

export const Like = styled.li`
  padding: 14px 0;
  line-height: 1.6;

  & + & {
    border-top: 1px solid var(--border);
  }
`;

export const LikeLabel = styled.span`
  display: block;
  margin-bottom: 2px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const Hint = styled.p`
  margin: 0 0 32px;
  color: var(--muted);
  font-size: 15px;
`;

export const Section = styled.section`
  margin-bottom: 36px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 12px;
  font-family: var(--font-display), Georgia, serif;
  font-size: 24px;
  font-weight: 600;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.div<{ $taken: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  opacity: ${({ $taken }) => ($taken ? 0.65 : 1)};
  transition: opacity 200ms ease-in-out;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
`;

export const ItemTitle = styled.a`
  color: var(--text);
  font-weight: 600;
  text-decoration: underline 1px solid var(--border);
  text-underline-offset: 4px;
  overflow-wrap: anywhere;

  &:hover {
    text-decoration-color: var(--accent);
  }
`;

export const Note = styled.span`
  margin-top: -6px;
  color: var(--muted);
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
  padding: 9px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text);
  font: inherit;
  font-size: 15px;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: -1px;
  }
`;

export const Button = styled.button`
  padding: 9px 16px;
  border: none;
  border-radius: 8px;
  background: var(--accent);
  color: var(--on-accent);
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: var(--accent-hover);
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const Status = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
`;

export const TakenBadge = styled.span`
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--taken-bg);
  color: var(--taken);
  font-weight: 600;
`;

export const LinkButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: var(--accent);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;
`;

export const ErrorText = styled.span`
  color: var(--accent);
  font-size: 14px;
`;
