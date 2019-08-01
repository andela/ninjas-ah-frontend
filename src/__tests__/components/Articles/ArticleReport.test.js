import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '../../../__mocks__/window';
import { article, newArticleReport } from '../../../__mocks__/article';
import user from '../../../__mocks__/user';
import store from '../../../__mocks__/store';
import ArticleReport, { ArticleReport as ArticleReportComponent } from '../../../components/Articles/Article/ArticleReport/ArticleReport';
import { mount, shallow } from '../../../../config/enzymeConfig';

const state = {
  reportArticleModalStyle: 'none',
  reportTypes: ['Plagiarism', 'Defamation'],
  form: {
    title: 'title',
    type: 'Other',
    body: 'body'
  },
  errors: {},
  message: 'message'
};

const props = {
  profile: { ...user, role: 'admin' },
  article: { ...article, reports: [newArticleReport] },
  reportArticle: jest.fn(() => true),
  clearReportArticleStore: jest.fn(() => true),
  message: 'message',
  errors: { message: 'Network error' }
};

describe('<ArticleReport />', () => {
  it('should render without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <ArticleReport {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const component = mount(<MemoryRouter>
        <ArticleReportComponent {...props} />
      </MemoryRouter>);
    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const component = shallow(<ArticleReportComponent {...props} />);
    expect(component).toHaveLength(1);
  });

  it('should show a model containing a textarea to report an article', () => {
    const component = shallow(<ArticleReportComponent {...props} />);
    component.setProps(props);
    component.setState(state);

    const reportArticleForm = component.find('.ArticleReport Form');
    const reportArticleInput = component.find('.ArticleReport Form Input');
    const reportArticleTextArea = component.find('.ArticleReport Form TextArea');
    const openReportArticleModalButton = component.find('[buttonClass*="show-report-article-modal"]');

    openReportArticleModalButton.simulate('click', {});

    reportArticleInput.simulate('change', { target: { value: 'title' } });
    reportArticleTextArea.simulate('change', { target: { value: 'body' } });
    reportArticleForm.simulate('submit', { preventDefault: jest.fn() });

    expect(component.state().reportArticleModalStyle).toEqual('block');
    component.instance().hideModal();
    expect(component.state().reportArticleModalStyle).toEqual('none');
    expect(component).toHaveLength(1);
  });
});
