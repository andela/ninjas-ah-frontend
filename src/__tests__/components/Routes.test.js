import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../config/enzymeConfig';
import store from '../../__mocks__/store';
import Routes from '../../components/Routes';
import Home from '../../components/Home';
import SocialMediaAuth from '../../components/SocialMediaAuth';
import Signup from '../../components/Signup';
import Profile from '../../components/Profile';
import Notification from '../../components/Profile/Settings/NotificationsComponent/Notification';
import Login from '../../components/Login';
import ForgotPassword from '../../components/ResetPassword/ForgotPassword';
import ResetPassword from '../../components/ResetPassword/ResetPassword';

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

  test('renders <Profile /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile']}>
          <Routes isAuth={true} />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });

  test('renders <Profile /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile?email=email@email.com']}>
          <Routes isAuth={true} />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });

  test('renders <Profile /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile?token=401']}>
          <Routes isAuth={true} />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });
  test('renders <Notification/> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile/settings/notifications']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Notification).length).toBe(1);
  });
  it('render Login', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Login)).toHaveLength(1);
  });
  test('renders <ForgotPassword /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/forgot-password']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(ForgotPassword)).toHaveLength(1);
  });

  test('renders <ResetPassword /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/reset-password/:token']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(ResetPassword)).toHaveLength(1);
  });
});
