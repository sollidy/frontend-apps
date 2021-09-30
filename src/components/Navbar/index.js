import {
  useEffect,
  useState,
} from 'react';

import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './NavbarElements';

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    }
    else { setScrollNav(false) }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    return () => {
      window.removeEventListener('scroll', changeNav)
    }
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}> mark.</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='discover'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='signup'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/detailed'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};