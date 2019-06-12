import React from 'react';

import IconLogo from './icons/logo';

import styled from 'styled-components';
import { theme, mixins, Nav, Ul, A } from '../style';

const HeaderContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  width: 100%;
  height: ${theme.navbarHeight};
  padding: 0px 50px;
  background-color: ${theme.colors.white};
  transition: ${theme.transition};
  z-index: 10;

  &.nav-down {
    box-shadow: 0 2px 4px ${theme.colors.transNavy};
    height: ${theme.navbarScrollHeight};
  }

  &.nav-up {
    height: ${theme.navbarScrollHeight};
    transform: translateY(-${theme.navbarScrollHeight});
  }
`;
const Navbar = Nav.extend`
  ${mixins.flexBetween};
  font-family: ${theme.fonts.SFMono};
  width: 100%;
  color: ${theme.colors.black};
  counter-reset: item 0;
  text-transform: uppercase;
`;
const Logo = styled.div`
  ${mixins.flexCenter};
`;
const LogoLink = A.extend`
  color: ${theme.colors.green};
  width: 40px;
  height: 40px;

  &:hover {
    opacity: 0.8;
  }

  svg {
    fill: none;
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;
const NavList = Ul.extend`
  display: flex;
`;
const NavListItem = styled.li`
  margin: 10px;
  position: relative;
  font-size: 15px;
  // counter-increment: item 1;

  &:before {
    // content: '0' counter(item) '.';
    text-align: right;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.xsmall};
  }
`;
const NavLink = A.extend`
  padding: 10px;
`;
const ResumeLink = A.extend`
  ${mixins.smallButton};
  padding: 10px;
  margin-left: 10px;
  padding: 10px 15px 10px;
  font-size: ${theme.fontSizes.smallish};
  &:hover,
  &:active,
  &:focus {
    color: ${theme.colors.green};
  }
`;

const Header = () => (
  <HeaderContainer>
    <Navbar>
      <Logo>
        <LogoLink to="/" target="_blank" rel="noopener">
          <IconLogo />
        </LogoLink>
      </Logo>
      <NavLinks>
        <NavList>
          <NavListItem>
            <NavLink to="#">About</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="#">Experience</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="#">Work</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="#">Contact</NavLink>
          </NavListItem>
        </NavList>
        <ResumeLink to="#" target="_blank" rel="noopener">
          Resume
        </ResumeLink>
      </NavLinks>
    </Navbar>
  </HeaderContainer>
);

export default Header;
