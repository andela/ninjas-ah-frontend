import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import article from '../../../__mocks__/article';
import { Article as ArticleComponent } from '../../../components/Articles/Article/Article';
import { shallow, mount } from '../../../../config/enzymeConfig';

describe('<ArticleComponent />', () => {
  const props = {
    errors: { error: ['12'] },
    article: {
      title: 'Hello John Doe',
      description: 'John Doe, Mocker',
      body: 'body of the article'
    },
    fetchOneArticle: jest.fn(),
    getArticleHighlights: jest.fn(),
    getOneArticleReports: jest.fn()
  };

  const component = shallow(<ArticleComponent {...props} />);
  it('should render a <CreateArticleComponent /> component ', () => {
    expect(component).toMatchSnapshot();
  });
});
