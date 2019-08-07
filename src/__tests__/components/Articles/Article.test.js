import React from 'react';
import { article, newHighlight } from '../../../__mocks__/article';
import user from '../../../__mocks__/user';
import { Article } from '../../../components/Articles/Article/Article';
import { shallow } from '../../../../config/enzymeConfig';

const props = {
  profile: { ...user, id: 1 },
  article: {
    id: 1,
    tagList: ['one', 'two'],
    ...article
  },
  match: { params: { slug: 'slug-slug-slug' } },
  fetchOneArticle: jest.fn(),
  getArticleHighlights: jest.fn(),
  getOneArticleReports: jest.fn(),
  saveReadingStats: jest.fn()
};

const state = { article: { tagList: ['tag1', 'tag2'] } };

describe('<Article />', () => {
  it('Render state and props', () => {
    const component = shallow(<Article state={state} {...props} />);
    component.setState(state);
  });

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
