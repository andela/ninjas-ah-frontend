import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import URL from '../../../../__mocks__/URL';
import articles from '../../../../__mocks__/articles';
import { mockStore, initialState } from '../../../../__mocks__/store';
import { PublishedArticles as PublishedArticlesComponent } from '../../../../components/Profile/Articles/MyArticles/Published';
import { mount, shallow } from '../../../../../config/enzymeConfig';

const props = {
  errors: {},
  article: {
    title: 'Hello John Doe',
    description: 'John Doe, Mocker',
    body: 'body of the article',
    slug: 'slug-slug-slug'
  },
  message: { message: 'Published' },
  fetchOneArticle: jest.fn(),
  history: {},
  match: { params: { slug: 'slug-slug-slug' } },
  publishArticle: jest.fn(),
  unpublishArticle: jest.fn(),
  deleteArticle: jest.fn(),
  fileSelectedHandler: jest.fn(),
  createObjectURL: jest.fn(),
  getPublished: jest.fn()
};
const store = mockStore({
  ...initialState,
  articles: { articles },
  getPublished: jest.fn(true)
});
const state = {
  article: {
    title: 'Hello John Doe',
    description: 'John Doe, Mocker',
    body: JSON.stringify({
      blocks: [
        {
          key: 'cnu26',
          text: 'test componentWillReceiveProps failedtest componentWillReceiveProps failed',
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [
            { offset: 0, length: 74, style: 'color-rgb(36,41,46)' },
            { offset: 0, length: 74, style: 'bgcolor-rgb(255,255,255)' },
            { offset: 0, length: 74, style: 'fontsize-32' },
            {
              offset: 0,
              length: 74,
              style:
                'fontfamily--apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'
            }
          ],
          entityRanges: [],
          data: { 'text-align': 'start' }
        },
        {
          key: 'emuik',
          text: 'Okey',
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [
            { offset: 0, length: 4, style: 'color-rgb(36,41,46)' },
            { offset: 0, length: 4, style: 'bgcolor-rgb(255,255,255)' },
            { offset: 0, length: 4, style: 'fontsize-32' },
            {
              offset: 0,
              length: 4,
              style:
                'fontfamily--apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'
            }
          ],
          entityRanges: [],
          data: {}
        }
      ],
      entityMap: {}
    }),
    slug: 'slug-slug-slug'
  },
  message: { message: 'Published' },
  getPublished: jest.fn()
};
describe('<PublishedArticlesComponent />', () => {
  const component = shallow(<PublishedArticlesComponent {...props} />);
  it('should render a <PublishedArticlesComponent /> component ', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <PublishedArticlesComponent {...props} />
        </MemoryRouter>
      </Provider>);
  });
  it('should trigger publish ', () => {
    component.setProps({ articles });
  });
});
