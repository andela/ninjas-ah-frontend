import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount, shallow } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import Bookmarks, { BookmarkArticle } from '../../../components/Bookmarks/BookmarkArticle';

const props = {
  isAuth: true,
  article: {
    id: 1,
    title: 'Hello John Doe',
    slug: 'this-is-the-slug',
    description: 'John Doe, Mocker',
    body: 'body of the article',
    author: { username: 'prince' }
  },
  bookmarkArticle: jest.fn(),
  bookmarks: 'bookmark errors'
};
const state = {
  errors: {},
  bookmarkClicked: true,
  isAuth: false
};
let component;
let button;
describe('<BookmarkArticle /> component', () => {
  beforeEach(() => {
    component = shallow(<BookmarkArticle state={state} {...props} />);
  });
  it('test handle click', () => {
    component.setProps({ isAuth: true });
    button = component.find('#bookmarkArticle').simulate('click');
  });
  it('test handle click', () => {
    component.setProps({ isAuth: false });
    button = component.find('#bookmarkArticle').simulate('click');
  });
  it('Bookmark Article', () => {
    const nextProps = {
      bookmarks: { bookmarks: 'this-is-the-bookmak' },
      article: { slug: 'this=is-the-slug' }
    };
    component.setState(prevState => ({
      ...prevState,
      bookmarks: { bookmarks: 'this-is-the-bookmak' },
      article: { slug: 'this=is-the-slug' }
    }));
    component.instance().componentWillReceiveProps(nextProps);
  });
  it('render without crashing', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Bookmarks state={state} {...props} />
        </MemoryRouter>
      </Provider>);
  });
});
