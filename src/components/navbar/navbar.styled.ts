import styled from 'styled-components'
import Link from "next/link";

export const Navbar = styled.nav`
  width: 50%;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: white;
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
`;

export const NavItem = styled.li`
  font-family: "Segoe UI";
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;


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