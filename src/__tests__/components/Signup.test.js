import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../config/enzymeConfig';
import Signup, { Signup as SignupComponent } from '../../components/Signup/Signup';
import store from '../../__mocks__/store';
import { userToRegister, mismatchedUserPassword } from '../../__mocks__/user';

let component = '';
let form = '';
let button = '';
let inputs = '';

describe('<Signup />', () => {
  beforeEach(() => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      </Provider>);

    form = component.find('form[title="REGISTER"]');
    button = component.find('form[title="REGISTER"] button[type="submit"]');
    inputs = component.find('form[title="REGISTER"] input');

    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('register user if all inputs are correct', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: userToRegister[input.instance().name]
      }
    }));

    form.simulate('submit', { target: { preventDefault: jest.fn() } });
  });

  test('display an error if passwords do not match', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: mismatchedUserPassword[input.instance().name]
      }
    }));

    form.simulate('submit', { target: { preventDefault: jest.fn() } });
  });

  test('displays errors if the submitted form is empty', () => {
    const component = shallow(<SignupComponent />);
    const form = component.find('Form[formTitle="REGISTER"]');
    form.simulate('submit', { target: {}, preventDefault: jest.fn() });

    expect(component.state().errors).toHaveProperty('firstName');
    expect(component.state().errors).toHaveProperty('lastName');
    expect(component.state().errors).toHaveProperty('username');
    expect(component.state().errors).toHaveProperty('email');
    expect(component.state().errors).toHaveProperty('password');
    expect(component.state().errors).toHaveProperty('confirmPassword');
  });

  test('displays an error if the email is already used', () => {
    const component = shallow(<SignupComponent />);
    component.setProps({ errors: { email: 'email already used' } });
    expect(component.state().errors.email).toEqual('email already used');
  });

  test('displays success message if the user was successfully registered', () => {
    const component = shallow(<SignupComponent />);
    component.setProps({ message: 'successfully registered' });
    expect(component.state().message).toEqual('successfully registered');
  });

  test('displays an error if the user is not connected', () => {
    const component = shallow(<SignupComponent />);
    component.setProps({ errors: { message: 'Network error' } });
    expect(component.state().errors.message).toEqual('Network error');
  });
});
