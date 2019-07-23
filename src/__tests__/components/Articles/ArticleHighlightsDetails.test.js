import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { article, newHighlight } from '../../../__mocks__/article';
import user from '../../../__mocks__/user';
import store from '../../../__mocks__/store';
import ArticleHighlightsDetails, { ArticleHighlightsDetails as ArticleHighlightsDetailsComponent } from '../../../components/Articles/Article/ArticleHighlight/ArticleHighlightsDetails/ArticleHighlightsDetails';
import { mount, shallow } from '../../../../config/enzymeConfig';

const state = {
  comment: '',
  errors: {},
  message: '',
  highlight: { commentAuthor: {} },
  highlightDetailsModalStyle: 'none'
};

const props = {
  profile: { ...user },
  article: { ...article, highlights: [newHighlight] },
  match: { params: { slug: 'slug-slug-slug' } },
  deleteArticleHighlight: jest.fn(() => true),
  clearDeleteArticleHighlightStore: jest.fn(() => true),
  clearCreateRateStore: jest.fn(() => true),
  message: '',
  errors: { message: 'Network error' }
};

const clickEvent = { srcElement: { parentNode: { getAttribute: jest.fn(attribute => attribute) } } };

describe('<ArticleHighlightsDetailsComponent />', () => {
  it('should render without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <ArticleHighlightsDetails {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const component = shallow(<ArticleHighlightsDetailsComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should show a model displaying details of a highlighted text', () => {
    const component = shallow(<ArticleHighlightsDetailsComponent {...props} />);
    component.setProps(props);
    component.setState(state);

    const closeHighlightDetailsButton = component.find('[buttonClass*="close-highlight-details-modal"]');

    component.instance().showModal('highlightDetailsModalStyle');
    expect(component.state().highlightDetailsModalStyle).toEqual('block');

    closeHighlightDetailsButton.simulate('click', {});
    expect(component.state().highlightDetailsModalStyle).toEqual('none');
    expect(component).toMatchSnapshot();
  });

  it('should display details of a highlighted text', () => {
    const component = shallow(<ArticleHighlightsDetailsComponent {...props} />);
    const highlightedText = component.instance().showHighlightDetails(clickEvent);
    expect(component).toMatchSnapshot();
  });

  it('should show a button to delete a highlighted text', () => {
    const component = shallow(<ArticleHighlightsDetailsComponent
        {...{
          ...props,
          profile: { ...user, id: 1 },
          article: { ...article, userId: 1 },
          highlight: { ...props.highlight, userId: 1 }
        }}
      />);

    const deleteHighlightDetailsButton = component.find('[buttonClass*="delete-highlight"]');

    deleteHighlightDetailsButton.simulate('click', {});
    expect(component).toMatchSnapshot();
  });

  it('should not show a button to delete a highlighted text', () => {
    const component = shallow(<ArticleHighlightsDetailsComponent
        {...{
          ...props,
          profile: { ...user, id: 11 },
          article: { ...article, userId: 1 },
          highlight: { ...props.highlight, userId: 1 }
        }}
      />);

    expect(component).toMatchSnapshot();
  });
});
