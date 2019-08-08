import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import ProfileEdit from '../../../components/Profile/ProfileEdit';
import store from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

let component = '';
let form = '';
const button = '';
let buttons = '';
let inputs = '';

describe('<ProfileEdit />', () => {
  beforeEach(() => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <ProfileEdit />
        </MemoryRouter>
      </Provider>);

    form = component.find('.ProfileEdit form');
    buttons = component.find('.ProfileEdit button');
    inputs = component.find('.ProfileEdit form input');

    buttons.map(btn => btn.simulate('click', {}));
    expect(component).toHaveLength(1);
  });

  test('edit profile if all inputs are correct', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: user[input.instance().name]
      }
    }));
    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('errors if some inputs are incorrect', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: 'i'
      }
    }));
    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('profile should not be updated if no input provided', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: ''
      }
    }));
    form.simulate('submit', { preventDefault: jest.fn() });
  });
});
