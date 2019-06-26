import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mockStore, initialState } from '../../../__mocks__/store';
import notification from '../../../__mocks__/notification';
import Notification from '../../../components/Profile/Settings/NotificationsComponent/Notification';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const props = {
  notification: { alias: 'email' },
  createOne: jest.fn()
};
const store = mockStore({
  ...initialState,
  notificationReducer: notification
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
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').length).toBe(1);
  });
});
