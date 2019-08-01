import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount, shallow } from '../../../config/enzymeConfig';
import Article, { Article as ArticleComponent } from '../../components/Articles/Article/Article';
import PreviewArticle from '../../components/Profile/Articles/PreviewArticle';
import EditArticle from '../../components/Profile/Articles/EditArticle';
import CreateArticle from '../../components/Profile/Articles/CreateArticle';
import store from '../../__mocks__/store';
import user from '../../__mocks__/user';
import { article, newHighlight } from '../../__mocks__/article';

const props = {
  profile: { ...user, id: 1 },
  match: { params: { slug: 'slug' } },
  fetchOneArticle: jest.fn(),
  getArticleHighlights: jest.fn(),
  getOneArticleReports: jest.fn(),
  saveReadingStats: jest.fn()
};

describe('<Article />', () => {
  test('Get one article', () => {
    const props = { match: { params: { slug: 'slug' } } };
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <Article {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });
  test('Preview one article', () => {
    const props = { match: { params: { slug: 'slug' } } };
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <PreviewArticle {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });
  test('Edit one article', () => {
    const props = { match: { params: { slug: 'slug' } } };
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <EditArticle {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });
  test('Create one article', () => {
    const props = { match: { params: { slug: 'slug' } } };
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <CreateArticle {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });

  test('Get one article', () => {
    const component = shallow(<ArticleComponent {...props} />);
    component.setProps({ ...props, article: { ...article, highlights: [newHighlight] } });
    expect(component).toHaveLength(1);
  });

  test('not display an article', () => {
    const component = shallow(<ArticleComponent {...props} />);
    expect(component).toHaveLength(1);
  });
});
