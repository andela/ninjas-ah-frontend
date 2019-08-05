import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../../config/enzymeConfig';
import UsersPagination, { UsersPagination as UsersPaginationComponent } from '../../../components/Users/UsersPagination/UsersPagination';
import store from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

let component = '';

const state = {
  offset: 10,
  limit: 10
};

const props = {
  getUsers: jest.fn(() => true),
  listOfUsers: [{ ...user, isActive: true }, { ...user, isActive: true }],
  maxUsersPerPage: 1
};

describe('<UsersPagination />', () => {
  it('should render without crashing', () => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <UsersPagination />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <UsersPaginationComponent {...props} />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const component = shallow(<UsersPaginationComponent {...props} />);
    expect(component).toHaveLength(1);
  });

  it('should paginate', () => {
    const component = shallow(<UsersPaginationComponent {...props} />);
    component.setProps({ ...props, loading: true });
    component.setState(state);
    const previousButton = component.find('.UsersPagination [buttonClass*="previous-button"]');
    const nextButton = component.find('.UsersPagination [buttonClass*="next-button"]');

    previousButton.simulate('click', {});
    nextButton.simulate('click', {});

    expect(component).toHaveLength(1);
  });
});
