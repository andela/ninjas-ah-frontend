import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../../config/enzymeConfig';
import UsersSearch, { UsersSearch as UsersSearchComponent } from '../../../components/Users/UsersSearch/UsersSearch';
import store from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

let component = '';

const state = {
  offset: 10,
  limit: 10
};

const props = {
  getUsers: jest.fn(() => true),
  searchUser: jest.fn(() => true)
};

describe('<UsersSearch />', () => {
  it('should render without crashing', () => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <UsersSearch />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <UsersSearchComponent {...props} />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });

  it('should search a user by ID', () => {
    const component = shallow(<UsersSearchComponent {...props} />);
    component.setProps({ ...props, loading: true });
    component.setState(state);
    const form = component.find('.UsersSearch Form');
    const input = component.find('.UsersSearch Input');

    input.simulate('change', {
      target: {
        value: 1,
        name: 'userId'
      }
    });
    form.simulate('submit', { preventDefault: jest.fn() });

    expect(component).toHaveLength(1);
  });

  it('should get all users', () => {
    const component = shallow(<UsersSearchComponent {...props} />);
    component.setProps({ ...props, loading: true });
    component.setState(state);
    const form = component.find('.UsersSearch Form');
    const input = component.find('.UsersSearch Input');

    input.simulate('change', {
      target: {
        value: null,
        name: 'userId'
      }
    });
    form.simulate('submit', { preventDefault: jest.fn() });

    expect(component).toHaveLength(1);
  });
});
