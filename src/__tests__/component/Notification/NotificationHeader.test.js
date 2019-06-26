import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import notification from '../../../__mocks__/notification';
import NotificationHeader from '../../../components/Profile/Settings/NotificationsComponent/NotificationHeader';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const mockStore = configureMockStore([thunk]);
const props = {
  notification: { alias: 'email' },
  createOne: jest.fn()
};
describe('Notification test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ notificationReducer: notification });
  });
  test('renders without an error', () => {
    const wrapper = mount(<Provider store={store}>
        <NotificationHeader store={store} {...props} />
      </Provider>);
    expect(wrapper.find('input').length).toBe(2);
  });

  it('should call toggleNotificationType', () => {
    const wrapper = mount(<Provider store={store}>
        <NotificationHeader store={store} {...props} />
      </Provider>);

    wrapper.find('input[data-test="inApp"]').simulate('change');
    expect(wrapper.find('input').length).toBe(2);
  });
});
