import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from '../../../config/enzymeConfig';
import Bookmarks from '../../components/Bookmarks/Bookmarks';

const mockStore = configureMockStore([thunk]);
const props = {
  notification: { alias: 'email' },
  getAllBookmarks: jest.fn(),
  deleteOneBookmark: jest.fn(),
  getBookmarks: {
    errors: '',
    message: '',
    loading: false
  }
};
describe('Bookmarks test', () => {
  let store;
  beforeEach(() => {
    window.localStorage.setItem('token', 'token');
    store = mockStore({
      bookmarks: {
        bookmarks: [
          {
            article: {
              coverUrl: 'v1563886282/ninjas/vzeo74wgfmx7bmidbwis.png',
              description: 'Hello there',
              id: 7,
              readTime: 0,
              title: 'hELLLLLLO'
            },

            articleSlug: 'hellllllo-1jtjyftiiut',
            createdAt: '2019-07-17T09:48:10.005Z',
            updatedAt: '2019-07-17T09:48:10.005Z',
            userId: 1
          }
        ],
        getBookmarks: props.getBookmarks
      },
      user: {
        isAuth: true,
        profile: { image: '' }
      },
      notification: {
        notifications: [],
        unseenNotifications: [],
        getNotification: { errors: '', message: '', loading: true }
      }
    });
  });
  test('renders without an error', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Bookmarks store={store} {...props} />
        </MemoryRouter>
      </Provider>);

    expect(wrapper.find('Header').length).toBe(1);
  });

  it('should not call deleteBookmark', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Bookmarks store={store} {...props} />
        </MemoryRouter>
      </Provider>);

    wrapper.find('.danger').simulate('click');
  });
});
