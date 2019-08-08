import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { RadioButton } from '../../../components/common';

describe('<RadioButton />', () => {
  test('renders without crashing', () => {
    const component = mount(<RadioButton />);
    const input = component.find('input');
    input.simulate('change', {});
    expect(component).toHaveLength(1);
  });
});
