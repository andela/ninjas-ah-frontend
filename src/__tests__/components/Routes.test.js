import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../config/enzymeConfig';
import store from '../../store';
import Routes from '../../components/Routes';
import Home from '../../components/Home';
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
