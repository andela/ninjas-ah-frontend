import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from '../../../../config/enzymeConfig';
import { unseenNotifications } from '../../../__mocks__/notificationUpdate';
import GetNotifications from '../../../components/Header/Notifications/GetNotifications';

const mockStore = configureMockStore([thunk]);
const props = {
  notification: { alias: 'email' },
  createOne: jest.fn(),
  unseenNotifications: [{ id: 4, message: '', status: 'seen' }],
  getNotification: {
    errors: '',
    message: '',
    loading: false
  }
};
describe('Notification test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ notification: { unseenNotifications, getNotification: props.getNotification } });
  });

  it('should not call closeModal', () => {
    const wrapper = mount(<Provider store={store}>
        <GetNotifications store={store} {...props} />
      </Provider>);
    wrapper.find('.close').simulate('click');
  });
  it('should not call displayModal', () => {
    const wrapper = mount(<Provider store={store}>
        <GetNotifications store={store} {...props} />
      </Provider>);
    wrapper.find('button').simulate('click');
  });
});
