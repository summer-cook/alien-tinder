// Imports React into our test file.
import React from 'react' 
// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 
 // Imports in the component we are going to be testing. 
import Header from '../Header'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
// import { render, screen } from '@testing-library/react';
// import App from './App';
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

Enzyme.configure({ adapter: new Adapter() }) 

it('Header contains navbar', () => {
    const headerTest = shallow(<Header />)
    console.log(headerTest.find(NavbarBrand).debug())
    expect(headerTest.find('div').text()).toEqual('hotaliens')
  })