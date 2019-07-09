import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Settings from '../../components/Profile/Settings/Settings';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without an error', () => {
  const wrapper = shallow(<Settings />);
  expect(wrapper.find('li').length).toBe(2);
});
