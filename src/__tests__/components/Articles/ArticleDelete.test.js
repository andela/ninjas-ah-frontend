import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '../../../__mocks__/window';
import store from '../../../__mocks__/store';
import article from '../../../__mocks__/article';
import ArticleDelete, { ArticleDelete as ArticleDeleteComponent } from '../../../components/Articles/Article/ArticleDelete/ArticleDelete';
import { mount, shallow } from '../../../../config/enzymeConfig';

const state = {
  errors: {},
  message: 'message'
};

const props = {
  article,
  deleteArticle: jest.fn(() => true),
  clearDeleteArticleStore: jest.fn(() => true),
  message: 'message',
  errors: { message: 'Network error' },
  history: { goBack: jest.fn() }
};

describe('<ArticleDelete />', () => {
  it('should render without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <ArticleDelete {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const component = mount(<MemoryRouter>
        <ArticleDeleteComponent {...props} />
      </MemoryRouter>);
    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const component = shallow(<ArticleDeleteComponent {...props} />);
    expect(component).toHaveLength(1);
  });

  it('should show a model to confirm a deletion of an article', () => {
    const component = shallow(<ArticleDeleteComponent {...props} />);
    component.setProps(props);

    const confirmModal = component.find('.ArticleDelete ConfirmModal');
    const deleteReportButton = component.find('.ArticleDelete [buttonClass*="delete-article-button"]');

    deleteReportButton.simulate('click', {});
    expect(component.state().deleteArticleConfirmModal).toEqual('block');
    confirmModal.props().onClickYes();
    confirmModal.props().onClickNo();
    expect(component.state().deleteArticleConfirmModal).toEqual('none');

    expect(component).toHaveLength(1);
  });
});
