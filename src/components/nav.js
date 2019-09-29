import React, { Component } from 'react';
import Helmet from 'react-helmet';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import { throttle } from '../utils';
import { navLinks, navHeight } from '../config';

import Menu from './menu';
import { IconLogoSmall } from './icons';
import styled from 'styled-components';
import { theme, mixins, media } from '../styles';

const { colors, fontSizes, fonts } = theme;

const NavContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.white};
  transition: ${theme.transition};
  z-index: 11;

  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 2px 4px ${colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );

  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;

const Navbar = styled.nav`
  ${mixins.flexBetween};
  font-family: ${fonts.AvenirSemiBold};
  width: 100%;
  color: ${colors.black};
  // counter-reset: item 0;
  position: relative;
  z-index: 12;
`;
const Logo = styled.div`
  ${mixins.flexCenter};
`;
const LogoLink = styled(Link)`
  color: ${colors.green};
  width: 42px;
  height: 42px;
  &:hover {
    svg {
      fill: ${colors.transGreen};
    }
  }
  svg {
    fill: none;
    transition: ${theme.transition};
  }
`;
const Hamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const HamburgerInner = styled.div`
  background-color: ${colors.green};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${colors.green};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const NavList = styled.ol`
  ${mixins.flexBetween};
`;
const NavListItem = styled.li`
  color: ${colors.grey};
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.medium};
  // counter-increment: item 1;
  &:before {
    // content: '0' counter(item) '.';
    text-align: right;
    color: ${colors.green};
    font-size: ${fontSizes.small};
  }
`;
const NavLink = styled(AnchorLink)`
  ${mixins.link};
  padding: 12px 0;
`;
const ResumeLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  padding: 10px 15px 10px;
  font-size: ${fontSizes.smallish};
  &:hover,
  &:active,
  &:focus {
    color: ${colors.lightblue};
  }
`;

const DELTA = 5;

class Nav extends Component {
  state = {
    menuOpen: false,
    scrollDirection: 'none',
    lastScrollTop: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => throttle(this.handleScroll()));
    window.addEventListener('resize', () => throttle(this.handleResize()));
    window.addEventListener('keydown', e => this.handleKeydown(e));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => this.handleResize());
    window.removeEventListener('keydown', e => this.handleKeydown(e));
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleScroll = () => {
    const { menuOpen, scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  handleResize = () => {
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = e => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const { menuOpen, scrollDirection } = this.state;

    return (
      <NavContainer scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? 'blur' : ''} />
        </Helmet>
        <Navbar>
          <Logo>
            <LogoLink to="/" aria-label="Home">
              <IconLogoSmall />
            </LogoLink>
          </Logo>

          <Hamburger onClick={this.toggleMenu}>
            <HamburgerBox>
              <HamburgerInner menuOpen={menuOpen} />
            </HamburgerBox>
          </Hamburger>

          <NavLinks>
            <NavList>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <NavListItem key={i}>
                    <NavLink href={url}>{name}</NavLink>
                  </NavListItem>
                ))}
            </NavList>
            <ResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
              Resume
            </ResumeLink>
          </NavLinks>
        </Navbar>
        <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </NavContainer>
    );
  }
}

export default Nav;
