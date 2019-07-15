import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from '../../../../config/enzymeConfig';
import config from '../../../__mocks__/notification';
import Notification from '../../../components/Profile/Settings/NotificationsComponent/Notification';
import { initialState } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const props = {
  config: { alias: 'email' },
  createNotificationConfiguration: jest.fn(),
  updateNotificationConfiguration: jest.fn()
};

const store = mockStore({
  ...initialState,
  config
});

describe('Notification test', () => {
  test('renders without an error', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Notification store={store} {...props} />
        </MemoryRouter>
      </Provider>);
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('should call save', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Notification store={store} {...props} />
        </MemoryRouter>
      </Provider>);
    wrapper.find('button[id="save-notification-configuration"]').simulate('click');
    expect(wrapper.find('button[id="save-notification-configuration"]').length).toBe(1);
  });
  it('should create default configurations', () => {
    window.localStorage.setItem('token', 'token');
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Notification store={store} {...props} />
        </MemoryRouter>
      </Provider>);
    wrapper.find('button[id="save-notification-configuration"]').simulate('click');
    expect(wrapper.find('button[id="save-notification-configuration"]').length).toBe(1);
  });
});
