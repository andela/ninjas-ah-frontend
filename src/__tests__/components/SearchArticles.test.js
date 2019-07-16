import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount, shallow } from '../../../config/enzymeConfig';
import store from '../../__mocks__/store';
import SearchArticles from '../../components/SearchArticles/SearchArticles';

describe('<SearchArticles /> component', () => {
  const searchArticles = jest.fn(() => ({ artcles: [], errors: '' }));
  const props = {
    articles: [
      {
        id: 1,
        title: 'Hello John Doe',
        description: 'John Doe, Mocker',
        body: 'body of the article',
        author: { username: 'prince' }
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
    const testIt = component
      .find('input[name="searchArticle"]')
      .simulate('change', { target: { value: 'prince@gmail.com' } });
    expect(testIt).toHaveLength(1);
  });
  it('it open advanced seach', () => {
    const testIt = component.find('Link[testID="link-test"]').simulate('click', {});
    expect(testIt).toHaveLength(1);
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

    const testIt = component.find('Form[testID="seacrchForm"]');
    testIt.simulate('submit');
    expect(testIt).toHaveLength(1);
  });
});
