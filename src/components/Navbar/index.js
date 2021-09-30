import { FaBars } from 'react-icons/fa';

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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'> mark.</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='discover'>Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='projects'>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='signup'>Sign Up</NavLink>
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