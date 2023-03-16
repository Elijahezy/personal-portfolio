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
  display: flex;
  padding: 10px 26%;
  z-index: 10;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  
  a {
    text-decoration: none;

  }

  @media screen and (max-width: 1024px) {
    padding: 10px 5%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  gap: 15px;
  list-style: none;
  align-items: center;
  margin: 0 20px;

  @media screen and (max-width: 481px) {
    display: none;
  }

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

  &:hover {
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
  border: 0;
  margin: 0 0 0 auto;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: none;
  }
`;

export const HamburgerMenu = styled.button`
  margin: 0 0 0 10px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.color.text};

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 481px) {
    display: block;
  }
`;

interface HamburgerMenuWrapperProps {
    display: boolean,
}

export const HamburgerMenuWrapper = styled.div<HamburgerMenuWrapperProps>`
  flex-direction: column;
  position: absolute;
  right: 5%;
  top: 100%;
  display: none;
  background-color: ${({theme}) => theme.color.hamburgerBackground};
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 10;


  @media screen and (max-width: 481px) {
    display: ${props => props.display ? 'flex' : 'none'};
  }
`;

export const HamburgerMenuItem = styled(Link)`
  padding: 10px 50px 10px 10px;
  color: ${({theme}) => theme.color.text};
  z-index: 10;
`;