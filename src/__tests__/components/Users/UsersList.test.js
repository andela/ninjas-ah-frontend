import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../../config/enzymeConfig';
import UsersList, { UsersList as UsersListComponent } from '../../../components/Users/UsersList/UsersList';
import store from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

let component = '';

const props = {
  deleteUser: jest.fn(),
  editProfile: jest.fn(),
  listOfUsers: [{ ...user, isActive: true }],
  maxUsersPerPage: 10
};

describe('<UsersList />', () => {
  it('should render without crashing', () => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <UsersList />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <UsersListComponent {...props} />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const component = shallow(<UsersListComponent {...{ ...props, maxUsersPerPage: 0 }} />);
    expect(component).toHaveLength(1);
  });

  it('should show a model to confirm a deletion of an account', () => {
    const component = shallow(<UsersListComponent {...props} />);
    component.setProps({ ...props, loading: true });
    const confirmModal = component.find('.UsersList ConfirmModal');
    const deleteUserButton = component.find('.UsersList [buttonClass*="delete-user-button"]');

    deleteUserButton.simulate('click', {});
    expect(component.state().deleteUserConfirmModalStyle).toEqual('block');
    confirmModal.props().onClickYes();
    confirmModal.props().onClickNo();
    expect(component.state().deleteUserConfirmModalStyle).toEqual('none');

    expect(component).toHaveLength(1);
  });

  it('should activate a user account', () => {
    const component = shallow(<UsersListComponent {...props} />);
    component.setState({ message: 'account successfully activated' });
    component.setProps({ ...props, listOfUsers: [{ ...user, isActive: false }], loading: false });
    const activateUserButton = component.find('.UsersList [buttonClass*="activate-user-button"]');
    activateUserButton.simulate('click', {});

    expect(component).toHaveLength(1);
  });
});
