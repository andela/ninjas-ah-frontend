import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Alert } from '../../../components/common';

describe('<Alert />', () => {
  test('renders without crashing', () => {
    const component = mount(<Alert />);
    const button = component.find('button');
    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });
});
