import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from '../../../../config/enzymeConfig';
import notification from '../../../__mocks__/notification';
import NotificationOptions from '../../../components/Profile/Settings/NotificationsComponent/NotificationOptions';

const mockStore = configureMockStore([thunk]);
const props = {
  notification: { alias: 'email' },
  createOne: jest.fn()
};
describe('Notification test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ notification });
  });
  test('renders without an error', () => {
    const wrapper = mount(<Provider store={store}>
        <NotificationOptions store={store} {...props} />
      </Provider>);
    expect(wrapper.find('input').length).toBe(4);
  });

  it('should not call onChange', () => {
    const wrapper = mount(<Provider store={store}>
        <NotificationOptions store={store} {...props} />
      </Provider>);
    wrapper.find('input[data-test="inApp"]').simulate('change');
    expect(wrapper.find('input').length).toBe(4);
  });

  it('should call onChange', () => {
    const wrapper = mount(<Provider store={store}>
        <NotificationOptions store={store} {...props} />
      </Provider>);
    const inputs = wrapper.find('input');
    inputs.map(input => input.simulate('change', { target: { value: 'comment', checked: true } }));
    expect(wrapper.find('input').length).toBe(4);
  });
  it('should call onChange, and addOption', () => {
    const wrapper = mount(<Provider store={store}>
        <NotificationOptions store={store} {...props} />
      </Provider>);
    const inputs = wrapper.find('input');
    inputs.map(input => input.simulate('change', { target: { value: 'comment', checked: true } }));
    expect(wrapper.find('input').length).toBe(4);
  });
  it('should call onChange, and remove', () => {
    const wrapper = mount(<Provider store={store}>
        <NotificationOptions store={store} {...props} />
      </Provider>);
    const inputs = wrapper.find('input');
    inputs.map(input => input.simulate('change', { target: { value: 'comment', checked: false } }));
    expect(wrapper.find('input').length).toBe(4);
  });
});
