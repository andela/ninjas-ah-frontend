import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header/Header';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without an error', () => {
  const wrapper = mount(<Header />);
  expect(wrapper.find('img').length).toBe(1);
});
