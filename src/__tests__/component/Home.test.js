import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import Home from '../../components/Home';

describe('<Home />', () => {
  test('renders without crashing', () => {
    const component = shallow(<Home />);
    expect(component).toHaveLength(1);
  });
});
