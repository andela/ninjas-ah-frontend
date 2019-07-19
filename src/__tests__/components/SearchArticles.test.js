import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount, shallow } from '../../../config/enzymeConfig';
import store from '../../__mocks__/store';
import SearchArticles from '../../components/SearchArticles/SearchArticles';
import placeholder from '../../assets/images/placeholder.png';

describe('<SearchArticles /> component', () => {
  const searchArticles = jest.fn(() => ({ artcles: [], errors: '' }));
  const props = {
    articles: [
      {
        id: 1,
        title: 'Hello John Doe',
        description: 'John Doe, Mocker',
        body: 'body of the article',
        author: { username: 'prince' },
        coverUrl: placeholder
      }
    ],
    match: { params: { slug: 'slug-slug-slug' } },
    SearchArticles: jest.fn()
  };

  const onOpenModal = jest.fn();
  const component = mount(<Provider store={store}>
      <MemoryRouter>
        <SearchArticles {...props} />
      </MemoryRouter>
    </Provider>);

  it('<SearchArticles />', () => {
    expect(component).toHaveLength(1);
  });
  it('it open advanced seach', () => {
    const search = component
      .find('input[name="searchArticle"]')
      .simulate('change', { target: { value: 'prince@gmail.com' } });
    expect(search).toHaveLength(1);
  });
  it('it open advanced seach', () => {
    component.setState({ display: true });
    const search = component
      .find('input[name="searchArticle"]')
      .simulate('change', { target: { value: 'prince@gmail.com' } });
    expect(search).toHaveLength(1);
  });
  it('it open advanced seach', () => {
    const search = component.find('Link[testID="link-test"]').simulate('click', {});
    expect(search).toHaveLength(1);
  });
  it('it open advanced search', () => {
    component
      .find('input[name="keyword"]')
      .simulate('change', { target: { name: 'keyword', value: 'prince@gmail.com' } });

    component
      .find('input[name="author"]')
      .simulate('change', { target: { name: 'author', value: 'prince@gmail.com' } });

    component
      .find('input[name="tag"]')
      .simulate('change', { target: { name: 'tag', value: 'prince@gmail.com' } });

    const search = component.find('Form[testID="seacrchForm"]');
    search.simulate('submit');
    expect(search).toHaveLength(1);
  });
  it('it open advanced search', () => {
    component
      .find('input[name="keyword"]')
      .simulate('change', { target: { name: 'keyword', value: '' } });

    component
      .find('input[name="author"]')
      .simulate('change', { target: { name: 'author', value: 'prince@gmail.com' } });

    component
      .find('input[name="tag"]')
      .simulate('change', { target: { name: 'tag', value: 'prince@gmail.com' } });

    const search = component.find('Form[testID="seacrchForm"]');
    search.simulate('submit');
    expect(search).toHaveLength(1);
  });

  it('it open advanced search', () => {
    component.setState({ keyword: '' });
    component
      .find('input[name="tag"]')
      .simulate('change', { target: { name: 'tag', value: 'prince@gmail.com' } });

    const search = component.find('Form[testID="seacrchForm"]');
    search.simulate('submit');
    expect(search).toHaveLength(1);
  });
});
