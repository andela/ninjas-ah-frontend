import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount, shallow } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import BookmarkArticle from '../../../components/Articles/BookmarkArticle/BookmarkArticle';

const props = {
  article: {
    id: 1,
    title: 'Hello John Doe',
    description: 'John Doe, Mocker',
    body: 'body of the article',
    author: { username: 'prince' }
  },
  bookmark: { errors: 'bookmark errors' },
  bookmarkArticle: jest.fn()
};
const state = {
  errors: {},
  isAuth: false,
  bookmarkClicked: false
};
describe('<BookmarkArticle /> component', () => {
  const component = mount(<Provider store={store}>
      <MemoryRouter>
        <BookmarkArticle {...props} />
      </MemoryRouter>
    </Provider>);

  it('like article when clicked ', () => {});

  console.log('check if exist', component);
  // it('dislike article when clicked ', () => {
  //   dislikeArticle.simulate('click', { preventDefault: jest.fn() });
  // });
  // it('component will receive props', () => {
  //   const likesNumber = {};
  //   const dislikesNumber = {};
  //   const nextProps = {
  //     article: {
  //       likes: { number: likesNumber },
  //       dislikes: { number: dislikesNumber }
  //     }
  //   };
  //   component.setState(prevState => ({
  //     ...prevState,
  //     likesNumber,
  //     dislikesNumber
  //   }));
  //   component.instance().componentWillReceiveProps(nextProps);
  // });
  it('render without crasing', () => {
    // expect(component).toHaveLength(1);
  });
});
