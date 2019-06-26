import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
<<<<<<< HEAD
import { mount } from '../../../../config/enzymeConfig';
=======
>>>>>>> [feature 165412887] user notifications
import config from '../../../__mocks__/notification';
import NotificationHeader from '../../../components/Profile/Settings/NotificationsComponent/NotificationHeader';
import { initialState } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const props = {
  config: { alias: 'email' },
  createNotificationConfiguration: jest.fn(),
  updateNotificationConfiguration: jest.fn()
};
describe('Notification test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      ...initialState,
      config
    });
  });
  test('renders without an error', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <NotificationHeader store={store} {...props} />
        </MemoryRouter>
      </Provider>);
    expect(wrapper.find('input').length).toBe(2);
  });

  it('should call toggleNotificationType', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <NotificationHeader store={store} {...props} />
        </MemoryRouter>
      </Provider>);

    wrapper.find('input[data-test="inApp"]').simulate('change');
    expect(wrapper.find('input').length).toBe(2);
  });
});
