import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import ProfileUserDetails from '../../../components/Profile/ProfileUserDetails';
import { mockStore, initialState } from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

describe('<ProfileUserDetails />', () => {
  test('should renders without crashing ', () => {
    const component = mount(<Provider
        store={mockStore({
          ...initialState,
          user: { ...initialState.user, profile: { ...user } }
        })}
      >
        <MemoryRouter>
          <ProfileUserDetails />
        </MemoryRouter>
      </Provider>);
    const buttons = component.find('.ProfileUserDetails button');

    buttons.map(btn => btn.simulate('click', {}));
    expect(component).toHaveLength(1);
  });
});
