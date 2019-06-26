import React from 'react';
<<<<<<< HEAD
=======
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
>>>>>>> [feature 165412887] user notifications
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
<<<<<<< HEAD
import { mount } from '../../../../config/enzymeConfig';
=======
>>>>>>> [feature 165412887] user notifications
import config from '../../../__mocks__/notification';
import Notification from '../../../components/Profile/Settings/NotificationsComponent/Notification';
import { initialState } from '../../../__mocks__/store';

<<<<<<< HEAD
const mockStore = configureMockStore([thunk]);
const props = {
  config: { alias: 'email' },
=======
Enzyme.configure({ adapter: new EnzymeAdapter() });
const mockStore = configureMockStore([thunk]);
const props = {
  notification: { alias: 'email' },
>>>>>>> [feature 165412887] user notifications
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
  it('should create default configurations', () => {
    window.localStorage.setItem('token', 'token');
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Notification store={store} {...props} />
        </MemoryRouter>
      </Provider>);
    wrapper.find('button[id="save"]').simulate('click');
    expect(wrapper.find('button[id="save"]').length).toBe(1);
  });
});
