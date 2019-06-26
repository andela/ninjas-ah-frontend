import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Img } from '../../../components/common';

describe('<Img />', () => {
  test('renders without crashing', () => {
    const component = mount(<Img />);
    expect(component).toHaveLength(1);
  });
});
