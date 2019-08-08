import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '../../../__mocks__/window';
import { article, newArticleReport } from '../../../__mocks__/article';
import user from '../../../__mocks__/user';
import store from '../../../__mocks__/store';
import ArticlesReportsList, { ArticlesReportsList as ArticlesReportsListComponent } from '../../../components/Articles/ArticlesReportsList/ArticlesReportsList';
import { mount, shallow } from '../../../../config/enzymeConfig';

const state = {
  message: 'message',
  errors: { message: 'network error' },
  reportToDelete: 0,
  articleSlug: '',
  deleteReportLoading: {},
  deleteReportConfirmModal: 'none',
  reportDetailsModal: 'none',
  report: {},
  deleteReportButton: ''
};

const props = {
  profile: { ...user, role: 'admin' },
  currentArticlesReports: [
    { ...newArticleReport, id: 1, articleSlug: 'slug', createdAt: new Date(), reporter: user }
  ],
  getArticlesReports: jest.fn(() => true),
  deleteArticleReport: jest.fn(() => true),
  message: 'message',
  errors: { message: 'Network error' }
};

describe('<ArticlesReportsList />', () => {
  it('should render without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <ArticlesReportsList {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <ArticlesReportsListComponent {...props} />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const component = shallow(<ArticlesReportsListComponent {...props} />);
    expect(component).toHaveLength(1);
  });

  it('should show a model displaying details of a report', () => {
    const component = shallow(<ArticlesReportsListComponent {...props} />);
    component.setProps(props);
    component.setState(state);

    const reportDetailsModal = component.find('.ArticlesReportsList Modal');
    const openReportDetailsModalButton = component.find('.ArticlesReportsList [buttonClass*="show-report-details-button"]');

    openReportDetailsModalButton.simulate('click', {});
    expect(component.state().reportDetailsModalStyle).toEqual('block');
    reportDetailsModal.props().closeModal();
    expect(component.state().reportDetailsModalStyle).toEqual('none');

    expect(component).toHaveLength(1);
  });

  it('should show a model to confirm a deletion of a report', () => {
    const component = shallow(<ArticlesReportsListComponent {...props} />);
    component.setProps({ ...props, loading: true });
    component.setState(state);

    const confirmModal = component.find('.ArticlesReportsList ConfirmModal');
    const deleteReportButton = component.find('.ArticlesReportsList [buttonClass*="delete-report-button"]');

    deleteReportButton.simulate('click', {});
    expect(component.state().deleteReportConfirmModal).toEqual('block');
    confirmModal.props().onClickYes();
    confirmModal.props().onClickNo();
    expect(component.state().deleteReportConfirmModal).toEqual('none');

    expect(component).toHaveLength(1);
  });
});
