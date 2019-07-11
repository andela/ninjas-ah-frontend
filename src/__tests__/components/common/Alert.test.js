import React from 'react';
import { mount, shallow } from '../../../../config/enzymeConfig';
import Alert, { Alert as AlertComponent } from '../../../components/common/Alert/Alert';

describe('<Alert />', () => {
  test('renders without crashing', () => {
    const component = mount(<Alert />);
    const button = component.find('button');
    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('should display an alert message', () => {
    const component = shallow(<Alert />);
    component.setProps({ message: 'Hello' });
    expect(component.state().showAlert).toBeTruthy();
  });
});
