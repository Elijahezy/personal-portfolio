import styled from 'styled-components'
import Link from "next/link";

interface NavItemProps {
    margin?: string,
}

export const Navbar = styled.nav`
  width: 100%;
  color: ${({theme}) => theme.color.text};
  position: fixed;
  backdrop-filter: blur(10px);
  background-color: ${({theme}) => theme.color.navBackground};


  a {
    text-decoration: none;

  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  padding: 10px 0;
  gap: 15px;
  list-style: none;
  align-items: center;
  margin: 0 auto;
  width: 50%;
`;

export const NavItem = styled.li<NavItemProps>`
  font-family: "Segoe UI";
  margin: ${props => props.margin}
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: ${({theme}) => theme.color.text};
`;


export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: ${({theme}) => theme.color.text};


  span {
    font-size: 18px;
  }

  svg {
    rotate: -12deg;
    transition: 200ms linear all;
    font-size: 20px;
  }

  &: hover {
    svg {
      rotate: 0deg;

    }
  }
`;

interface ThemeSwitcherProps {
    bg: string,
}

export const ThemeSwitcher = styled.button<ThemeSwitcherProps>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${props => props.bg};
  cursor: pointer;
  margin: 0 0 0 auto;
  border: 0;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: none;
  }
`;