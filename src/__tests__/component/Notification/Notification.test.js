import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import notification from '../../../__mocks__/notification';
import Notification from '../../../components/Profile/Settings/NotificationsComponent/Notification';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const mockStore = configureMockStore([thunk]);
const props = {
  notification: {
    alias: 'email'
  },
  createOne: jest.fn()
};
describe('Notification test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      notificationReducer: notification
    });
  });
  test('renders without an error', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Notification store={store} {...props} />
      </Provider>
    );
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('should call save', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Notification store={store} {...props} />
      </Provider>
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').length).toBe(1);
  });
});
