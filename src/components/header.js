import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import config from '../config';
import { throttle } from '../utils';
import { IconLogoSmall, IconHamburger } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Nav, Ol, A } from '../style';

const HeaderContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${theme.colors.white};
  transition: ${theme.transition};
  z-index: 11;
  width: 100%;
  height: ${props =>
    props.scrollDirection === 'none' ? theme.headerHeight : theme.headerScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 2px 4px ${theme.colors.lightGrey}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.headerScrollHeight}` : '0px')}
  );

  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 22px;`};
`;

const Navbar = Nav.extend`
  ${mixins.flexBetween};
  font-family: ${theme.fonts.AvenirSemiBold};
  width: 100%;
  color: ${theme.colors.black};
  // counter-reset: item 0;
  // text-transform: uppercase;
`;
const Logo = styled.div`
  ${mixins.flexCenter};
`;
const LogoLink = A.extend`
  color: ${theme.colors.green};
  width: 200px;
  height: 40px;
  &:hover {
    svg {
      fill: ${theme.colors.transGreen};
    }
  }
  svg {
    fill: none;
    transition: ${theme.transition};
  }
`;
const Buns = styled.div`
  width: 80px;
  display: none;
  ${media.tablet`display: block;`};
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    user-select: none;
    &.active {
      transform: rotate(45deg);
      .top,
      .bottom {
        stroke-dashoffset: -68px;
      }
    }
    .line {
      fill: none;
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
      stroke: ${theme.colors.green};
      stroke-width: 5;
      stroke-linecap: round;
      &.top,
      &.bottom {
        stroke-dasharray: 40 121;
      }
    }
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const NavList = Ol.extend`
  display: flex;
`;
const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${theme.fontSizes.smallish};
  // counter-increment: item 1;
  &:before {
    // content: '0' counter(item) '.';
    text-align: right;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.xsmall};
  }
`;
const NavLink = styled(AnchorLink)`
  ${mixins.link};
  padding: 10px;
`;
const ResumeLink = A.extend`
  ${mixins.smallButton};
  margin-left: 10px;
  padding: 10px 15px 10px;
  font-size: ${theme.fontSizes.smallish};
  &:hover,
  &:active,
  &:focus {
    color: ${theme.colors.green};
  }
`;

const DELTA = 5;

class Header extends Component {
  state = {
    headerHeight: null,
    lastScrollTop: 0,
    scrollDirection: 'none',
    menuOpen: false,
  };

  componentDidMount() {
    this.setState({ headerHeight: this.header.offsetHeight });

    window.addEventListener('scroll', () => throttle(this.handleScroll()));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { headerHeight, lastScrollTop, menuOpen } = this.state;
    const fromTop = window.scrollY;

    if (menuOpen) {
      return;
    }

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > headerHeight) {
      // Scroll Down
      this.setState({ scrollDirection: 'down' });
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      // Scroll Up
      this.setState({ scrollDirection: 'up' });
    }

    this.setState({ lastScrollTop: fromTop });
  }

  toggleMenu() {
    document.querySelector('.ham').classList.toggle('active');

    const { menuOpen } = this.state;

    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { scrollDirection } = this.state;

    return (
      <HeaderContainer innerRef={x => (this.header = x)} scrollDirection={scrollDirection}>
        <Navbar>
          <Logo>
            <LogoLink to="/">
              <IconLogoSmall />
            </LogoLink>
          </Logo>
          <Buns onClick={this.toggleMenu}>
            <IconHamburger />
          </Buns>
          <NavLinks>
            <NavList>
              <NavListItem>
                <NavLink href="#about">About</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink href="#jobs">Experience</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink href="#projects">Work</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavListItem>
            </NavList>
            <ResumeLink href={config.resume} target="_blank" rel="nofollow noopener noreferrer">
              Resume
            </ResumeLink>
          </NavLinks>
        </Navbar>
      </HeaderContainer>
    );
  }
}

export default Header;
