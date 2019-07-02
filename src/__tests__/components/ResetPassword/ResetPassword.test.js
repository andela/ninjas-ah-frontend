import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../__mocks__/store';
import { mount } from '../../../../config/enzymeConfig';
import ResetPassword from '../../../components/ResetPassword/ResetPassword';
import { resetPassword, mismatchedResetPassword } from '../../../__mocks__/user';

let inputs = '';
let button = '';
let form = '';
let component = '';

describe('ResetPassword Component', () => {
  beforeEach(() => {
    const props = { match: { params: { token: 'token' } } };
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <ResetPassword {...props} />
        </MemoryRouter>
      </Provider>);
    form = component.find('form[title="Choose a new password"]');
    inputs = component.find('form[title="Choose a new password"] input');
    button = component.find('form[title="Choose a new password"] button[type="submit"]');

    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('register user if all inputs are correct', () => {
    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('register user if all inputs are correct', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: mismatchedResetPassword[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('register user if all inputs are correct', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: mismatchedResetPassword[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('register user if all inputs are correct', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: resetPassword[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });
});
