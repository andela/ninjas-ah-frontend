import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { CheckBox } from '../../../components/common';

describe('<CheckBox />', () => {
  test('renders without crashing', () => {
    const component = mount(<CheckBox />);
    const input = component.find('input');
    input.simulate('change', {});
    expect(component).toHaveLength(1);
  });
});
