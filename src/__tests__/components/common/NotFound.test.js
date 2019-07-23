import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import { NotFound } from '../../../components/common';

describe('<NotFound />', () => {
  test('renders without crashing', () => {
    const component = shallow(<NotFound message="sorry, this page doesn't exist" />);
    expect(component).toHaveLength(1);
  });
});
