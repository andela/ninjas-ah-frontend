import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../__mocks__/store';
import { mount, shallow } from '../../../../config/enzymeConfig';
import ForgotPassword, { ForgotPassword as ForgotPasswordComponent } from '../../../components/ResetPassword/ForgotPassword';
import { sendEmail, fakeEmail } from '../../../__mocks__/user';

let inputs = '';
let button = '';
let form = '';
let component = '';

describe('ResetPassword Component', () => {
  beforeEach(() => {
    const props = { match: { params: { token: 'token' } } };
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <ForgotPassword {...props} />
        </MemoryRouter>
      </Provider>);
    form = component.find('form[title="FORGOT PASSWORD"]');
    inputs = component.find('form[title="FORGOT PASSWORD"] input');
    button = component.find('form[title="FORGOT PASSWORD"] button[type="submit"]');

    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('send email if input is correct', () => {
    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('send an email if email is provided', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: sendEmail[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('display error if email is not correct', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: fakeEmail[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('displays success message if the message was successfully sent', () => {
    const component = shallow(<ForgotPasswordComponent />);
    component.setProps({ message: 'Email sent' });
  });

  test('displays an error if the email is not sent', () => {
    const component = shallow(<ForgotPasswordComponent />);
    component.setProps({ errors: { message: 'Network error' } });
  });
});
