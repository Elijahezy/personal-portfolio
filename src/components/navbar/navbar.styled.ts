import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 50%;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  padding: 10px 0;
`;

export const NavItem = styled.li``;

export const Logo = styled.li`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;

  svg {
    rotate: -12deg;
    transition: 200ms linear all;
  }

  &:hover {
    svg {
      rotate: 0deg;

    }
  }
`;