import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Button } from '../../../components/common';

describe('<Button />', () => {
  test('renders without crashing', () => {
    const props = { loading: true };
    const component = mount(<Button {...props} />);
    const button = component.find('button');
    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });
});
