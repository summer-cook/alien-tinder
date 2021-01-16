// Imports React into our test file.
import React from 'react' 
// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 
 // Imports in the component we are going to be testing. 
import AlienIndex from '../AlienIndex'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
// import { render, screen } from '@testing-library/react';
// import App from './App';

Enzyme.configure({ adapter: new Adapter() }) 

it('AlienIndex renders content', () => {
    const alienIndextest = shallow(<AlienIndex />)
    expect(alienIndextest.find('p').text()).toEqual('All the Aliens.')
  })