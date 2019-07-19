import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import { article, newHighlight } from '../../../__mocks__/article';
import { Article } from '../../../components/Articles/Article/Article';
import { shallow } from '../../../../config/enzymeConfig';

const props = {
  article: {
    id: 1,
    ...article
  },
  match: { params: { slug: 'slug-slug-slug' } },
  fetchOneArticle: jest.fn()
};

describe('<Article />', () => {
  it('should render a <Article /> component', () => {
    const component = shallow(<Article {...props} />);
    component.instance().onChange();
    expect(component).toMatchSnapshot();
  });

  it('should display an article', () => {
    const component = shallow(<Article {...props} />);
    component.instance().displayArticle(props.article);
    component.instance().showHighlights([], JSON.parse(article.body));
    component.instance().showHighlights([newHighlight], JSON.parse(props.article.body));
    expect(component).toMatchSnapshot();
  });
});
