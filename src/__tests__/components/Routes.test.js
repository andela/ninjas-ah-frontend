import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../config/enzymeConfig';
import store from '../../__mocks__/store';
import Routes from '../../components/Routes';
import Home from '../../components/Home';
import SocialMediaAuth from '../../components/SocialMediaAuth';
import Signup from '../../components/Signup';
import Notification from '../../components/Profile/Settings/NotificationsComponent/Notification';

describe('<Routes />', () => {
  test('renders <Home /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Home)).toHaveLength(1);
  });

  test('renders <SocialMediaAuth /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/auth']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(SocialMediaAuth)).toHaveLength(1);
  });

  test('renders <Signup /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/signup']}>
          <Routes isAuth={true} />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Signup)).toHaveLength(1);
  });

  test('renders <Notification/> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile/settings/notifications']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Notification).length).toBe(1);
  });
});
