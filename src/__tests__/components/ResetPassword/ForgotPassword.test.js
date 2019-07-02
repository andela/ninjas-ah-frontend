import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../__mocks__/store';
import { mount } from '../../../../config/enzymeConfig';
import ForgotPassword from '../../../components/ResetPassword/ForgotPassword';
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

  test('register user if all inputs are correct', () => {
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
});
