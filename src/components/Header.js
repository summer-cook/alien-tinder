import React, { useState } from 'react';
import AlienMail from '../assets/alienmail.png'
import AlienMatches from '../assets/alienmatches.png'
import AlienLogo from '../assets/alienlogo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import aliens from '../mockAlien';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  


  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md">
        <NavbarBrand href="/">
        <div className= 'alien-logo-wrapper'><img className= 'alien-logo' src= { AlienLogo }></img>
          h0taliens</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/AlienIndex/"><img className= 'alien-header-icon' src= { AlienMatches }></img> view matches</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=""><img className= 'alien-header-icon' src= { AlienMail }></img> signals fr0m 0ther beings</NavLink>
            </NavItem>
          </Nav>
            <UncontrolledDropdown>
              <DropdownToggle nav caret>
              <img className= 'alien-header-icon' src= "https://www.flaticon.com/svg/static/icons/svg/1083/1083598.svg"></img>
              </DropdownToggle>
              <DropdownMenu right className = "rightdropdown">
                <DropdownItem>
                  edit profile
                </DropdownItem>
                <DropdownItem>
                  edit lightyear range
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <a href="/AlienNew/">new profile</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;