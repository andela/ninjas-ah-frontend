import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../../config/enzymeConfig';
import UsersNew, { UsersNew as UsersNewComponent } from '../../../components/Users/UsersNew/UsersNew';
import store from '../../../__mocks__/store';
import { userToRegister, mismatchedUserPassword } from '../../../__mocks__/user';

let component = '';
let form = '';
let button = '';
let inputs = '';

describe('<UsersNew />', () => {
  beforeEach(() => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <UsersNew />
        </MemoryRouter>
      </Provider>);

    form = component.find('.UsersNew form');
    button = component.find('.UsersNew form button[type="submit"]');
    inputs = component.find('.UsersNew form input');

    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('create user if all inputs are correct', () => {
    const showPermissionsButton = component.find('.UsersNew form .show-permissions');
    showPermissionsButton.simulate('click', {});

    inputs.map((input) => {
      if (input.instance().type !== 'radio' && input.instance().type !== 'checkbox') {
        input.simulate('change', {
          target: {
            name: input.instance().name,
            value: userToRegister[input.instance().name]
          }
        });
      } else {
        input.simulate('change', {
          target: {
            name: input.instance().name,
            value: input.instance().value,
            checked: true
          }
        });
      }
    });

    inputs.map((input) => {
      if (input.instance().type === 'radio' || input.instance().type === 'checkbox') {
        input.simulate('change', {
          target: {
            name: input.instance().name,
            value: input.instance().value,
            checked: false
          }
        });
      }
    });

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('display an error if passwords does not match', () => {
    inputs.map((input) => {
      if (input.instance().type !== 'radio' && input.instance().type !== 'checkbox') {
        input.simulate('change', {
          target: {
            name: input.instance().name,
            value: mismatchedUserPassword[input.instance().name]
          }
        });
      }
    });

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('displays errors if the submitted form is empty', () => {
    const component = shallow(<UsersNewComponent />);
    const form = component.find('.UsersNew Form');
    form.simulate('submit', { target: {}, preventDefault: jest.fn() });

    expect(component.state().errors).toHaveProperty('firstName');
    expect(component.state().errors).toHaveProperty('lastName');
    expect(component.state().errors).toHaveProperty('username');
    expect(component.state().errors).toHaveProperty('email');
    expect(component.state().errors).toHaveProperty('password');
    expect(component.state().errors).toHaveProperty('confirmPassword');
  });

  test('displays an error if the email is already used', () => {
    const component = shallow(<UsersNewComponent />);
    component.setProps({ errors: { email: 'email already used' } });
    expect(component.state().errors.email).toEqual('email already used');
  });

  test('displays success message if the user was successfully created', () => {
    const component = shallow(<UsersNewComponent />);
    component.setProps({ message: 'successfully created' });
    expect(component.state().message).toEqual('successfully created');
  });

  test('displays an error if the user is not connected', () => {
    const component = shallow(<UsersNewComponent />);
    component.setProps({ errors: { message: 'Network error' } });
    expect(component.state().errors.message).toEqual('Network error');
  });
});
