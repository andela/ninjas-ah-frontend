import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { TextArea } from '../../../components/common';

describe('<TextArea />', () => {
  test('renders without crashing', () => {
    const component = mount(<TextArea />);
    const textarea = component.find('textarea');
    textarea.simulate('change', {});
    expect(component).toHaveLength(1);
  });

  test('renders without crashing and displays errors in the input', () => {
    const component = mount(<TextArea error="error" />);
    const textarea = component.find('textarea');
    textarea.simulate('change', {});
    expect(component).toHaveLength(1);
  });
});
