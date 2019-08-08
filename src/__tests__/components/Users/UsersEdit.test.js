import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../../config/enzymeConfig';
import UsersEdit, { UsersEdit as UsersEditComponent } from '../../../components/Users/UsersEdit/UsersEdit';
import store from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

let component = '';
let form = '';
let button = '';
let inputs = '';

const props = {
  permissions: {
    articles: ['read', 'create', 'edit', 'delete'],
    comments: ['read', 'create', 'edit', 'delete'],
    tags: ['read', 'create', 'edit', 'delete'],
    users: ['read', 'create', 'edit', 'delete'],
    permissions: ['read', 'create', 'edit', 'delete']
  },
  getUser: jest.fn(),
  editProfile: jest.fn()
};

describe('<UsersEdit />', () => {
  beforeEach(() => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <UsersEdit />
        </MemoryRouter>
      </Provider>);

    form = component.find('.UsersEdit form');
    button = component.find('.UsersEdit form button[type="submit"]');
    inputs = component.find('.UsersEdit form input');

    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('should update information of a given user if all inputs are correct', () => {
    const showPermissionsButton = component.find('.UsersEdit form .show-permissions');
    showPermissionsButton.simulate('click', {});

    inputs.map((input) => {
      if (input.instance().type !== 'radio' && input.instance().type !== 'checkbox') {
        input.simulate('change', {
          target: {
            name: input.instance().name,
            value: user[input.instance().name]
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

  test('displays an error if the email is already used', () => {
    const component = shallow(<UsersEditComponent {...props} />);
    component.setProps(props);

    component.setProps({ errors: { email: 'email already used' } });
    expect(component.state().errors.email).toEqual('email already used');
  });

  test('displays success message if the account was successfully updated', () => {
    const component = shallow(<UsersEditComponent {...props} />);
    component.setProps(props);

    component.setProps({ message: 'successfully created' });
    expect(component.state().message).toEqual('successfully created');
  });

  test('displays an error if the user is not connected', () => {
    const component = shallow(<UsersEditComponent {...props} />);
    component.setProps(props);

    component.setProps({ errors: { message: 'Network error' } });
    expect(component.state().errors.message).toEqual('Network error');
  });
});
