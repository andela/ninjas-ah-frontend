import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import article from '../../../__mocks__/article';
import { Article } from '../../../components/Articles/Article/Article';
import { shallow } from '../../../../config/enzymeConfig';

describe('<Article />', () => {
  const props = {
    article: {
      id: 1,
      title: 'Hello John Doe',
      description: 'John Doe, Mocker',
      body: 'body of the article'
    },
    match: { params: { slug: 'slug-slug-slug' } },
    fetchOneArticle: jest.fn()
  };

  const component = shallow(<Article {...props} />);
  it('should render a <Article /> component ', () => {
    expect(component).toMatchSnapshot();
  });
});
