import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from '../../../config/enzymeConfig';
import Article from '../../components/Articles/Article/Article';
import PreviewArticle from '../../components/Profile/Articles/PreviewArticle';
import EditArticle from '../../components/Profile/Articles/EditArticle';
import CreateArticle from '../../components/Profile/Articles/CreateArticle';
import store from '../../__mocks__/store';

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
});
