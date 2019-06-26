import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import HeaderUserMenu from '../../../components/Header/HeaderUserMenu/HeaderUserMenu';
import { mockStore, initialState } from '../../../__mocks__/store';
import user from '../../../__mocks__/user';
import mockWindow from '../../../__mocks__/window';

describe('<HeaderUserMenu />', () => {
  test('renders without crashing', () => {
    const store = mockStore({
      ...initialState,
      user: { profile: { ...user }, isAuth: true, errors: '' }
    });
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <HeaderUserMenu />
        </MemoryRouter>
      </Provider>);

    component.findWhere(n => n.hasClass('logout') && n.simulate('click', {}));
    expect(component).toHaveLength(1);
  });
});
