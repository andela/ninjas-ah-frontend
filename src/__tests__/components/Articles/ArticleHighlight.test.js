import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { EditorState, convertFromRaw } from 'draft-js';
import '../../../__mocks__/window';
import { article, newHighlight } from '../../../__mocks__/article';
import user from '../../../__mocks__/user';
import store from '../../../__mocks__/store';
import ArticleHighlight, { ArticleHighlight as ArticleHighlightComponent } from '../../../components/Articles/Article/ArticleHighlight/ArticleHighlight';
import { mount, shallow } from '../../../../config/enzymeConfig';

const state = {
  comment: 'comment',
  anchorKey: 'cnu26',
  highlightedText: '',
  startIndex: 0,
  stopIndex: 10,
  selectionRectangle: { top: 0, bottom: 0, left: 0, right: 0 },
  errors: {},
  message: '',
  highlight: null,
  isSelectionInBody: true,
  highlightCommentModalStyle: 'none'
};

const props = {
  profile: { ...user },
  editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(article.body))),
  article: { ...article, highlights: [newHighlight] },
  match: { params: { slug: 'slug-slug-slug' } },
  highlightArticle: jest.fn(() => true),
  clearCreateRateStore: jest.fn(() => true),
  clearHighlightArticleStore: jest.fn(() => true),
  message: '',
  errors: { message: 'Network error' }
};

describe('<ArticleHighlightComponent />', () => {
  it('should render without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <ArticleHighlight {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });
  it('should render without crashing', () => {
    const component = mount(<ArticleHighlightComponent {...{ ...props, article: { ...article, highlights: [] } }} />);
    expect(component).toHaveLength(1);
  });
  it('should render without crashing', () => {
    const component = shallow(<ArticleHighlightComponent {...{ ...props, article: { ...article, highlights: [] } }} />);
    component.instance().componentWillUnmount();
    expect(component).toHaveLength(1);
  });

  it('should show a model containing a textarea to comment on a highlighted text', () => {
    const component = shallow(<ArticleHighlightComponent {...props} />);
    component.setProps(props);
    component.setState(state);

    const highlightCommentForm = component.find('.highlight-comment-modal Form');
    const highlightComment = component.find('TextArea[name="highlight-comment"]');
    const highlightCommentButton = component.find('[buttonClass*="highlight-comment-button"]');
    const closeHighlightCommentButton = component.find('[buttonClass*="close-highlight-comment-modal"]');

    highlightCommentButton.simulate('click', {});
    highlightComment.simulate('change', { target: { value: 'comment' } });
    highlightCommentForm.simulate('submit', { preventDefault: jest.fn() });

    expect(component.state().highlightCommentModalStyle).toEqual('block');
    closeHighlightCommentButton.simulate('click', {});
    expect(component.state().highlightCommentModalStyle).toEqual('none');
    expect(component).toHaveLength(1);
  });

  it('should return a highlighted text', () => {
    const component = shallow(<ArticleHighlightComponent {...props} />);
    const highlightedText = component
      .instance()
      .getHighlightedText(props.article.body, state.anchorKey, 0, 10);
    expect(highlightedText.length).toEqual(10);
    expect(component).toHaveLength(1);
  });

  it('should return the starting index and stopping index of the highlighted text', () => {
    const component = shallow(<ArticleHighlightComponent {...props} />);
    const indexes = component.instance().getSelectionIndexes(props.editorState);
    expect(indexes).toHaveProperty('startIndex');
    expect(indexes).toHaveProperty('stopIndex');
    expect(component).toHaveLength(1);
  });

  it('should return the selection range of the highlighted text', () => {
    const component = shallow(<ArticleHighlightComponent {...props} />);
    const selectionRange = component.instance().getSelectionRange(window.getSelection());
    expect(selectionRange).toHaveProperty('selectionRange');
    expect(selectionRange).toHaveProperty('selectionRectangle');
    expect(component).toHaveLength(1);
  });

  it('should check and update the state when a text is highlighted', () => {
    const component = shallow(<ArticleHighlightComponent {...props} />);
    component.instance().checkHighlightedText();
    expect(component.state()).toHaveProperty('startIndex');
    expect(component.state()).toHaveProperty('stopIndex');
    expect(component.state().selectionRectangle).toHaveProperty('top');
    expect(component.state().selectionRectangle).toHaveProperty('bottom');
    expect(component.state().selectionRectangle).toHaveProperty('left');
    expect(component.state().selectionRectangle).toHaveProperty('right');
    expect(component).toHaveLength(1);
  });
});
