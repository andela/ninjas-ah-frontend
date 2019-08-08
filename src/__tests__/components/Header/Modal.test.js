import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from '../../../../config/enzymeConfig';
import { unseenNotifications } from '../../../__mocks__/updateNotification';
import Modal from '../../../components/Header/Notifications/Modal/Modal';

const mockStore = configureMockStore([thunk]);
const props = {
  notification: { alias: 'email' },
  createOne: jest.fn(),
  unseenNotifications: [{ id: 5, message: 'hello', status: 'unseen' }],
  getNotification: {
    errors: '',
    message: '',
    loading: false
  },
  notifications: [
    { id: 4, message: '', status: 'seen' },
    { id: 5, message: 'hello', status: 'unseen' }
  ]
};

describe('Notification test', () => {
  let store;
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    jest.useFakeTimers();
    store = mockStore({
      notification: {
        notifications: [{ id: 4, message: '', status: 'false' }],
        unseenNotifications,
        getNotification: props.getNotification
      }
    });
  });

  it('should not call updateNotification', () => {
    const wrapper = mount(<Provider store={store}>
        <Modal store={store} {...props} />
      </Provider>);
    wrapper.find('div[role="button"]').simulate('click');
  });
  it('should not call deleteNotification', () => {
    const wrapper = mount(<Provider store={store}>
        <Modal store={store} {...props} />
      </Provider>);
    wrapper
      .find('#deleteNotification0')
      .first()
      .simulate('click');
    jest.runAllTimers();
  });
  it('should  call  markAsSeen', () => {
    const wrapper = mount(<Provider store={store}>
        <Modal store={store} {...props} />
      </Provider>);
    wrapper.find('.border').simulate('click');
  });
});
