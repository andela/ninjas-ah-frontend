import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount, shallow } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import LikeArticle, { LikeArticle as LikeArticleComponent } from '../../../components/Articles/LikeArticle/LikeArticle';

const props = {
  article: {
    id: 1,
    title: 'Hello John Doe',
    description: 'John Doe, Mocker',
    body: 'body of the article',
    author: { username: 'prince' }
  },
  getArticleLikes: jest.fn(),
  likes: {},
  dislike: {},
  likeArticle: jest.fn(),
  dislikeArticle: jest.fn(),
  likeErrors: {},
  likeMessage: {},
  match: { params: { slug: 'slug-slug-slug' } },
  articles: jest.fn()
};
const state = {
  likesNumber: 0,
  dislikesNumber: 0,
  likeClicked: false,
  errors: {},
  message: ''
};
let component;
let likeArticle;
let dislikeArticle;
let wrapper;

describe('<SearchArticles /> component', () => {
  beforeEach(() => {
    component = shallow(<LikeArticleComponent {...props} />);
    component.setState(state);
    likeArticle = component.find('.like');
    dislikeArticle = component.find('.dislike');
  });

  it('like article when clicked ', () => {
    likeArticle.simulate('click', { target: { name: 'like' }, preventDefault: jest.fn() });
  });
  it('dislike article when clicked ', () => {
    dislikeArticle.simulate('click', { target: { name: 'dislike' }, preventDefault: jest.fn() });
  });
  it('component will receive props', () => {
    const likesNumber = {};
    const dislikesNumber = {};
    const nextProps = {
      article: {
        likes: { number: likesNumber },
        dislikes: { number: dislikesNumber }
      }
    };
    component.setState(prevState => ({
      ...prevState,
      likesNumber,
      dislikesNumber
    }));
    component.instance().componentWillReceiveProps(nextProps);
  });
  it('render without crasing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <LikeArticle />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });
});
